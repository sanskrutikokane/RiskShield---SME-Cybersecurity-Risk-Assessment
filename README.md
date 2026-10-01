# RiskShield — Cybersecurity Risk Assessment Framework for Small Businesses

**Developed by: Sanskruti Kokane**

RiskShield is a static, GitHub Pages-ready prototype for assessing common cybersecurity risks in small and medium enterprises (SMEs).

## Features

- Black/dark cybersecurity dashboard
- Risk assessment for phishing, ransomware, insider threats, unpatched systems, weak authentication and third-party exposure
- Likelihood × Impact scoring model
- Automatic Low / Medium / High / Critical classification
- Five-part security lifecycle: Identify, Protect, Detect, Respond, Recover
- SME case-study examples
- Practical mitigation checklist
- Responsive design for mobile and desktop
- No server, database or API required

## Project structure

```text
SME-RiskShield-Cybersecurity/
├── index.html
├── README.md
└── assets/
    ├── style.css
    └── app.js
```

## Run locally

Open `index.html` in a browser.

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `SME-RiskShield-Cybersecurity`.
2. Upload `index.html`, `README.md`, and the `assets` folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save and wait for GitHub Pages to publish the site.
7. Your site will normally be available at:
   `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`

## Risk model

Each threat receives:

`Risk Score = Likelihood × Impact`

Both values range from 1 to 5.

| Score | Level |
|---|---|
| 1–4 | Low |
| 5–9 | Medium |
| 10–16 | High |
| 17–25 | Critical |

This is a demonstration model, not a substitute for a professional risk assessment.

## Framework note

The lifecycle presented in this prototype follows the familiar NIST Cybersecurity Framework function structure: Identify, Protect, Detect, Respond and Recover. Organizations should consult the current NIST CSF documentation when implementing a real program.

## Scope

This prototype is intentionally front-end only. The sample risk values and case studies are illustrative and should be replaced with organization-specific evidence during real assessments.
