<script lang="ts">
  import { onMount } from 'svelte';
  
  let lang = $state('FR'); 
  let canvasElement: HTMLCanvasElement;
  let scrollY = $state(0);
  
  const content = $derived({
    status: lang === 'FR' ? 'SYSTÈME ACTIF' : 'SYSTEM ACTIVE',
    role: lang === 'FR' ? 'Architecte Logiciel' : 'Software Architect',
    bio: lang === 'FR' 
      ? "Bâtisseur de systèmes autonomes et d'infrastructures de haute performance. Expertise profonde en SvelteKit, Next.js, Supabase, et Zig. Je développe des outils indépendants, gère mes propres environnements VPS et architecture des solutions de données sécurisées."
      : "Builder of autonomous systems and high-performance infrastructures. Deep expertise in SvelteKit, Next.js, Supabase, and Zig. I develop independent tools, manage my own VPS environments, and architect secure data solutions.",
    expTitle: lang === 'FR' ? '01. Système & Déploiements' : '01. System & Deployments',
    bento1: lang === 'FR' ? 'Architecture Indépendante' : 'Independent Architecture',
    bento1Text: lang === 'FR' ? 'Développement de projets propriétaires sans compromis. Maîtrise totale de la stack.' : 'Development of proprietary projects without compromise. Full stack mastery.',
    bento2: lang === 'FR' ? 'Maitrise API' : 'API Mastery',
    bento3: lang === 'FR' ? 'Ops / VPS' : 'Ops / VPS'
  });

  const projects = [
    { name: "Lalye Core", url: "https://lalye.com", desc: "Main Infrastructure & Hub", tech: "SvelteKit / System" },
    { name: "Onor Logic", url: "https://onor.vercel.app", desc: "Quantum Spreadsheet Engine", tech: "SvelteKit / XLSX" },
    { name: "TimeTable", url: "https://timetable-lake-ten.vercel.app", desc: "Scheduling Optimization", tech: "Logic Core" },
    { name: "Rekit", url: "https://rekit-mu.vercel.app", desc: "NextGen Framework UI", tech: "Next.js / Frontend" },
    { name: "Accounting", url: "https://accounting-dun.vercel.app", desc: "Financial Tracking System", tech: "Data Security" }
  ];

  let visible = $state(false);

  onMount(() => {
    visible = true;
    const ctx = canvasElement.getContext('2d')!;
    let width = (canvasElement.width = window.innerWidth);
    let height = (canvasElement.height = window.innerHeight);
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[];:+=_*&^%$#@!";
    
    function draw() {
      ctx.fillStyle = "rgba(5, 5, 5, 0.1)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = "10px monospace";
      for (let i = 0; i < 35; i++) {
        if (Math.random() > 0.96) {
          ctx.fillStyle = "rgba(0, 112, 243, 0.3)";
          ctx.fillRect(0, Math.random() * height, width, 1);
        }
        const x = Math.random() * width;
        const y = Math.random() * height;
        const char = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillStyle = Math.random() > 0.8 ? "#0070f3" : "#222";
        ctx.fillText(char, x, y);
      }
      requestAnimationFrame(draw);
    }
    draw();
    
    const handleResize = () => {
      width = canvasElement.width = window.innerWidth;
      height = canvasElement.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  function toggleLang() { lang = lang === 'FR' ? 'EN' : 'FR'; }
</script>

<svelte:window bind:scrollY={scrollY} />

<div class="portfolio-container" class:visible>
  <canvas bind:this={canvasElement} class="glitch-canvas"></canvas>
  <div class="noise"></div>

  <section class="hero-section">
    <nav class="top-nav">
      <div class="logo">Ω ONOR.LOGIC</div>
      <div class="nav-right">
        <button class="lang-toggle" onclick={toggleLang}>
          <span class={lang === 'FR' ? 'active' : ''}>FR</span>
          <span class="sep">/</span>
          <span class={lang === 'EN' ? 'active' : ''}>EN</span>
        </button>
        <div class="status-badge"><span class="dot"></span> {content.status}</div>
      </div>
    </nav>

    <main class="hero-container">
      <div class="hero-grid">
        <div class="hero-text">
          <div class="hero-header">
            <div class="emoji-box">
              <img src="https://imgproxy.attic.sh/insecure/f:webp/q:90/w:1920/plain/https://attic.sh/oqi97pwbpfi3emlmrxsjkxm6io49" alt="Onor Symbol" class="inline-emoji anim-float" />
            </div>
            <div class="meta-tag">CIV // RWA // HTI</div>
          </div>

          <!-- CORRECTION 1 : line-height et letter-spacing assouplis -->
          <h1 class="glitch-text" data-text="Juste Allou">
            Juste Allou
            <br/>
            <span class="gradient">{content.role}.</span>
          </h1>
          
          <div class="bio-container">
            <p class="bio">{content.bio}</p>
            <div class="scroll-bolt" style="transform: scaleX({Math.min(scrollY / 600, 1.05)})">
              <div class="bolt-head"></div>
            </div>
          </div>
          
          <div class="tags">
            <span>#SoloEngineer</span>
            <span>#Independent</span>
            <span>#SystemArchitect</span>
            <span>#Fullstack</span>
          </div>
        </div>

        <div class="hero-visual">
          <div class="wireframe-cube">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face right"></div>
            <div class="face left"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
          </div>
          <div class="data-rings"></div>
        </div>
      </div>
    </main>
  </section>

  <section class="projects-section">
    <div class="light-matrix-bg">
      {#each Array(15) as _}
        <div class="matrix-row">01 10 00 11 01 10 11 00 10 01 00 11 01 10 11 00 01 10 00 11 01 10 11 00</div>
      {/each}
    </div>

    <div class="content-wrapper">
      <section class="projects">
        <h2><span class="num">/</span> {content.expTitle}</h2>
        <div class="grid">
          {#each projects as project}
            <!-- CORRECTION 2 : cards avec fond légèrement teinté + border visible + numéro -->
            <a href={project.url} target="_blank" class="project-card">
              <div class="card-header">
                <span class="tech">{project.tech}</span>
                <span class="arrow">↗</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <div class="card-footer">
                <span class="visit">Visiter le projet</span>
              </div>
            </a>
          {/each}
        </div>
      </section>

      <!-- CORRECTION 3 : bento avec hover + bento big en gradient -->
      <section class="experience">
        <div class="bento-container">
          <div class="bento-item big">
            <div class="bento-tag">CORE</div>
            <h3>{content.bento1}</h3>
            <p>{content.bento1Text}</p>
            <div class="bento-glow"></div>
          </div>
          <div class="bento-item small">
            <div class="bento-tag">API</div>
            <h3>{content.bento2}</h3>
            <p>High-load data streams & Webhooks.</p>
          </div>
          <div class="bento-item small">
            <div class="bento-tag">OPS</div>
            <h3>{content.bento3}</h3>
            <p>Linux, Docker & VPS Hardening.</p>
          </div>
        </div>
      </section>
    </div>
  </section>

  <!-- CORRECTION 4 : footer avec transition douce + séparateur visuel fort -->
  <div class="footer-bridge">
    <div class="bridge-line"></div>
    <div class="bridge-dots">
      <span></span><span></span><span></span>
    </div>
  </div>

  <footer class="main-footer">
    <div class="footer-glow"></div>
    <div class="footer-content">
      <div class="footer-brand">
        <div class="logo">Ω JUSTE ALLOU</div>
        <div class="credits">ENGINEERED IN CÔTE D'IVOIRE</div>
        <div class="footer-bio">Solo architect. Independent systems. No compromise.</div>
      </div>
      <div class="footer-links">
        <div class="link-group">
          <span class="label">ROOT_DOMAIN</span>
          <a href="https://lalye.com" class="val">lalye.com</a>
        </div>
        <div class="link-group">
          <span class="label">COMM_LINK</span>
          <a href="mailto:tyjustbusiness@gmail.com" class="val">tyjustbusiness@gmail.com</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="status"><span class="status-dot"></span> ALL_SYSTEMS_GO // 2026</div>
      <div class="tech-stack">Powered by SvelteKit & Zig</div>
    </div>
  </footer>
</div>

<style lang="scss">
  $accent: #0070f3;
  $bg-dark: #050505;
  $bg-light: #f8f9fb;
  $border-light: #e2e8f0;
  $mobile: 480px;
  $tablet: 768px;
  $desktop: 1000px;

  :global(::-webkit-scrollbar) { width: 4px; }
  :global(::-webkit-scrollbar-track) { background: $bg-dark; }
  :global(::-webkit-scrollbar-thumb) { background: $accent; }
  :global(body) { margin: 0; font-family: 'Inter', sans-serif; background: $bg-dark; overflow-x: hidden; color: white; }

  .glitch-canvas { position: fixed; inset: 0; z-index: 0; opacity: 0.4; pointer-events: none; }
  .noise { position: fixed; inset: 0; z-index: 10; opacity: 0.04; pointer-events: none; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
  .portfolio-container { opacity: 0; transition: opacity 1.5s ease; &.visible { opacity: 1; } }

  /* ─── HERO ─── */
  .hero-section {
    min-height: 100vh; padding: 0 6rem; color: #fff;
    position: relative; z-index: 2; background: $bg-dark;
    @media (max-width: $desktop) { padding: 0 3rem; }
    @media (max-width: $tablet) { padding: 0 1.5rem; padding-bottom: 4rem; }
  }

  .top-nav {
    display: flex; justify-content: space-between; align-items: center; padding: 3rem 0;
    @media (max-width: $tablet) { padding: 1.5rem 0; }
    .logo { font-weight: 900; letter-spacing: 4px; color: $accent; }
    .nav-right { display: flex; align-items: center; gap: 2rem; @media (max-width: $mobile) { gap: 0.75rem; } }
    .lang-toggle { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); color: #666; padding: 6px 15px; border-radius: 20px; cursor: pointer; span.active { color: #fff; font-weight: 800; } }
    .status-badge { font-size: 0.65rem; color: #888; border: 1px solid rgba(255,255,255,0.1); padding: 6px 18px; border-radius: 100px; display: flex; align-items: center; gap: 8px; @media (max-width: $mobile) { padding: 6px 10px; span:not(.dot) { display: none; } } .dot { width: 6px; height: 6px; background: #00ff88; border-radius: 50%; box-shadow: 0 0 10px #00ff88; flex-shrink: 0; } }
  }

  .hero-grid {
    display: grid; grid-template-columns: 1.5fr 1fr; align-items: center;
    gap: 4rem; margin-top: 5vh; max-width: 1300px; margin-inline: auto;
    @media (max-width: $desktop) { grid-template-columns: 1fr; }
  }

  .hero-text {
    .hero-header {
      display: flex; align-items: center; gap: 1.5rem; margin-bottom: 2rem;
      @media (max-width: $mobile) { gap: 1rem; }
      .emoji-box {
        width: 48px; height: 48px; border: 1px solid rgba($accent, 0.4); border-radius: 12px;
        background: rgba($accent, 0.05); display: grid; place-items: center; padding: 8px; flex-shrink: 0;
        .inline-emoji { width: 100%; height: auto; object-fit: contain; }
      }
      .meta-tag { color: $accent; font-weight: 800; font-family: monospace; letter-spacing: 2px; @media (max-width: $mobile) { font-size: 0.8rem; } }
    }

    /* CORRECTION 1 — h1 lisible, hiérarchie claire */
    h1 {
      font-size: 5rem;
      font-weight: 900;
      margin: 0 0 0.2em;
      line-height: 1.05;        // était 0.9 — illisible
      letter-spacing: -2px;     // était -3px — trop serré

      @media (max-width: $desktop) { font-size: 4rem; }
      @media (max-width: $tablet) { font-size: 3.2rem; letter-spacing: -1.5px; }
      @media (max-width: $mobile) { font-size: 2.4rem; letter-spacing: -1px; }

      .gradient {
        font-size: 0.65em;       // rôle plus petit que le nom = hiérarchie
        font-weight: 700;
        background: linear-gradient(to right, #fff 30%, #555);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: -1px;
      }
    }

    .bio-container { position: relative; margin: 2.5rem 0; max-width: 580px; @media (max-width: $tablet) { margin: 1.5rem 0; } }
    .bio { font-size: 1.15rem; color: #888; line-height: 1.7; font-weight: 300; margin: 0; @media (max-width: $tablet) { font-size: 1rem; } @media (max-width: $mobile) { font-size: 0.9rem; } }

    .tags {
      display: flex; flex-wrap: wrap; gap: 0.75rem;
      margin-top: 2.5rem;
      span {
        color: $accent; font-family: monospace; font-size: 0.8rem;
        background: rgba($accent, 0.06); border: 1px solid rgba($accent, 0.2);
        padding: 4px 12px; border-radius: 100px;
        @media (max-width: $mobile) { font-size: 0.7rem; }
      }
    }
  }

  @keyframes floatPulse { 0% { transform: translateY(0); } 50% { transform: translateY(-5px); } 100% { transform: translateY(0); } }
  .anim-float { animation: floatPulse 4s ease-in-out infinite; }

  .scroll-bolt {
    position: absolute; bottom: -25px; left: 0; width: 100%; height: 2px;
    background: $accent; transform-origin: left; box-shadow: 0 0 15px $accent; transition: transform 0.1s ease-out;
    .bolt-head { position: absolute; right: 0; top: 50%; transform: translateY(-50%); width: 8px; height: 8px; background: #fff; border-radius: 50%; box-shadow: 0 0 20px #fff, 0 0 40px $accent; }
  }

  .glitch-text { position: relative; &::after { content: attr(data-text); position: absolute; left: 2px; text-shadow: -1px 0 red; top: 0; color: white; background: transparent; overflow: hidden; clip: rect(0,900px,0,0); animation: noise-anim 2s infinite linear alternate-reverse; } }
  @keyframes noise-anim { $steps: 20; @for $i from 0 through $steps { #{percentage($i*(1/$steps))} { clip: rect(random(100)+px, 9999px, random(100)+px, 0); } } }

  .hero-visual {
    height: 300px; display: flex; justify-content: center; align-items: center; position: relative;
    @media (max-width: $desktop) { display: none; }
    .wireframe-cube {
      width: 120px; height: 120px; position: relative; transform-style: preserve-3d; animation: rotateCube 15s infinite linear;
      .face { position: absolute; width: 100%; height: 100%; border: 1px solid rgba($accent, 0.4); background: rgba($accent, 0.05); }
      .front  { transform: translateZ(60px); }
      .back   { transform: rotateY(180deg) translateZ(60px); }
      .right  { transform: rotateY(90deg) translateZ(60px); }
      .left   { transform: rotateY(-90deg) translateZ(60px); }
      .top    { transform: rotateX(90deg) translateZ(60px); }
      .bottom { transform: rotateX(-90deg) translateZ(60px); }
    }
    .data-rings { position: absolute; width: 250px; height: 250px; border: 1px dashed rgba(255,255,255,0.1); border-radius: 50%; animation: rotateRing 20s infinite linear reverse; }
  }
  @keyframes rotateCube { from { transform: rotateX(0) rotateY(0); } to { transform: rotateX(360deg) rotateY(360deg); } }
  @keyframes rotateRing { from { transform: rotateZ(0); } to { transform: rotateZ(360deg); } }

  /* ─── PROJECTS ─── */
  .projects-section {
    position: relative; padding: 120px 6rem; background: $bg-light; color: #000; overflow: hidden;
    @media (max-width: $desktop) { padding: 80px 3rem; }
    @media (max-width: $tablet) { padding: 60px 1.5rem; }
    @media (max-width: $mobile) { padding: 40px 1rem; }
  }

  .light-matrix-bg {
    position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: space-around;
    opacity: 0.025; font-family: monospace; font-size: 2.5rem; font-weight: 900; color: #000;
    pointer-events: none; white-space: nowrap; overflow: hidden; transform: rotate(-5deg) scale(1.1);
    .matrix-row { animation: slideLeft 60s infinite linear; &:nth-child(even) { animation-direction: reverse; } }
  }
  @keyframes slideLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  .content-wrapper { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; }

  .projects {
    margin-bottom: 100px;
    @media (max-width: $tablet) { margin-bottom: 60px; }

    h2 { font-size: 0.85rem; color: #999; text-transform: uppercase; letter-spacing: 5px; margin-bottom: 3.5rem; .num { color: $accent; } }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      @media (max-width: $tablet) { grid-template-columns: 1fr 1fr; gap: 14px; }
      @media (max-width: $mobile) { grid-template-columns: 1fr; gap: 12px; }
    }

    /* CORRECTION 2 — cards avec fond teinté, border visible, footer de carte */
    .project-card {
      background: #fff;
      border: 1.5px solid $border-light;
      padding: 2.5rem;
      border-radius: 20px;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      gap: 0;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);

      @media (max-width: $tablet) { padding: 1.75rem; }
      @media (max-width: $mobile) { padding: 1.25rem; border-radius: 14px; }

      &:hover {
        transform: translateY(-6px);
        border-color: $accent;
        box-shadow: 0 20px 40px rgba($accent, 0.1), 0 4px 12px rgba(0,0,0,0.06);

        .card-footer .visit {
          color: $accent;
          gap: 8px;
          &::after { opacity: 1; transform: translateX(0); }
        }
      }

      .card-header {
        display: flex; justify-content: space-between; align-items: center;
        color: $accent; font-size: 0.72rem; font-weight: 800;
        font-family: monospace; margin-bottom: 1.5rem;
        .arrow { font-size: 1.1rem; transition: transform 0.3s; }
      }

      &:hover .card-header .arrow { transform: translate(2px, -2px); }

      h3 { font-size: 1.5rem; margin: 0 0 0.5rem; font-weight: 900; letter-spacing: -0.5px; color: #0f172a; }
      p { color: #64748b; margin: 0; font-size: 0.95rem; line-height: 1.6; flex: 1; }

      .card-footer {
        margin-top: 1.75rem;
        padding-top: 1rem;
        border-top: 1px solid $border-light;

        .visit {
          font-size: 0.8rem; font-weight: 700; color: #94a3b8;
          font-family: monospace; text-transform: uppercase; letter-spacing: 1px;
          display: flex; align-items: center; gap: 4px; transition: all 0.3s;
          position: relative;

          &::after {
            content: '→';
            opacity: 0;
            transform: translateX(-6px);
            transition: all 0.3s;
          }
        }
      }
    }
  }

  /* CORRECTION 3 — bento avec hover, big en gradient premium */
  .experience {
    .bento-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      @media (max-width: $tablet) { grid-template-columns: 1fr; }
    }

    .bento-item {
      background: #fff;
      border: 1.5px solid $border-light;
      padding: 2.5rem;
      border-radius: 20px;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);

      @media (max-width: $mobile) { padding: 1.5rem; border-radius: 14px; }

      &:hover {
        transform: translateY(-4px);
        border-color: rgba($accent, 0.4);
        box-shadow: 0 12px 30px rgba($accent, 0.08);
      }

      .bento-tag {
        font-family: monospace; font-size: 0.65rem; font-weight: 800;
        color: $accent; background: rgba($accent, 0.08); border: 1px solid rgba($accent, 0.2);
        padding: 3px 10px; border-radius: 100px; display: inline-block; margin-bottom: 1.25rem;
      }

      h3 { font-size: 1.1rem; margin: 0 0 0.75rem; font-weight: 800; color: #0f172a; }
      p { color: #64748b; font-size: 0.95rem; line-height: 1.6; margin: 0; }

      &.big {
        grid-column: span 2;
        background: linear-gradient(135deg, #0a0a0a 0%, #0f1a2e 60%, #0a1628 100%);
        border-color: rgba($accent, 0.2);
        color: #fff;

        @media (max-width: $tablet) { grid-column: span 1; }

        .bento-tag { color: #60a5fa; background: rgba(96, 165, 250, 0.1); border-color: rgba(96,165,250,0.2); }
        h3 { color: #fff; font-size: 1.3rem; }
        p { color: #94a3b8; }

        &:hover { border-color: rgba($accent, 0.5); box-shadow: 0 12px 40px rgba($accent, 0.15); }

        .bento-glow {
          position: absolute; width: 200px; height: 200px;
          background: radial-gradient(circle, rgba($accent, 0.15) 0%, transparent 70%);
          bottom: -60px; right: -40px; pointer-events: none;
        }
      }
    }
  }

  /* CORRECTION 4 — transition footer + séparateur visuel */
  .footer-bridge {
    background: $bg-light;
    padding: 3rem 6rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: $desktop) { padding: 3rem 3rem 0; }
    @media (max-width: $tablet) { padding: 2rem 1.5rem 0; }

    .bridge-line {
      width: 100%;
      max-width: 1200px;
      height: 1px;
      background: linear-gradient(to right, transparent, #cbd5e1 20%, #cbd5e1 80%, transparent);
    }

    .bridge-dots {
      display: flex; gap: 8px;
      span {
        width: 6px; height: 6px; border-radius: 50%; background: #cbd5e1;
        &:nth-child(2) { background: $accent; box-shadow: 0 0 8px $accent; }
      }
    }
  }

  .main-footer {
    background: #000;
    color: #fff;
    padding: 5rem 6rem 2rem;
    position: relative;
    z-index: 2;
    overflow: hidden;

    @media (max-width: $desktop) { padding: 4rem 3rem 2rem; }
    @media (max-width: $tablet) { padding: 3rem 1.5rem 2rem; }
    @media (max-width: $mobile) { padding: 2.5rem 1rem 1.5rem; }

    // Glow ambient en haut du footer
    .footer-glow {
      position: absolute; top: 0; left: 50%; transform: translateX(-50%);
      width: 600px; height: 1px;
      background: linear-gradient(to right, transparent, rgba($accent, 0.6), transparent);
      &::after {
        content: '';
        position: absolute; top: 0; left: 50%; transform: translateX(-50%);
        width: 300px; height: 80px;
        background: radial-gradient(ellipse, rgba($accent, 0.08) 0%, transparent 70%);
      }
    }

    .footer-content {
      max-width: 1200px; margin: 0 auto;
      display: flex; justify-content: space-between; align-items: flex-start;
      margin-bottom: 4rem; position: relative; z-index: 2;
      @media (max-width: $tablet) { flex-direction: column; gap: 2.5rem; margin-bottom: 3rem; }
    }

    .footer-brand {
      .logo { font-size: 1.4rem; font-weight: 900; letter-spacing: 3px; margin-bottom: 8px; }
      .credits { font-family: monospace; color: $accent; font-size: 0.75rem; margin-bottom: 12px; }
      .footer-bio { font-size: 0.85rem; color: #475569; max-width: 280px; line-height: 1.5; }
    }

    .footer-links {
      display: flex; gap: 4rem;
      @media (max-width: $mobile) { flex-direction: column; gap: 1.5rem; }

      .link-group {
        display: flex; flex-direction: column; gap: 8px;
        .label { font-family: monospace; font-size: 0.65rem; color: #334155; font-weight: 800; letter-spacing: 2px; }
        .val { font-size: 1rem; font-weight: 500; color: #94a3b8; text-decoration: none; transition: 0.2s; &:hover { color: #fff; } @media (max-width: $mobile) { font-size: 0.9rem; word-break: break-all; } }
      }
    }

    .footer-bottom {
      max-width: 1200px; margin: 0 auto; padding-top: 2rem;
      border-top: 1px solid #0f172a;
      display: flex; justify-content: space-between;
      font-family: monospace; font-size: 0.72rem; color: #334155;
      position: relative; z-index: 2;
      @media (max-width: $mobile) { flex-direction: column; gap: 0.5rem; }

      .status { display: flex; align-items: center; gap: 8px; }
      .status-dot { width: 6px; height: 6px; background: #00ff88; border-radius: 50%; box-shadow: 0 0 8px #00ff88; display: inline-block; }
    }
  }
</style>