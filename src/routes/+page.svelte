<script lang="ts">
  import { onMount } from 'svelte';
  
  // Gestion de la langue
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

  // Animation Glitch (Canvas)
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

          <h1 class="glitch-text" data-text="Juste Allou">Juste Allou <br/><span class="gradient">{content.role}.</span></h1>
          
          <div class="bio-container">
            <p class="bio">{content.bio}</p>
            <div class="scroll-bolt" style="transform: scaleX({Math.min(scrollY / 600, 1.05)})">
                <div class="bolt-head"></div>
            </div>
          </div>
          
          <div class="tags">
            <span>#SoloEngineer</span> <span>#Independent</span> <span>#SystemArchitect</span> <span>#Fullstack</span>
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
            <a href={project.url} target="_blank" class="project-card">
              <div class="card-header">
                <span class="tech">{project.tech}</span>
                <span class="arrow">↗</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
            </a>
          {/each}
        </div>
      </section>

      <section class="experience">
        <div class="bento-container">
          <div class="bento-item big">
            <h3>{content.bento1}</h3>
            <p>{content.bento1Text}</p>
          </div>
          <div class="bento-item small">
            <h3>{content.bento2}</h3>
            <p>High-load data streams & Webhooks.</p>
          </div>
          <div class="bento-item small">
            <h3>{content.bento3}</h3>
            <p>Linux, Docker & VPS Hardening.</p>
          </div>
        </div>
      </section>
    </div>
  </section>

  <footer class="main-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <div class="logo">Ω JUSTE ALLOU</div>
        <div class="credits">ENGINEERED IN CÔTE D'IVOIRE</div>
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
      <div class="status">ALL_SYSTEMS_GO // 2026</div>
      <div class="tech-stack">Powered by SvelteKit & Zig</div>
    </div>
  </footer>
</div>

