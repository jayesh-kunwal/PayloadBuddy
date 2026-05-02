# PayloadBuddy

PayloadBuddy is a Firefox WebExtension created by Jayesh Kunwal for penetration testing and bug bounty workflows. It provides a fast local library of categorized payloads with search, filters, favorites, custom payload import/export, dark mode, and one-click copy.

## Security Disclaimer

Use this extension only on systems where you have explicit written authorization to test. PayloadBuddy is intended for educational, defensive, and authorized security assessment use. It does not perform exploitation automatically, does not send network requests, and does not include destructive payloads, credential theft, persistence, malware, or real data exfiltration payloads.

## Features

- Firefox Manifest V3 WebExtension
- 90 built-in safe test payloads
- Categories for XSS, DOM XSS, HTML Injection, Content Spoofing, iframe Injection, SSTI, SQL Injection, Command Injection, XXE, Open Redirect, and WAF bypass testing
- Search by name, tag, payload, context, or description
- Category and context filters
- One-click raw payload copy
- Encoded variants:
  - URL encoded
  - HTML entity encoded
  - Unicode escaped
  - Base64
- Favorites saved locally
- Custom payloads saved locally
- Import/export custom payloads as JSON
- Dark mode
- No analytics, no tracking, no remote network requests

## Folder Structure

```text
PayloadBuddy/
├── manifest.json
├── popup.html
├── popup.css
├── popup.js
├── payloads.js
├── README.md
└── icons/
    ├── icon-16.png
    ├── icon-32.png
    ├── icon-48.png
    └── icon-128.png
```

## Installation in Firefox

1. Open Firefox Developer Edition.
2. Navigate to `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on**.
4. Select `manifest.json` from the `PayloadBuddy` folder.
5. Click the Extensions (🧩) icon in Chrome toolbar > Find PayloadBuddy > Click Pin

## Installation in Google Chrome

1. Open Google Chrome.
2. Navigate to chrome://extensions/.
3. Turn Developer mode ON (top-right corner).
4. Click Load unpacked.
5. Select the PayloadBuddy folder (the extracted folder containing manifest.json).
6. Click the Extensions (🧩) icon in the Chrome toolbar.
7. Find PayloadBuddy and click Pin.

## Usage

1. Search or filter payloads by category/context.
2. Click **Copy Raw** to copy the original payload.
3. Click **Generate Variant** to create encoded versions.
4. Click **Copy Encoded** to copy the URL-encoded variant.
5. Use the star button to save favorites.
6. Add your own payloads from the custom payload panel.
7. Export/import custom payloads as JSON.

## Custom Payload JSON Format

```json
[
  {
    "id": "custom-example-001",
    "category": "XSS",
    "name": "Example HTML Context Test",
    "payload": "<svg onload=alert(document.domain)>",
    "context": "HTML",
    "description": "Tests script execution in an HTML rendering context.",
    "risk": "High",
    "tags": ["xss", "html", "authorized-testing"]
  }
]
```

## Author

Developed by Jayesh Kunwal.
