<script lang="ts">
  import { onMount } from 'svelte';
  
  let lang = $state('FR'); 
  let canvasElement: HTMLCanvasElement;
  let scrollY = $state(0);
  
  const content = $derived({
    status: lang === 'FR' ? 'ACTIF' : 'ACTIVE',
    role: lang === 'FR' ? 'Architecte Logiciel' : 'Software Architect',
    bio: lang === 'FR' 
      ? "Bâtisseur de systèmes autonomes et d'infrastructures de haute performance. Expertise SvelteKit, Supabase, et Zig."
      : "Builder of autonomous systems and high-performance infrastructures. Expertise in SvelteKit, Supabase, and Zig.",
    expTitle: lang === 'FR' ? '01. Projets' : '01. Projects',
    bento1: lang === 'FR' ? 'Architecture' : 'Architecture',
    bento2: lang === 'FR' ? 'API' : 'API',
    bento3: lang === 'FR' ? 'Ops' : 'Ops'
  });

  const projects = [
    { name: "Lalye Core", url: "https://lalye.com", desc: "Main Infrastructure & Hub", tech: "SvelteKit" },
    { name: "Onor Logic", url: "https://onor.vercel.app", desc: "Quantum Engine", tech: "SvelteKit" },
    { name: "TimeTable", url: "https://timetable-lake-ten.vercel.app", desc: "Scheduling Optimization", tech: "Logic Core" },
    { name: "Rekit", url: "https://rekit-mu.vercel.app", desc: "NextGen Framework", tech: "Next.js" }
  ];

  let visible = $state(false);

  onMount(() => {
    visible = true;
    const ctx = canvasElement.getContext('2d')!;
    let width = (canvasElement.width = window.innerWidth);
    let height = (canvasElement.height = window.innerHeight);
    const characters = "01<>/_";
    
    function draw() {
      ctx.fillStyle = "rgba(5, 5, 5, 0.15)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = "10px monospace";
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const char = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillStyle = Math.random() > 0.9 ? "#0070f3" : "#1a1a1a";
        ctx.fillText(char, x, y);
      }
      requestAnimationFrame(draw);
    }
    draw();
  });

  function toggleLang() { lang = lang === 'FR' ? 'EN' : 'FR'; }
</script>

<svelte:window bind:scrollY={scrollY} />

