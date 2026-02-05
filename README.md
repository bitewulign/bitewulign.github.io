# myPages (GitHub Pages Portfolio)

This is a lightweight, responsive academic-style portfolio (multi-page) designed for GitHub Pages.

## Quick start (GitHub Pages)
1. Create a repo named **<yourusername>.github.io**
2. Upload all files in this folder to the repo root
3. In GitHub: **Settings → Pages → Deploy from a branch → main / (root)**
4. Your site will be live at: https://<yourusername>.github.io

## Customize
- Replace `Your Name` and placeholder text in:
  - `index.html`
  - `pages/about.html`
  - `pages/research.html`
  - `pages/experience.html`
  - `pages/prospective.html`
  - `pages/lab.html`
  - `pages/cv.html`
- Add your photo (optional): replace `assets/img/profile-placeholder.svg` with `profile.jpg` and update the `<img>` tag.
- Add your CV PDF to `assets/` (e.g., `assets/cv.pdf`) and update `pages/cv.html`.

## Research filtering
The Research page supports simple tag filtering.
Edit each card's `data-tags` attribute in `pages/research.html`.
