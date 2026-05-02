const storage = typeof browser !== "undefined" ? browser.storage.local : chrome.storage.local;

const state = {
  payloads: [],
  customPayloads: [],
  favorites: new Set(),
  encodedCache: new Map(),
  showOnlyFavorites: false,
  theme: "dark"
};

const $ = (selector) => document.querySelector(selector);
const payloadList = $("#payloadList");
const template = $("#payloadCardTemplate");

async function getStorage(keys) {
  return await storage.get(keys);
}

async function setStorage(values) {
  return await storage.set(values);
}

function htmlEntityEncode(value) {
  return value.replace(/[&<>'"()]/g, char => `&#${char.charCodeAt(0)};`);
}

function unicodeEscape(value) {
  return Array.from(value).map(char => `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}`).join("");
}

function base64Encode(value) {
  return btoa(unescape(encodeURIComponent(value)));
}

function generateVariants(payload) {
  return {
    "URL encoded": encodeURIComponent(payload),
    "HTML entity encoded": htmlEntityEncode(payload),
    "Unicode escaped": unicodeEscape(payload),
    "Base64": base64Encode(payload)
  };
}

async function copyText(text, button) {
  await navigator.clipboard.writeText(text);
  const old = button.textContent;
  button.textContent = "Copied";
  setTimeout(() => (button.textContent = old), 900);
}

function normalizePayload(item, source = "builtin") {
  return {
    id: item.id || `custom-${Date.now()}`,
    category: item.category || "Custom",
    name: item.name || "Untitled Payload",
    payload: item.payload || "",
    context: item.context || "General",
    description: item.description || "Custom authorized-testing payload.",
    risk: item.risk || "Medium",
    tags: Array.isArray(item.tags) ? item.tags : ["custom"],
    source
  };
}

function getFilteredPayloads() {
  const search = $("#searchInput").value.trim().toLowerCase();
  const category = $("#categoryFilter").value;
  const context = $("#contextFilter").value;

  return state.payloads.filter(item => {
    const haystack = [item.name, item.category, item.context, item.description, item.payload, ...(item.tags || [])].join(" ").toLowerCase();
    return (!search || haystack.includes(search)) &&
      (category === "all" || item.category === category) &&
      (context === "all" || item.context === context) &&
      (!state.showOnlyFavorites || state.favorites.has(item.id));
  });
}

function populateSelect(selectEl, defaultLabel, values) {
  selectEl.replaceChildren();

  const defaultOption = document.createElement("option");
  defaultOption.value = "all";
  defaultOption.textContent = defaultLabel;
  selectEl.appendChild(defaultOption);

  values.forEach(value => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    selectEl.appendChild(option);
  });
}

function populateFilters() {
  const categories = [...new Set(state.payloads.map(p => p.category))].sort();
  const contexts = [...new Set(state.payloads.map(p => p.context))].sort();
  populateSelect($("#categoryFilter"), "All Categories", categories);
  populateSelect($("#contextFilter"), "All Contexts", contexts);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));
}