<div class="portfolio-container" class:visible>
  <canvas bind:this={canvasElement} class="glitch-canvas"></canvas>

  <section class="hero-section">
    <nav class="top-nav">
      <div class="logo">Ω ONOR</div>
      <div class="nav-right">
        <button class="lang-toggle" onclick={toggleLang}>{lang}</button>
        <div class="status-badge"><span class="dot"></span> {content.status}</div>
      </div>
    </nav>

    <main class="hero-content">
      <div class="hero-header">
        <div class="emoji-box">
          <img src="https://imgproxy.attic.sh/insecure/f:webp/q:90/w:1920/plain/https://attic.sh/oqi97pwbpfi3emlmrxsjkxm6io49" alt="Symbol" class="inline-emoji anim-float" />
        </div>
        <div class="meta-tag">CIV // RWA // HTI</div>
      </div>

      <h1 class="glitch-text" data-text="Juste Allou">Juste Allou <br/><span class="gradient">{content.role}.</span></h1>
      
      <p class="bio">{content.bio}</p>
      
      <div class="scroll-bolt-container">
          <div class="scroll-bolt" style="transform: scaleX({Math.min(scrollY / 400, 1)})"></div>
      </div>

      <div class="tags">
        <span>#SoloEngineer</span> <span>#SystemArchitect</span>
      </div>
    </main>
  </section>

  <section class="projects-section">
    <div class="light-matrix-bg">
        {#each Array(10) as _}
          <div class="matrix-row">01 10 00 11 01 10 11 00 10 01 00 11</div>
        {/each}
    </div>

    <div class="wrapper">
      <h2 class="section-title"><span>/</span> {content.expTitle}</h2>
      
      <div class="projects-grid">
        {#each projects as project}
          <a href={project.url} target="_blank" class="project-card">
            <div class="card-meta">
              <span class="tech">{project.tech}</span>
              <span class="arrow">↗</span>
            </div>
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
          </a>
        {/each}
      </div>

      <div class="bento-grid">
        <div class="bento-item dark">
          <h3>{content.bento1}</h3>
          <p>Full-stack proprietary systems.</p>
        </div>
        <div class="bento-item">
          <h3>{content.bento2}</h3>
          <p>High-load streams.</p>
        </div>
      </div>
    </div>
  </section>

  <footer class="main-footer">
    <div class="footer-top">
        <div class="logo">Ω JUSTE ALLOU</div>
        <a href="mailto:tyjustbusiness@gmail.com" class="email">Contact →</a>
    </div>
    <div class="footer-bottom">
        <span>2026 // CÔTE D'IVOIRE</span>
        <span>SVELTEKIT & ZIG</span>
    </div>
  </footer>
</div>

<style lang="scss">
  $accent: #0070f3;
  $bg-dark: #050505;
  $bg-light: #ffffff;

  :global(body) { 
    margin: 0; 
    font-family: 'Inter', sans-serif; 
    background: $bg-dark; 
    color: white;
    -webkit-font-smoothing: antialiased;
  }

  .glitch-canvas { position: fixed; inset: 0; z-index: 0; opacity: 0.3; pointer-events: none; }
  .portfolio-container { opacity: 0; transition: opacity 1s ease; &.visible { opacity: 1; } }

  // --- NAVIGATION ---
  .top-nav {
    display: flex; justify-content: space-between; align-items: center;
    padding: 1.5rem 1.5rem; position: relative; z-index: 10;
    .logo { font-weight: 900; letter-spacing: 2px; color: $accent; font-size: 0.9rem; }
    .nav-right { display: flex; align-items: center; gap: 1rem; }
    .lang-toggle { 
        background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); 
        color: #fff; padding: 4px 10px; border-radius: 8px; font-size: 0.7rem; font-weight: bold;
    }
    .status-badge { 
        font-size: 0.6rem; color: #888; display: flex; align-items: center; gap: 5px;
        .dot { width: 5px; height: 5px; background: #00ff88; border-radius: 50%; }
    }
  }

  // --- HERO ---
  .hero-section { min-height: 90vh; display: flex; flex-direction: column; padding: 0 1.5rem; }
  .hero-content {
    margin: auto 0;
    .hero-header { 
        display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;
        .emoji-box { 
            width: 40px; height: 40px; background: rgba($accent, 0.1); 
            border: 1px solid rgba($accent, 0.3); border-radius: 10px; display: grid; place-items: center;
            padding: 5px;
            .inline-emoji { width: 100%; height: auto; }
        }
        .meta-tag { font-family: monospace; color: $accent; font-size: 0.7rem; font-weight: bold; }
    }
    h1 { 
        font-size: 3rem; font-weight: 900; line-height: 1; margin: 0; letter-spacing: -2px;
        .gradient { background: linear-gradient(to bottom, #fff, #666); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    }
    .bio { font-size: 1.1rem; color: #aaa; margin: 2rem 0; line-height: 1.4; max-width: 90%; }
    .tags { display: flex; flex-wrap: wrap; gap: 0.8rem; font-family: monospace; font-size: 0.7rem; color: $accent; opacity: 0.6; }
  }

  .scroll-bolt-container { width: 100%; height: 1px; background: rgba(255,255,255,0.1); margin: 2rem 0; position: relative; }
  .scroll-bolt { height: 100%; background: $accent; transform-origin: left; box-shadow: 0 0 10px $accent; }

  // --- PROJECTS (LIGHT) ---
  .projects-section { 
    background: $bg-light; color: #000; padding: 4rem 1.5rem; position: relative; overflow: hidden; 
  }
  .light-matrix-bg {
    position: absolute; inset: 0; opacity: 0.03; font-family: monospace; font-size: 1.5rem;
    display: flex; flex-direction: column; gap: 1rem; pointer-events: none;
    .matrix-row { white-space: nowrap; animation: slide 20s infinite linear; }
  }
  @keyframes slide { from { transform: translateX(0); } to { transform: translateX(-20%); } }

  .wrapper { position: relative; z-index: 2; }
  .section-title { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 3px; color: #888; margin-bottom: 2rem; span { color: $accent; } }
  
  .projects-grid {
    display: flex; flex-direction: column; gap: 1rem;
    .project-card {
        background: #fff; border: 1px solid #eee; padding: 1.5rem; border-radius: 16px; text-decoration: none; color: inherit;
        .card-meta { display: flex; justify-content: space-between; color: $accent; font-size: 0.6rem; font-weight: bold; margin-bottom: 1rem; }
        h3 { margin: 0; font-size: 1.2rem; }
        p { font-size: 0.9rem; color: #666; margin: 0.5rem 0 0; }
    }
  }

  .bento-grid {
    display: grid; grid-template-columns: 1fr; gap: 1rem; margin-top: 1rem;
    .bento-item {
        background: #f8f8f8; padding: 1.5rem; border-radius: 16px;
        h3 { font-size: 1rem; margin: 0 0 0.5rem; }
        p { font-size: 0.8rem; color: #777; margin: 0; }
        &.dark { background: #000; color: #fff; }
    }
  }

  // --- FOOTER ---
  .main-footer {
    padding: 3rem 1.5rem; background: #000;
    .footer-top { 
        display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1a1a1a; padding-bottom: 1.5rem;
        .logo { font-weight: bold; font-size: 0.8rem; }
        .email { color: $accent; text-decoration: none; font-size: 0.8rem; font-weight: bold; }
    }
    .footer-bottom {
        display: flex; justify-content: space-between; padding-top: 1.5rem; font-size: 0.6rem; color: #555; font-family: monospace;
    }
  }

  // --- ANIMATIONS ---
  @keyframes floatPulse {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  .anim-float { animation: floatPulse 3s ease-in-out infinite; }

  @media (min-width: 768px) {
    .hero-content h1 { font-size: 5rem; }
    .projects-grid { grid-template-columns: 1fr 1fr; display: grid; }
    .bento-grid { grid-template-columns: 2fr 1fr; }
    .hero-section, .projects-section, .main-footer { padding-left: 6rem; padding-right: 6rem; }
  }
</style>