<style lang="scss">
  $accent: #0070f3;
  $bg-dark: #050505;
  $bg-light: #ffffff;
  $border-light: #eaeaea;

  :global(::-webkit-scrollbar) { width: 4px; }
  :global(::-webkit-scrollbar-track) { background: $bg-dark; }
  :global(::-webkit-scrollbar-thumb) { background: $accent; }

  :global(body) { margin: 0; font-family: 'Inter', sans-serif; background: $bg-dark; overflow-x: hidden; color: white; }

  .glitch-canvas { position: fixed; inset: 0; z-index: 0; opacity: 0.4; pointer-events: none; }
  .noise { position: fixed; inset: 0; z-index: 10; opacity: 0.04; pointer-events: none; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
  .portfolio-container { opacity: 0; transition: opacity 1.5s ease; &.visible { opacity: 1; } }

  /* ZONE DARK */
  .hero-section { 
    min-height: 110vh; padding: 0 6rem; color: #fff; position: relative; z-index: 2;
    background: $bg-dark;
  }

  .top-nav {
    display: flex; justify-content: space-between; align-items: center; padding: 3rem 0;
    .logo { font-weight: 900; letter-spacing: 4px; color: $accent; }
    .nav-right { display: flex; align-items: center; gap: 2rem; }
    .lang-toggle { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); color: #666; padding: 6px 15px; border-radius: 20px; cursor: pointer; span.active { color: #fff; font-weight: 800; } }
    .status-badge { font-size: 0.65rem; color: #888; border: 1px solid rgba(255,255,255,0.1); padding: 6px 18px; border-radius: 100px; display: flex; align-items: center; gap: 8px; .dot { width: 6px; height: 6px; background: #00ff88; border-radius: 50%; box-shadow: 0 0 10px #00ff88; } }
  }

  .hero-grid {
    display: grid; grid-template-columns: 1.5fr 1fr; align-items: center; gap: 4rem;
    margin-top: 5vh; max-width: 1300px; margin-inline: auto;
  }

  .hero-text {
    /* Style du nouveau header avec le carré */
    .hero-header {
        display: flex; align-items: center; gap: 1.5rem; margin-bottom: 2rem;
        
        .emoji-box {
            width: 48px; height: 48px; 
            border: 1px solid rgba($accent, 0.4); 
            border-radius: 12px; 
            background: rgba($accent, 0.05); 
            display: grid; place-items: center; 
            padding: 8px;
            
            .inline-emoji { width: 100%; height: auto; object-fit: contain; }
        }

        .meta-tag { color: $accent; font-weight: 800; font-family: monospace; letter-spacing: 2px; margin: 0; }
    }

    h1 { font-size: 5.5rem; font-weight: 900; margin: 0; line-height: 0.9; letter-spacing: -3px; .gradient { background: linear-gradient(to bottom, #fff, #555); -webkit-background-clip: text; -webkit-text-fill-color: transparent; } }
    .bio-container { position: relative; margin: 3rem 0; max-width: 600px; }
    .bio { font-size: 1.4rem; color: #aaa; line-height: 1.5; font-weight: 300; margin: 0; }
    .tags { display: flex; gap: 1.5rem; color: $accent; font-family: monospace; font-size: 0.85rem; opacity: 0.7; }
  }

  @keyframes floatPulse {
    0% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0); }
  }
  .anim-float { animation: floatPulse 4s ease-in-out infinite; }

  /* Éclair dynamique */
  .scroll-bolt {
    position: absolute; bottom: -25px; left: 0; width: 100%; height: 2px; background: $accent;
    transform-origin: left; box-shadow: 0 0 15px $accent; transition: transform 0.1s ease-out;
    .bolt-head { position: absolute; right: 0; top: 50%; transform: translateY(-50%); width: 8px; height: 8px; background: #fff; border-radius: 50%; box-shadow: 0 0 20px #fff, 0 0 40px $accent; }
  }

  .glitch-text { position: relative; &::after { content: attr(data-text); position: absolute; left: 2px; text-shadow: -1px 0 red; top: 0; color: white; background: transparent; overflow: hidden; clip: rect(0,900px,0,0); animation: noise-anim 2s infinite linear alternate-reverse; } }
  @keyframes noise-anim { $steps: 20; @for $i from 0 through $steps { #{percentage($i*(1/$steps))} { clip: rect(random(100)+px, 9999px, random(100)+px, 0); } } }

  /* Animation Abstract 3D (Droite) */
  .hero-visual {
    height: 300px; display: flex; justify-content: center; align-items: center; position: relative;
    .wireframe-cube {
      width: 120px; height: 120px; position: relative; transform-style: preserve-3d;
      animation: rotateCube 15s infinite linear;
      .face { position: absolute; width: 100%; height: 100%; border: 1px solid rgba($accent, 0.4); background: rgba($accent, 0.05); }
      .front  { transform: translateZ(60px); }
      .back   { transform: rotateY(180deg) translateZ(60px); }
      .right  { transform: rotateY(90deg) translateZ(60px); }
      .left   { transform: rotateY(-90deg) translateZ(60px); }
      .top    { transform: rotateX(90deg) translateZ(60px); }
      .bottom { transform: rotateX(-90deg) translateZ(60px); }
    }
    .data-rings {
      position: absolute; width: 250px; height: 250px; border: 1px dashed rgba(255,255,255,0.1); border-radius: 50%;
      animation: rotateRing 20s infinite linear reverse;
    }
  }
  @keyframes rotateCube { from { transform: rotateX(0) rotateY(0); } to { transform: rotateX(360deg) rotateY(360deg); } }
  @keyframes rotateRing { from { transform: rotateZ(0); } to { transform: rotateZ(360deg); } }

  /* ZONE LIGHT FRANCHE AVEC MATRICE SUBTILE */
  .projects-section {
    position: relative; padding: 120px 6rem; background: $bg-light; color: #000;
    overflow: hidden;
  }

  .light-matrix-bg {
    position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: space-around;
    opacity: 0.02;
    font-family: monospace; font-size: 2.5rem; font-weight: 900; color: #000;
    pointer-events: none; white-space: nowrap; overflow: hidden;
    transform: rotate(-5deg) scale(1.1);
    .matrix-row { animation: slideLeft 60s infinite linear; &:nth-child(even) { animation-direction: reverse; } }
  }
  @keyframes slideLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  .content-wrapper { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; }

  .projects {
    margin-bottom: 120px;
    h2 { font-size: 0.9rem; color: #666; text-transform: uppercase; letter-spacing: 5px; margin-bottom: 4rem; .num { color: $accent; } }
    .grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px;
      .project-card {
        background: #fff; border: 1px solid $border-light; padding: 3rem; border-radius: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease;
        &:hover { transform: translateY(-5px); border-color: $accent; box-shadow: 0 20px 40px rgba(0,0,0,0.06); }
        .card-header { display: flex; justify-content: space-between; color: $accent; font-size: 0.75rem; font-weight: 800; font-family: monospace; margin-bottom: 2rem; }
        h3 { font-size: 1.8rem; margin: 0; font-weight: 900; letter-spacing: -1px; }
        p { color: #555; margin-top: 15px; font-size: 1rem; line-height: 1.5; }
      }
    }
  }

  .experience {
    .bento-container {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
      .bento-item {
        background: #fff; border: 1px solid $border-light; padding: 3rem; border-radius: 20px;
        h3 { font-size: 1.2rem; margin-bottom: 1rem; font-weight: 800; }
        p { color: #666; font-size: 1rem; line-height: 1.6; }
        &.big { grid-column: span 2; background: #000; color: #fff; p { color: #aaa; } }
      }
    }
  }

  /* FOOTER PRO */
  .main-footer {
    background: #000; color: #fff; padding: 6rem 6rem 2rem; position: relative; z-index: 2;
    .footer-content { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6rem; }
    .footer-brand { .logo { font-size: 1.5rem; font-weight: 900; letter-spacing: 2px; margin-bottom: 10px; } .credits { font-family: monospace; color: $accent; font-size: 0.8rem; } }
    .footer-links { display: flex; gap: 4rem; .link-group { display: flex; flex-direction: column; gap: 8px; .label { font-family: monospace; font-size: 0.7rem; color: #666; font-weight: 800; } .val { font-size: 1.1rem; font-weight: 500; color: #fff; text-decoration: none; transition: 0.2s; &:hover { color: $accent; } } } }
    .footer-bottom { max-width: 1200px; margin: 0 auto; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; font-family: monospace; font-size: 0.75rem; color: #666; }
  }

  @media (max-width: 1000px) {
    .hero-section, .projects-section { padding: 2rem; }
    .top-nav { padding: 2rem 0; }
    .hero-grid { grid-template-columns: 1fr; }
    .hero-visual { display: none; }
    h1 { font-size: 3.5rem; }
    .main-footer { padding: 4rem 2rem 2rem; .footer-content { flex-direction: column; gap: 3rem; } .footer-links { flex-direction: column; gap: 2rem; } }
    .bento-container { grid-template-columns: 1fr !important; .bento-item.big { grid-column: span 1 !important; } }
  }
</style>