function render() {
  const filtered = getFilteredPayloads();
  $("#resultCount").textContent = `${filtered.length} payload${filtered.length === 1 ? "" : "s"}`;
  payloadList.innerHTML = "";

  if (!filtered.length) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent = "No matching payloads found.";
    payloadList.appendChild(emptyState);
    return;
  }

  filtered.forEach(item => {
    const card = template.content.cloneNode(true);
    card.querySelector(".payload-name").textContent = item.name;
    const metaLine = card.querySelector(".meta-line");
    metaLine.replaceChildren();
    [item.category, item.context, item.risk, item.source === "custom" ? "Custom" : "Built-in"].forEach(value => {
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = value;
      metaLine.appendChild(badge);
    });
    card.querySelector(".description").textContent = item.description;
    card.querySelector("code").textContent = item.payload;

    const favoriteBtn = card.querySelector(".favorite-btn");
    favoriteBtn.textContent = state.favorites.has(item.id) ? "★" : "☆";
    favoriteBtn.addEventListener("click", async () => {
      state.favorites.has(item.id) ? state.favorites.delete(item.id) : state.favorites.add(item.id);
      await setStorage({ favorites: [...state.favorites] });
      render();
    });

    card.querySelector(".copy-raw").addEventListener("click", e => copyText(item.payload, e.currentTarget));

    const variantPanel = card.querySelector(".variant-panel");
    const copyEncoded = card.querySelector(".copy-encoded");
    card.querySelector(".generate").addEventListener("click", () => {
      const variants = generateVariants(item.payload);
      state.encodedCache.set(item.id, variants["URL encoded"]);
      variantPanel.classList.remove("hidden");
      variantPanel.replaceChildren();
      Object.entries(variants).forEach(([label, value]) => {
        const labelEl = document.createElement("strong");
        labelEl.textContent = label;

        const codeEl = document.createElement("code");
        codeEl.textContent = value;

        variantPanel.appendChild(labelEl);
        variantPanel.appendChild(codeEl);
      });
      copyEncoded.disabled = false;
    });

    copyEncoded.addEventListener("click", e => copyText(state.encodedCache.get(item.id) || encodeURIComponent(item.payload), e.currentTarget));
    payloadList.appendChild(card);
  });
}

async function addCustomPayload() {
  const payload = normalizePayload({
    id: `custom-${crypto.randomUUID()}`,
    name: $("#customName").value.trim(),
    category: $("#customCategory").value.trim() || "Custom",
    context: $("#customContext").value.trim() || "General",
    description: $("#customDescription").value.trim(),
    payload: $("#customPayload").value,
    tags: ["custom", "authorized-testing"]
  }, "custom");

  if (!payload.payload.trim()) return;
  state.customPayloads.push(payload);
  await setStorage({ customPayloads: state.customPayloads });
  state.payloads = [...BUILTIN_PAYLOADS.map(p => normalizePayload(p)), ...state.customPayloads];
  populateFilters();
  render();
  ["#customName", "#customCategory", "#customContext", "#customDescription", "#customPayload"].forEach(id => $(id).value = "");
}

function exportCustomPayloads() {
  const allPayloads = state.payloads.map(({ source, ...payload }) => payload);
  const blob = new Blob([JSON.stringify(allPayloads, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "PayloadBuddy-all-payloads.json";
  a.click();
  URL.revokeObjectURL(url);
}

async function importCustomPayloads(event) {
  const file = event.target.files[0];
  if (!file) return;
  const text = await file.text();
  const imported = JSON.parse(text).map(item => normalizePayload(item, "custom"));
  state.customPayloads = [...state.customPayloads, ...imported];
  await setStorage({ customPayloads: state.customPayloads });
  state.payloads = [...BUILTIN_PAYLOADS.map(p => normalizePayload(p)), ...state.customPayloads];
  populateFilters();
  render();
}

async function init() {
  const saved = await getStorage(["favorites", "customPayloads"]);
  state.favorites = new Set(saved.favorites || []);
  state.customPayloads = (saved.customPayloads || []).map(p => normalizePayload(p, "custom"));
  state.theme = "dark";
  document.documentElement.dataset.theme = "dark";
  state.payloads = [...BUILTIN_PAYLOADS.map(p => normalizePayload(p)), ...state.customPayloads];

  populateFilters();
  render();

  ["#searchInput", "#categoryFilter", "#contextFilter"].forEach(selector => $(selector).addEventListener("input", render));
  $("#showFavorites").addEventListener("click", () => {
    state.showOnlyFavorites = !state.showOnlyFavorites;
    $("#showFavorites").textContent = state.showOnlyFavorites ? "Show All" : "★ Favorites";
    render();
  });
  $("#addCustom").addEventListener("click", addCustomPayload);
  $("#exportPayloads").addEventListener("click", exportCustomPayloads);
  $("#importPayloads").addEventListener("change", importCustomPayloads);
}

init();
