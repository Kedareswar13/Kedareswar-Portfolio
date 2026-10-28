(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------------- Loader ---------------- */
  const start = performance.now();
  const hideLoader = () => {
    const wait = Math.max(0, 1300 - (performance.now() - start));
    setTimeout(() => {
      $('#loader').classList.add('done');
      document.body.classList.remove('is-loading');
      revealHero();
    }, reduceMotion ? 0 : wait);
  };
  if (document.readyState === 'complete') hideLoader(); else window.addEventListener('load', hideLoader);

  $('#year').textContent = new Date().getFullYear();

  /* ---------------- Projects data ---------------- */
  const GH = 'https://github.com/Kedareswar13/';
  const projects = [
    {
      title: 'NormBridge AI', cat: 'ai', catLabel: 'AI · Production RAG', featured: true,
      flags: [['new', 'New'], ['eval', 'Eval-driven']],
      tagline: 'Your university policy assistant: it connects natural-language questions to official rules and page-level evidence.',
      desc: 'A self-hosted RAG assistant over 20 official SRM University-AP policy PDFs, several of them scanned and read with GLM-OCR. Hybrid retrieval, cross-encoder re-ranking and a small local LLM answer on a CPU laptop in about 6 s, streamed token by token. Every answer is scored live, and every change is gated by evals.',
      points: [
        'Hybrid retrieval (vector + BM25 fused with RRF), structure-aware chunking with contextual headers, doc-level cross-encoder re-ranking, multi-document answers and follow-up rewriting',
        'Eval-driven: a 54-case golden set plus a held-out set never used for tuning, live RAG-triad scoring, and an LLM judge checked with Cohen\'s κ. The admin timeline and heatmap show what each run caught and which change fixed it',
        '4-layer RAG security on signed identity: injection blocked before retrieval, role filters inside the search, fixed prompt slots and a PII-masked audit log. Plus query routing, SSE streaming, tracing and server-side chat history'
      ],
      metrics: [['96%', 'golden set'], ['85%', 'held-out set'], ['100%', 'right document'], ['~6 s', 'on a CPU laptop']],
      stack: ['Python', 'Flask', 'React', 'PostgreSQL', 'ChromaDB', 'Ollama · Qwen2.5', 'Cross-encoder', 'GLM-OCR', 'Docker', 'GitHub Actions'],
      // LINKS: paste the full URLs between the quotes. Empty = that button is hidden.
      repo: '',   // GitHub, e.g. 'https://github.com/Kedareswar13/normbridge'
      live: ''    // deployed app, e.g. 'https://normbridge.vercel.app'
    },
    {
      title: 'CareHarbor AI', cat: 'ai', catLabel: 'AI · Agentic + MCP', featured: true,
      flags: [['new', 'New'], ['eval', 'Safety-first']],
      tagline: 'Your clinic\'s first point of contact for patient questions, appointment workflows, prescription queries and safe escalation to staff.',
      desc: 'A LangGraph multi-agent receptionist for a primary-care clinic. Emergency red-flag rules run before any model, symptom guidance comes only from the clinic\'s own leaflets with citations, and appointments go through MCP tools behind a human-in-the-loop confirmation card. Runs fully local on a CPU.',
      points: [
        'LangGraph supervisor with per-agent tool allow-lists, interrupt() confirmation before any write, a checkpointer and privacy-preserving long-term memory',
        '12 FastMCP tools with identity bound to the verified session, never passed as arguments; idempotent writes and an audit log',
        'Vectorless RAG (BM25 + Hinglish expansion, multi-query RRF, a CRAG gate) lifts Hit@1 from 78% to 100%. 10 deterministic eval suites run as a CI gate: 0 leaks, 0 unsafe answers'
      ],
      metrics: [['100%', 'red-flag recall'], ['0', 'PHI leaks'], ['10', 'eval suites'], ['221', 'tests']],
      stack: ['Python', 'LangGraph', 'FastMCP', 'FastAPI', 'SQLite', 'React + Vite', 'Ollama · Qwen2.5', 'SSE', 'Docker'],
      // LINKS: paste the full URLs between the quotes. Empty = that button is hidden.
      repo: '',   // GitHub, e.g. 'https://github.com/Kedareswar13/careharbor'
      live: ''    // deployed app, e.g. 'https://careharbor.example.com'
    },
    {
      title: 'SkillForge AI', cat: 'ai', catLabel: 'AI · Agentic assessment', featured: true,
      flags: [['live', 'Live'], ['hack', 'Deccan AI Catalyst Hackathon 2026']],
      tagline: 'A resume says what you claim to know — SkillForge proves it.',
      desc: 'An end-to-end AI platform that parses a resume and a job description, runs an adaptive conversational assessment that changes difficulty based on your answers, and generates a personalised learning roadmap to close the real skill gaps.',
      points: ['Evidence-based skill extraction and resume ↔ JD gap analysis', 'Adaptive AI interviewer that neutralises memorised answers', '3-tier microservice architecture that isolates CPU-heavy LLM/OCR work from the API gateway'],
      stack: ['React + Vite', 'Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'Prisma', 'Groq · Llama 3.3'],
      repo: GH + 'SkillForge-AI', live: 'https://skill-forge-ai-three.vercel.app'
    },
    {
      title: 'PrivacyProtector', cat: 'ai', catLabel: 'AI · Local-LLM agent',
      flags: [],
      tagline: 'A personal privacy agent that finds where your data is exposed online.',
      desc: 'Chat-based agent that answers privacy questions with a local LLM, or searches the web for your name, email and photos — then scores each finding by risk and drafts takedown emails.',
      points: ['Intent routing between Q&A and web-search + classify', 'High / Medium / Low risk scoring with evidence', 'MCP-style tool registry, JWT auth and explicit consent gates'],
      stack: ['Python', 'FastAPI', 'Ollama', 'Next.js 14', 'TypeScript', 'SQLModel', 'Serper API', 'JWT'],
      repo: GH + 'Privacy_Protector'
    },
    {
      title: 'CodeMate — AI Safe Terminal', cat: 'ai', catLabel: 'AI · NL → commands',
      flags: [],
      tagline: 'Plain English in, safe sandboxed terminal commands out.',
      desc: 'A full-stack app that translates natural-language instructions into terminal commands and executes them in a restricted sandbox — with a strict validator and a non-shell executor that only allows whitelisted primitives.',
      points: ['Guardrails-first design: validate before execute', 'No shell injection surface — whitelisted primitives only'],
      stack: ['Python', 'FastAPI', 'JavaScript', 'HTML/CSS'],
      repo: GH + 'CodeMate-Python-based-web-terminal'
    },
    {
      title: 'Adobe India Hackathon 2025', cat: 'ai', catLabel: 'AI · Document intelligence',
      flags: [['hack', 'Hackathon']],
      tagline: 'Understand PDFs the way a persona would.',
      desc: 'Two offline, containerised solutions: (1A) extracts structured title/heading outlines from PDFs; (1B) analyses whole PDF collections for a given persona and job-to-be-done, using semantic search to rank the most relevant sections into structured JSON.',
      points: ['Persona-driven semantic retrieval with relevance scores', 'Runs fully offline in Docker — no internet at inference'],
      stack: ['Python', 'Semantic search', 'NLP', 'Docker'],
      repo: GH + '-Adobe-India-Hackathon25'
    },
    {
      title: 'ConnectSRMAP', cat: 'fullstack', catLabel: 'Full-stack · Social platform', featured: true,
      flags: [['live', 'Live']],
      tagline: 'A premium, dark-themed social network exclusively for the SRM University–AP community.',
      desc: 'Students share moments, follow peers and discuss campus life in a secure, exclusive space — with OTP-verified sign-up, rich media posts, likes, saves, comments and people discovery.',
      points: ['JWT auth with OTP email verification for campus-only access', 'Cloudinary image/video uploads and an infinite-scroll feed', 'Redux state, shadcn/ui components and glassmorphism UI'],
      stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
      repo: GH + 'ConnectSRMAP', live: 'https://connect-srmap.vercel.app'
    },
    {
      title: 'Xeno Shopify Insights', cat: 'fullstack', catLabel: 'Full-stack · Analytics',
      flags: [['live', 'Live']],
      tagline: 'Multi-tenant analytics for Shopify stores.',
      desc: 'Ingests orders, customers and products from the Shopify Admin API into PostgreSQL with background sync, then serves dashboards: sales overview, AOV, top products/customers, new vs returning, discounts impact and a traffic heatmap.',
      points: ['Multi-tenant data ingestion with manual + background sync', 'REST analytics API with Prisma ORM; Docker for local Postgres'],
      stack: ['Next.js', 'React', 'TanStack Query', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Docker'],
      repo: GH + 'Xeno_Shopify_Data_Ingestion_and_Insights', live: 'https://xeno-shopify-data-ingestion-and-ins.vercel.app'
    },
    {
      title: 'Durable Execution Engine', cat: 'systems', catLabel: 'Systems · Java',
      flags: [],
      tagline: 'Workflows that survive crashes and resume exactly where they stopped.',
      desc: 'A native durable-execution engine where every side-effecting step is wrapped and persisted to SQLite with status, output and run metadata — so a restarted workflow replays completed steps instead of re-running them.',
      points: ['Step primitive with deterministic step keys and sequence numbers', 'Persistent RUNNING / COMPLETED / FAILED state for safe recovery'],
      stack: ['Java 21', 'SQLite', 'Maven'],
      repo: GH + 'Zeotap-Assignment'
    },
    {
      title: 'High-Throughput Fan-Out Engine', cat: 'systems', catLabel: 'Systems · Java',
      flags: [],
      tagline: 'Stream huge files to many sinks — without running out of memory.',
      desc: 'Streams large CSV/JSONL files record by record and fans each one out to multiple sinks in parallel, with sink-specific transforms, per-sink rate limits, bounded queues for back-pressure, retries and a dead-letter queue.',
      points: ['Strategy pattern for per-sink transformations', 'Back-pressure, 3× retry and JSONL DLQ; live throughput stats every 5s'],
      stack: ['Java 21', 'Concurrency', 'Rate limiting', 'Maven'],
      repo: GH + 'Zeotap-Assignment'
    },
    {
      title: 'Image Forgery Detection', cat: 'ml', catLabel: 'ML · Computer vision',
      flags: [],
      tagline: 'Spot tampered images — and show where.',
      desc: 'A hybrid forgery detector that fuses VGG-16 CNN features with classic digital-image-processing cues (sharpness, edges, noise, tamper masks) for better accuracy, interpretable localisation and fast real-time web inference.',
      points: ['Deep + handcrafted feature fusion', 'Flask web app for real-time predictions'],
      stack: ['Python', 'TensorFlow', 'VGG-16', 'OpenCV', 'scikit-image', 'scikit-learn', 'Flask'],
      repo: GH + 'Image_Forgery_Detection'
    },
    {
      title: 'RepoSaarthi', cat: 'ai', catLabel: 'AI · System design',
      flags: [['hack', 'AI for Bharat Hackathon']],
      tagline: 'Turn any public GitHub repo into an onboarding guide for beginners.',
      desc: 'System design for a read-only AI pipeline: GitHub metadata extraction → LLM structured-JSON analysis → deterministic contribution-readiness scoring → generated summaries, starter tasks and Mermaid architecture diagrams.',
      points: ['LLM reasoning paired with deterministic, explainable scoring'],
      stack: ['LLMs', 'GitHub API', 'Streamlit', 'Mermaid'],
      repo: GH + 'Repo-Saarathi-AI-For-Bharat-Hackathon-Submission'
    },
    {
      title: 'Linux System Resource Monitor', cat: 'systems', catLabel: 'Systems · Python',
      flags: [],
      tagline: 'Live CPU, memory, GPU and disk dashboards with near-zero overhead.',
      desc: 'A desktop app with decoupled multithreaded loggers that sample native Linux tools every second into CSV, and Tkinter dashboards that plot them live — vendor-agnostic across NVIDIA, AMD and Intel GPUs.',
      points: ['Producer/consumer design: loggers write, GUIs read'],
      stack: ['Python', 'Tkinter', 'matplotlib', 'Multithreading', 'Linux'],
      repo: GH + 'Linux-System-Resource-Management'
    },
    {
      title: 'TerraAlert', cat: 'fullstack', catLabel: 'Full-stack · Geospatial',
      flags: [],
      tagline: 'Geospatial monitoring and alerting.',
      desc: 'A monitoring and alerting web app with email/Google sign-in, role-based protected routes, real-time Firestore data and image uploads to Firebase Storage.',
      points: [],
      stack: ['React', 'Material UI', 'Node.js', 'Firebase'],
      repo: GH + 'TerraAlert'
    },
    {
      title: 'SRMAP Ride Share', cat: 'fullstack', catLabel: 'Backend · REST API',
      flags: [],
      tagline: 'Backend for campus ride-sharing.',
      desc: 'An MVC REST backend for booking rides, registering drivers and managing trips, with secure authentication and MongoDB persistence.',
      points: [],
      stack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      repo: GH + 'Ride-Share-Application'
    }
  ];

  const ghIcon = '<svg viewBox="0 0 24 24"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>';
  const liveIcon = '<svg viewBox="0 0 24 24"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3ZM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/></svg>';
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const grid = $('#projectGrid');
  grid.innerHTML = projects.map((p) => `
    <article class="project glow-card${p.featured ? ' featured' : ''}${p.wip ? ' wip-card' : ''}" data-cat="${p.cat}">
      <div class="p-top">
        <span class="p-cat mono">${esc(p.catLabel)}</span>
        <span class="p-flags">${p.flags.map(([k, l]) => `<span class="flag ${k}">${esc(l)}</span>`).join('')}</span>
      </div>
      <h3>${esc(p.title)}</h3>
      <p class="p-tagline">${esc(p.tagline)}</p>
      <p class="p-desc">${esc(p.desc)}</p>
      ${p.points.length ? `<ul class="p-points">${p.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
      ${p.metrics ? `<div class="p-metrics">${p.metrics.map(([v, l]) => `<div class="p-metric"><b>${esc(v)}</b><span>${esc(l)}</span></div>`).join('')}</div>` : ''}
      <div class="chips">${p.stack.map((s) => `<span>${esc(s)}</span>`).join('')}</div>
      ${p.repo || p.live ? `<div class="p-links">
        ${p.repo ? `<a class="p-link" href="${p.repo}" target="_blank" rel="noopener">${ghIcon}${p.wip ? 'Follow on GitHub' : 'Code'}</a>` : ''}
        ${p.live ? `<a class="p-link" href="${p.live}" target="_blank" rel="noopener">${liveIcon}Live demo</a>` : ''}
      </div>` : ''}
    </article>`).join('');

  $$('.filter').forEach((btn) => btn.addEventListener('click', () => {
    $$('.filter').forEach((b) => b.classList.toggle('active', b === btn));
    const f = btn.dataset.filter;
    $$('.project', grid).forEach((card, i) => {
      const show = f === 'all' || card.dataset.cat === f;
      card.classList.toggle('hide', !show);
      card.classList.remove('pop');
      if (show) { card.style.animationDelay = `${(i % 6) * 50}ms`; void card.offsetWidth; card.classList.add('pop'); }
    });
  }));

  /* ---------------- Typed roles ---------------- */
  const roles = ['AI Engineer', 'Agentic AI Builder', 'LLM Evaluation Engineer', 'MCP & Tool-Calling Developer', 'Full-Stack Developer'];
  const typedEl = $('#typed');
  let ri = 0, ci = 0, deleting = false;
  const type = () => {
    const word = roles[ri];
    typedEl.textContent = word.slice(0, ci);
    if (!deleting && ci < word.length) { ci++; setTimeout(type, 65); }
    else if (!deleting) { deleting = true; setTimeout(type, 1700); }
    else if (ci > 0) { ci--; setTimeout(type, 32); }
    else { deleting = false; ri = (ri + 1) % roles.length; setTimeout(type, 300); }
  };

  /* ---------------- Heading text scramble: random glyphs resolve into the real text ---------------- */
  // ASCII-only glyphs so nothing can render as a garbled character.
  const glyphs = '!<>-_\\/[]{}=+*^?01ABCDEFGHKXZ';
  const animateHeading = (el) => {
    if (reduceMotion || el.dataset.done) return;
    el.dataset.done = '1';
    const final = el.textContent;
    el.setAttribute('aria-label', final);
    const frames = 26;
    let f = 0;
    const tick = () => {
      // Never leave a heading half-scrambled while the tab is in the background.
      if (document.hidden) { el.textContent = final; return; }
      const progress = f / frames;
      el.textContent = [...final].map((ch, i) => {
        if (ch === ' ') return ' ';
        return i / final.length < progress ? ch : glyphs[(Math.random() * glyphs.length) | 0];
      }).join('');
      if (++f <= frames) setTimeout(tick, 34);
      else el.textContent = final;
    };
    tick();
  };

  /* ---------------- Reveal on scroll ---------------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const siblings = el.parentElement ? [...el.parentElement.children].filter((c) => c.classList.contains('reveal')) : [];
      el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 6) * 70}ms`;
      el.classList.add('in');
      $$('[data-scramble]', el).forEach(animateHeading);
      if (el.matches('[data-scramble]')) animateHeading(el);
      $$('[data-count]', el).forEach(countUp);
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  function revealHero() {
    $$('.hero .reveal').forEach((el, i) => setTimeout(() => {
      el.classList.add('in');
      $$('[data-scramble]', el).forEach(animateHeading);
    }, i * 110));
    setTimeout(type, 600);
    $$('.reveal').filter((el) => !el.closest('.hero')).forEach((el) => io.observe(el));
  }

  /* ---------------- Counters ---------------- */
  function countUp(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    const target = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.decimals || '0', 10);
    const pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
    const dur = 1400, t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      el.textContent = pre + (target * eased).toFixed(dec) + suf;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------------- Build → Ship loop ---------------- */
  const loop = $('.loop');
  if (loop) {
    const steps = $$('.loop-step', loop), lines = $$('.loop-line', loop);
    let running = false;
    const play = () => {
      steps.forEach((s) => s.classList.remove('lit'));
      lines.forEach((l) => l.classList.remove('flow'));
      steps.forEach((s, i) => {
        setTimeout(() => s.classList.add('lit'), i * 750);
        if (lines[i]) setTimeout(() => lines[i].classList.add('flow'), i * 750 + 250);
      });
    };
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !running) { running = true; play(); setInterval(play, 6000); }
    }, { threshold: 0.5 }).observe(loop);
  }

  /* ---------------- Pointer effects ---------------- */
  const root = document.documentElement;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  window.addEventListener('pointermove', (e) => {
    root.style.setProperty('--mx', e.clientX + 'px');
    root.style.setProperty('--my', e.clientY + 'px');
  }, { passive: true });

  document.addEventListener('pointermove', (e) => {
    const card = e.target.closest('.glow-card');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--x', `${e.clientX - r.left}px`);
    card.style.setProperty('--y', `${e.clientY - r.top}px`);
  }, { passive: true });

  if (finePointer && !reduceMotion) {
    const tiltTargets = () => $$('.tilt, .project');
    document.addEventListener('pointermove', (e) => {
      const el = e.target.closest('.tilt, .project');
      tiltTargets().forEach((t) => { if (t !== el && t.style.transform) t.style.transform = ''; });
      if (!el || !el.classList.contains('in') && el.classList.contains('reveal')) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      const max = el.classList.contains('project') ? 5 : 7;
      el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-4px)`;
    }, { passive: true });
    document.addEventListener('pointerleave', () => tiltTargets().forEach((t) => (t.style.transform = '')));

    $$('.magnetic').forEach((b) => {
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
      });
      b.addEventListener('pointerleave', () => (b.style.transform = ''));
    });
  }

  /* ---------------- Nav: scroll state, progress, active link, mobile ---------------- */
  const nav = $('#nav'), bar = $('.scroll-progress');
  const onScroll = () => {
    const h = document.documentElement;
    bar.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})`;
    nav.classList.toggle('scrolled', h.scrollTop > 30);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const links = $$('.nav-links a');
  const navIO = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id && !a.classList.contains('nav-cta')));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach((s) => navIO.observe(s));

  const menuBtn = $('#menuBtn'), navLinks = $('#navLinks');
  menuBtn.addEventListener('click', () => { menuBtn.classList.toggle('open'); navLinks.classList.toggle('open'); });
  links.forEach((a) => a.addEventListener('click', () => { menuBtn.classList.remove('open'); navLinks.classList.remove('open'); }));

  /* ---------------- Neural network canvas ---------------- */
  const canvas = $('#neural');
  const ctx = canvas.getContext('2d');
  const colors = ['34,211,238', '139,92,246', '244,114,182'];
  let W, H, DPR, nodes = [], pulses = [], visible = true;
  const mouse = { x: -9999, y: -9999 };
  const LINK = 126;

  const resize = () => {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * DPR; canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const count = Math.min(110, Math.floor((W * H) / 10500));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.8, c: colors[(Math.random() * 3) | 0]
    }));
    pulses = [];
  };

  const spawnPulse = () => {
    const a = nodes[(Math.random() * nodes.length) | 0];
    let best = null, bd = Infinity;
    for (const b of nodes) {
      if (b === a) continue;
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < LINK && d < bd && Math.random() > 0.3) { bd = d; best = b; }
    }
    if (best) pulses.push({ a, b: best, t: 0, c: a.c, hops: 3 });
  };

  const draw = () => {
    if (!visible) return requestAnimationFrame(draw);
    ctx.clearRect(0, 0, W, H);
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
      const dx = mouse.x - n.x, dy = mouse.y - n.y, dm = Math.hypot(dx, dy);
      if (dm < 162) { n.x += dx * 0.004; n.y += dy * 0.004; }
    }
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK) {
          ctx.strokeStyle = `rgba(${a.c},${(1 - d / LINK) * 0.22})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const dm = Math.hypot(mouse.x - a.x, mouse.y - a.y);
      if (dm < 180) {
        ctx.strokeStyle = `rgba(${a.c},${(1 - dm / 180) * 0.5})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
    for (const n of nodes) {
      ctx.fillStyle = `rgba(${n.c},0.85)`;
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
    }
    // signals travelling along edges — like tool calls hopping through an agent graph
    for (let k = pulses.length - 1; k >= 0; k--) {
      const p = pulses[k];
      p.t += 0.025;
      const x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t;
      const g = ctx.createRadialGradient(x, y, 0, x, y, 10);
      g.addColorStop(0, `rgba(${p.c},1)`); g.addColorStop(1, `rgba(${p.c},0)`);
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 10, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x, y, 1.6, 0, Math.PI * 2); ctx.fill();
      if (p.t >= 1) {
        pulses.splice(k, 1);
        if (--p.hops > 0) {
          let best = null, bd = Infinity;
          for (const b of nodes) {
            if (b === p.b || b === p.a) continue;
            const d = Math.hypot(p.b.x - b.x, p.b.y - b.y);
            if (d < LINK && d < bd) { bd = d; best = b; }
          }
          if (best) pulses.push({ a: p.b, b: best, t: 0, c: p.c, hops: p.hops });
        }
      }
    }
    if (pulses.length < 9 && Math.random() < 0.06) spawnPulse();
    requestAnimationFrame(draw);
  };

  const hero = $('.hero');
  hero.addEventListener('pointermove', (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  hero.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
  new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(hero);
  window.addEventListener('resize', resize);
  resize();
  if (!reduceMotion) draw();
})();
