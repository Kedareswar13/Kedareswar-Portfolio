# Pattapu Kedareswar: portfolio

Static site (HTML + CSS + vanilla JS, no build step), live at **https://kedareswar.vercel.app**.

```
index.html     page structure: hero, about, experience, projects, skills, education, contact
style.css      dark theme, animations, responsive layout
main.js        project cards (the `projects` array), filters, typed roles, neural-network canvas, reveal animations
resume.pdf     linked from the hero / contact
profile.*      profile photo (webp + jpg fallback)
og-image.jpg   social preview image
favicon.svg
```

## Edit the projects

All project cards come from the `projects` array at the top of `main.js`. Fields:
- `title`, `cat` (`ai` / `fullstack` / `systems` / `ml`, used by the filter buttons), `catLabel`;
- `featured` (wide card), `flags` (`live`, `hack`, `new`, `eval`, `wip`), `tagline`, `desc`, `points`;
- `metrics`: optional headline numbers;
- `stack`, `repo` (optional **Code** button), `live` (optional **Live demo** button). An empty `''` hides that button.

NormBridge AI and CareHarbor AI start with empty `repo` and `live`, so no buttons show until you paste the links. See [PERSONAL_LAPTOP_SETUP.md](PERSONAL_LAPTOP_SETUP.md), step 4.

## Preview locally

Open `index.html` in a browser, or serve the folder:

```powershell
python -m http.server 8080      # then open http://localhost:8080
```

## Push to GitHub and connect Vercel (personal laptop)

```powershell
cd <this folder>
git init -b main
git add .
git commit -m "Portfolio: NormBridge AI and CareHarbor AI as featured projects"
# create an EMPTY repo named "portfolio" on github.com (no README), then:
git remote add origin https://github.com/Kedareswar13/portfolio.git
git push -u origin main
```

Then connect it to Vercel, keeping the same URL:

1. Sign in at https://vercel.com with the account that owns the site.
2. Open the existing project **kedareswar-pattapu** → **Settings → Git → Connect Git Repository** → choose `Kedareswar13/portfolio`.
3. Check **Settings → Build and Deployment**:
   - Framework Preset: **Other**
   - Build Command: *(empty)*
   - Output Directory: *(empty or `.`)*
4. From now on every `git push` to `main` deploys to production automatically. Pull requests get preview URLs. Both https://kedareswar.vercel.app and https://kedareswar-pattapu.vercel.app keep working.

If you'd rather start fresh: **Add New → Project → Import** `Kedareswar13/portfolio` with the same settings. Then move the `kedareswar.vercel.app` domain to the new project under **Settings → Domains**.

`.gitignore` excludes `.vercel/` and `.env*`, so no Vercel tokens end up in Git.
