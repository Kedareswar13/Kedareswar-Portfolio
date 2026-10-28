# Portfolio: personal laptop setup

The portfolio is a static site (HTML + CSS + vanilla JS). There is no build step and nothing to install to run it. Live at **https://kedareswar.vercel.app**.

Order of work on the personal laptop:
1. Unzip and check the folder.
2. Preview it locally.
3. Push it to GitHub and connect Vercel.
4. When NormBridge AI and CareHarbor AI are on GitHub (and later deployed), paste their links and push again.

---

## 1. What you need

| Need | Why | Install |
|---|---|---|
| **Git** | push to GitHub | `winget install Git.Git --scope user` |
| A **GitHub** account (`Kedareswar13`) | hosts the code | https://github.com |
| The **Vercel** account that owns `kedareswar.vercel.app` | hosting | https://vercel.com (sign in with GitHub) |
| Python *(optional)* | local preview server | already installed with the two projects (`uv`), or just open `index.html` |

Use personal accounts only on the personal laptop.

---

## 2. Unzip and check the folder

Unzip somewhere outside OneDrive, for example `C:\Projects\portfolio`. Open PowerShell in that folder and check:

```powershell
Test-Path .\index.html      # must print True (if False, you're one folder too high: cd portfolio)
Test-Path .\main.js         # must print True
```

The folder should contain: `index.html`, `style.css`, `main.js`, `resume.pdf`, `profile.webp`, `profile.jpg`, `og-image.jpg`, `favicon.svg`, `README.md`, this file, `.gitignore`, `.vercelignore`.

If a `.vercel` folder came along, you can leave it or delete it. It holds no passwords and is git-ignored.

---

## 3. Preview locally

Double-click `index.html`, or serve the folder:

```powershell
python -m http.server 8080      # then open http://localhost:8080   (Ctrl+C to stop)
```

The NormBridge AI and CareHarbor AI cards show **no Code / Live demo buttons** yet. That's expected; step 4 adds them.

---

## 4. Add the project links (do this after pushing the projects)

Open `main.js` in any editor and press **Ctrl+F**. Search for `title: 'NormBridge AI'`. A few lines below it (around **line 36–37**) you'll see:

```js
      // LINKS: paste the full URLs between the quotes. Empty = that button is hidden.
      repo: '',   // GitHub, e.g. 'https://github.com/Kedareswar13/normbridge'
      live: ''    // deployed app, e.g. 'https://normbridge.vercel.app'
```

Then search for `title: 'CareHarbor AI'`. The same two lines are around **line 52–53**.

Paste each URL **between the two quotes**:

```js
      repo: 'https://github.com/Kedareswar13/normbridge',   // GitHub, e.g. ...
      live: ''    // deployed app, e.g. ...
```

Rules:
- `repo` filled → a **Code** button (GitHub icon) appears on the card.
- `live` filled → a **Live demo** button appears.
- Left as `''` → that button is hidden. If both are empty, the card has no buttons at all.
- Keep the quotes and the comma after `repo: '...'`. Don't add a comma after `live: '...'`.
- Use the full address starting with `https://`.

Typical timeline:
1. After you push NormBridge AI to GitHub, fill its `repo`.
2. After you push CareHarbor AI to GitHub, fill its `repo`.
3. After you deploy either project, fill its `live`.

After each change, refresh the local preview (step 3) to check the buttons, then publish (step 6).

---

## 5. Push to GitHub (first time)

1. On https://github.com/new create an **empty** repository named `portfolio`: no README, no .gitignore, no licence.
2. In the portfolio folder:

```powershell
git config --global user.name  "Pattapu Kedareswar"          # once per laptop
git config --global user.email "<your personal email>"       # once per laptop
git init -b main
git add .
git status                                                     # .env / .vercel must NOT be listed
git commit -m "Portfolio: NormBridge AI and CareHarbor AI as featured projects"
git remote add origin https://github.com/Kedareswar13/portfolio.git
git push -u origin main
```

The first push opens a browser window to sign in to GitHub.

---

## 6. Connect Vercel (first time), then publish updates

Keep the existing URL by connecting the repo to the existing Vercel project:

1. Sign in at https://vercel.com and open the project **kedareswar-pattapu**.
2. **Settings → Git → Connect Git Repository** → choose `Kedareswar13/portfolio`.
3. **Settings → Build and Deployment**:
   - Framework Preset: **Other**
   - Build Command: *(empty)*
   - Output Directory: *(empty or `.`)*

From then on, **every push to `main` deploys automatically**. To publish a change (for example new project links):

```powershell
git add main.js
git commit -m "Portfolio: add NormBridge AI GitHub link"
git push
```

Wait about 30 seconds, open https://kedareswar.vercel.app and press **Ctrl+F5** (hard refresh) to see the change.

**Starting fresh instead:** use **Add New → Project → Import** `Kedareswar13/portfolio` with the same settings. Then move the `kedareswar.vercel.app` domain to the new project under **Settings → Domains**.

---

## 7. Troubleshooting

| Problem | Fix |
|---|---|
| The page is blank or all project cards disappeared | A typo in `main.js`, usually a missing quote or comma near the line you edited. Press F12 → Console to see the line number. |
| A button doesn't appear | The URL isn't between the quotes, or the line was edited on a different project. Search for the title again. |
| The live site didn't change | Check the deployment in Vercel → **Deployments**, then hard-refresh with Ctrl+F5. |
| `git push` asks for a password | Use the browser sign-in window. GitHub doesn't accept account passwords on the command line. |
| `Permission denied` / wrong account on push | Sign out of the old account in Windows **Credential Manager** → Windows Credentials → `git:https://github.com`, then push again. |
