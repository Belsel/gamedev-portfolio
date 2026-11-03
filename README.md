# Game Dev Portfolio — Iván Contreras Guevara

Static single-page game development portfolio (plain HTML/CSS/JS) with an EN/ES toggle, deployable to GitHub Pages.

## Structure

- `index.html` — page content; every translatable string has an `.en` and `.es` span
- `style.css` — theming (light/dark), layout, language visibility
- `script.js` — nav toggle, theme toggle, language toggle (defaults to the browser language)
- `assets/` — game key art (Steam pages and press kits), studio logo, and a CC0 stock photo for Virtual Chess
- `cv/` — CV PDFs in English and Spanish

## Deploying to GitHub Pages

1. Create an empty GitHub repo (e.g. `gamedev-portfolio`) and push this folder to it.
2. Repo Settings → Pages → Source: deploy from `main` branch, root folder.
3. Site will be live at `https://<username>.github.io/<repo>/`.
