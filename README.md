# Pattapu Kedareswar — Personal Portfolio

A responsive, interactive portfolio website showcasing my work across **AI and agentic systems, LLM evaluation, full-stack development, backend engineering, machine learning, and research**.

🌐 **Live portfolio:** https://kedareswar-pattapu.vercel.app/  
💻 **Source code:** https://github.com/Kedareswar13/Kedareswar-Portfolio  
👤 **GitHub profile:** https://github.com/Kedareswar13

---

## Overview

This repository contains the source code for my personal portfolio. It is designed as a live, browsable portfolio as well as a technical overview of selected projects, experience, skills, education, and research.

The site is built with plain HTML, CSS, and JavaScript. It does not require a frontend framework or a build step to run locally.

## Highlights

- **Responsive design** for desktop, tablet, and mobile screens
- **Animated neural-network canvas** in the hero background
- **Intro/boot sequence** and progress indicator
- **Interactive hero text and typing effects**
- **Scroll-reveal animations**
- **Project showcase** with category filters and dynamically rendered project cards
- **Project links** for source repositories and live demos where configured
- **Experience, skills, education, research, and contact sections**
- **Résumé download**
- **Favicon and social-sharing preview assets**
- **Vercel deployment** with GitHub-based source control

> Motion effects respect the user's operating-system/browser accessibility preferences. If Windows Animation effects are disabled, some browser-visible animations may be reduced or skipped.

## Technology

- HTML5
- CSS3 — responsive layout, styling, transitions, and animation
- Vanilla JavaScript — canvas animation, project data/rendering, filters, and interactions
- HTML Canvas API
- `IntersectionObserver`
- Vercel — hosting and deployment
- Git and GitHub — version control

## Repository structure

```text
Kedareswar-Portfolio/
├── index.html       # Page structure and section content
├── style.css        # Theme, responsive layout, and visual effects
├── main.js          # Project data, project-card rendering, filters,
│                    # hero interactions, canvas animation, and reveals
├── profile.webp     # Profile image (WebP)
├── profile.jpg      # Profile image fallback
├── resume.pdf       # Résumé linked from the site
├── og-image.jpg     # Social-sharing preview image
├── favicon.svg      # Browser tab icon
├── .gitignore       # Files excluded from Git
├── .vercelignore    # Files excluded from Vercel uploads
└── README.md        # Project documentation
```

## Portfolio sections

The live site includes:

- **About** — background and professional interests
- **Experience** — practical work on conversational AI, agent tooling, evaluation, and quality
- **Projects** — selected AI, full-stack, systems, and machine-learning work
- **Skills** — languages, frameworks, AI tooling, evaluation, data, and development tools
- **Education and research** — academic background and EEG biometric research
- **Contact** — ways to connect, including professional and developer profiles

## Featured work

The project cards are maintained in the `projects` array in `main.js`. The portfolio spans several areas, including:

- Agentic AI, MCP-based tool use, and LLM evaluation
- Full-stack applications and analytics
- Retrieval-augmented generation and privacy-oriented AI
- Backend systems and durable execution
- Machine learning and computer vision
- EEG-based biometric research

Project availability, source links, and live-demo links depend on the values configured for each card in `main.js`.

## Run locally

You can open `index.html` directly in a browser. For a local HTTP server, use Python:

```bash
python -m http.server 8080
```

Then visit:

http://localhost:8080

Alternatively, if Python is not installed, use the Live Server extension in Visual Studio Code.

## Update project cards and links

1. Open `main.js`.
2. Find the `projects` array.
3. Update the relevant project's title, description, stack, repository URL (`repo`), and demo URL (`live`).
4. Save the file and test locally before pushing.

The rendering code displays the **Code** link when a project's `repo` value is non-empty and the **Live** link when its `live` value is non-empty. If a link should not appear, check that project's values in `main.js`.

Use the full repository URL, for example:

```javascript
repo: 'https://github.com/USERNAME/REPOSITORY',
live: 'https://your-app.vercel.app'
```

Use an empty string (`''`) for a link that is not available yet.

## Deploy on Vercel

This is a static website and normally requires **no build command**.

1. Open the project in the Vercel dashboard.
2. Confirm the connected repository is `Kedareswar13/Kedareswar-Portfolio`.
3. Confirm the intended production branch is `main`.
4. For this plain HTML/CSS/JavaScript project, use the `Other` framework preset and leave the build command empty. The output directory should be the project root (usually `.` or the default appropriate for a static project).
5. Push changes to the configured production branch. Vercel should create a deployment for that commit.
6. In Vercel → **Deployments**, verify that the newest production deployment corresponds to the commit you just pushed.

**Live URL:** https://kedareswar-pattapu.vercel.app/

Keep this URL as the canonical portfolio link in this README and in profile materials.

## Troubleshooting a change that does not appear live

If a change in `main.js`, such as a new project **Code** button, appears on GitHub but not on the deployed site:

1. Open GitHub and confirm the change is committed to `main` in this repository.
2. In Vercel → **Settings → Git**, confirm the correct repository and production branch.
3. In Vercel → **Deployments**, check whether a deployment was triggered for that commit and whether it succeeded.
4. Open the newest production deployment and confirm its commit hash matches the latest GitHub commit.
5. Open the live site with DevTools open, enable **Disable cache** in the Network panel, and perform a hard reload.
6. Inspect the `main.js` network request. Confirm it returns `200` and is the version expected.
7. If the deployment is missing or points to an older commit, redeploy the correct commit. If it is the right commit, inspect browser Console errors and the relevant project's `repo` / `live` values in `main.js`.

Do not disconnect GitHub as a first troubleshooting step: Git integration is useful when the production branch and deployment are configured correctly.

## Connect

- **Portfolio:** https://kedareswar-pattapu.vercel.app/
- **GitHub:** https://github.com/Kedareswar13
- **Repository:** https://github.com/Kedareswar13/Kedareswar-Portfolio

---

© Pattapu Kedareswar. Built with care and shipped with attention to quality.
