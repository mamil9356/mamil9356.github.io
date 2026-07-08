<!doctype html>
<html lang="ko">
 <head><script>window["__codeletBootstrap__"]=JSON.parse('{"A":"A","B":"20260708-05-579f504"}');</script><script src="/_sdk/f432b76fb310b513.telemetry_sdk.js" integrity="sha512-9FJQ55EKmmqhyyik8BhrMVfm0+iYYfb8uOlRsjtkxJMEI97qOVEI4PnHohDjQAtvAep0IOEpdQ64eki0sz62ug=="></script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>Shim Seonghun Archive</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
  <script src="https://cdn.jsdelivr.net/npm/lucide@0.263.0/dist/umd/lucide.min.js"></script>
  <style>
  :root{
    --bg-0:#040816; --bg-1:#071220; --bg-2:#0b1630;
    --primary:#82bfff; --primary-2:#8ec5ff; --accent:#d6ebff;
    --glow-0:#6aaeff; --glow-1:#9fd6ff;
    --text:#ffffff; --text-2:rgba(255,255,255,.72); --text-3:rgba(255,255,255,.5);
    --line:rgba(146,191,255,.14); --glass:rgba(10,20,42,.42);
    --ease:cubic-bezier(.22,.61,.36,1);
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{
    font-family:'Pretendard','Noto Sans KR',sans-serif;
    color:var(--text); background:var(--bg-0);
    overflow-x:hidden; -webkit-font-smoothing:antialiased;
    min-height:calc(100 * min(var(--vh,1vh),1vh));
  }
  /* Atmosphere layers */
  .atmos{position:fixed;inset:0;pointer-events:none;z-index:0}
  #starfield{position:fixed;inset:0;z-index:1;pointer-events:none}
  .nebula-wrap{position:fixed;inset:0;z-index:0;overflow:hidden;pointer-events:none}
  .nebula-wrap img{width:100%;height:100%;object-fit:cover;opacity:.28;filter:saturate(.85) brightness(.75);mix-blend-mode:screen;
    transform:scale(1.08);animation:drift 46s var(--ease) infinite alternate}
  .aurora{position:fixed;inset:-20% -10% auto -10%;height:60%;z-index:0;pointer-events:none;filter:blur(80px);opacity:.5;
    background:radial-gradient(60% 100% at 30% 0%,rgba(106,174,255,.28),transparent 70%),
               radial-gradient(50% 100% at 75% 10%,rgba(159,214,255,.18),transparent 70%);
    animation:aurora 30s ease-in-out infinite alternate}
  .fog{position:fixed;inset:auto -10% -20% -10%;height:55%;z-index:0;pointer-events:none;filter:blur(90px);opacity:.4;
    background:radial-gradient(60% 100% at 50% 100%,rgba(11,22,48,.9),transparent 70%),
               radial-gradient(40% 80% at 20% 100%,rgba(130,191,255,.14),transparent 70%)}
  .vignette{position:fixed;inset:0;z-index:2;pointer-events:none;
    background:radial-gradient(120% 90% at 50% 30%,transparent 55%,rgba(4,8,22,.72) 100%)}
  @keyframes drift{from{transform:scale(1.08) translate(0,0)}to{transform:scale(1.14) translate(-2%,-2%)}}
  @keyframes aurora{0%{transform:translateX(-4%) skewX(-3deg)}100%{transform:translateX(4%) skewX(3deg)}}

  main,header,footer{position:relative;z-index:3}
  .wrap{width:100%;max-width:1180px;margin:0 auto;padding:0 28px}

  /* Nav */
  header{position:fixed;top:0;left:0;right:0;z-index:20;transition:background .5s var(--ease),backdrop-filter .5s}
  header.scrolled{background:rgba(4,8,22,.55);backdrop-filter:blur(18px);border-bottom:1px solid var(--line)}
  .nav{display:flex;align-items:center;justify-content:space-between;height:72px;padding-top:env(safe-area-inset-top)}
  .nav-links{display:flex;gap:34px;list-style:none}
  .nav-links a{color:var(--text-2);text-decoration:none;font-size:.9rem;letter-spacing:.02em;position:relative;transition:color .4s var(--ease)}
  .nav-links a::after{content:'';position:absolute;left:0;bottom:-6px;height:1px;width:0;background:var(--primary);transition:width .5s var(--ease)}
  .nav-links a:hover,.nav-links a:focus-visible{color:var(--text)}
  .nav-links a:hover::after,.nav-links a:focus-visible::after{width:100%}
  .brand{letter-spacing:.22em;font-weight:500;font-size:.82rem;color:var(--text);text-transform:uppercase;text-decoration:none}
  .menu-btn{display:none;background:none;border:none;color:var(--text);cursor:pointer}
  a:focus-visible,button:focus-visible,input:focus-visible,textarea:focus-visible{outline:2px solid var(--primary);outline-offset:3px;border-radius:6px}

  /* Hero */
  .hero{min-height:calc(100 * min(var(--vh,1vh),1vh));display:flex;align-items:center;padding:120px 0 80px}
  .glass{background:var(--glass);border:1px solid var(--line);border-radius:26px;backdrop-filter:blur(22px);
    box-shadow:0 30px 90px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.06)}
  .hero-card{position:relative;padding:64px 56px;max-width:760px;overflow:hidden;will-change:transform;
    animation:float 9s ease-in-out infinite}
  .hero-card::before{content:'';position:absolute;top:-40%;left:-20%;width:70%;height:120%;
    background:radial-gradient(circle,rgba(159,214,255,.14),transparent 70%);pointer-events:none}
  @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
  .eyebrow{font-size:.78rem;letter-spacing:.32em;text-transform:uppercase;color:var(--primary-2)}
  h1{font-weight:700;line-height:1.08;margin:20px 0 22px;letter-spacing:-.01em;
     background:linear-gradient(180deg,#fff, #cfe3ff);-webkit-background-clip:text;background-clip:text;color:transparent}
  .lead{color:var(--text-2);font-weight:300;line-height:1.7;max-width:560px}
  .cta{display:inline-flex;align-items:center;gap:9px;margin-top:34px;padding:13px 24px;border-radius:999px;
    background:rgba(130,191,255,.12);border:1px solid rgba(130,191,255,.35);color:var(--text);text-decoration:none;
    font-size:.9rem;transition:transform .5s var(--ease),background .5s,box-shadow .5s}
  .cta:hover{transform:translateY(-2px);background:rgba(130,191,255,.2);box-shadow:0 0 40px rgba(106,174,255,.3)}
  .scroll-hint{display:block;margin-top:56px;color:var(--text-3);font-size:.78rem;letter-spacing:.18em}

  /* Sections */
  section{padding:120px 0}
  .head{max-width:640px;margin-bottom:56px}
  .head .eyebrow{display:block;margin-bottom:14px}
  h2{font-weight:700;letter-spacing:-.01em;line-height:1.12}
  .sub{color:var(--text-2);font-weight:300;margin-top:16px;line-height:1.7}

  /* Reveal */
  .reveal{opacity:0;transform:translateY(26px);filter:blur(6px);
    transition:opacity 1s var(--ease),transform 1s var(--ease),filter 1s var(--ease)}
  .reveal.in{opacity:1;transform:none;filter:none}

  /* Chapters */
  .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
  .card{position:relative;padding:34px 30px;border-radius:22px;overflow:hidden;cursor:default;
    background:var(--glass);border:1px solid var(--line);backdrop-filter:blur(18px);
    transition:transform .6s var(--ease),box-shadow .6s var(--ease),border-color .6s}
  .card::after{content:'';position:absolute;inset:0;border-radius:22px;padding:1px;pointer-events:none;opacity:0;
    background:linear-gradient(135deg,rgba(130,191,255,.6),transparent 40%,transparent 60%,rgba(159,214,255,.5));
    -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
    -webkit-mask-composite:xor;mask-composite:exclude;transition:opacity .6s}
  .card::before{content:'';position:absolute;top:0;left:-60%;width:50%;height:100%;transform:skewX(-20deg);
    background:linear-gradient(90deg,transparent,rgba(214,235,255,.14),transparent);transition:left .8s var(--ease)}
  .card:hover{transform:translateY(-8px);border-color:rgba(130,191,255,.3);box-shadow:0 24px 60px rgba(0,0,0,.5),0 0 50px rgba(106,174,255,.15)}
  .card:hover::after{opacity:1}
  .card:hover::before{left:120%}
  .card .num{font-size:.76rem;letter-spacing:.2em;color:var(--primary);opacity:.8}
  .card h3{margin:14px 0 12px;font-weight:500;letter-spacing:-.01em}
  .card p{color:var(--text-2);font-weight:300;line-height:1.7;font-size:.94rem}

  /* Gallery */
  .filters{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:32px}
  .filter{padding:8px 18px;border-radius:999px;background:transparent;border:1px solid var(--line);color:var(--text-2);
    cursor:pointer;font-size:.86rem;font-family:inherit;transition:all .45s var(--ease)}
  .filter:hover{color:var(--text);border-color:rgba(130,191,255,.4)}
  .filter[aria-pressed="true"]{background:rgba(130,191,255,.14);border-color:rgba(130,191,255,.5);color:var(--text)}
  .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
  .tile{position:relative;border-radius:18px;overflow:hidden;cursor:pointer;aspect-ratio:16/10;border:1px solid var(--line);
    transition:transform .6s var(--ease),opacity .6s;background:var(--bg-1)}
  .tile img{width:100%;height:100%;object-fit:cover;transition:transform 1.1s var(--ease),filter .6s;filter:brightness(.88) saturate(.95)}
  .tile:hover img{transform:scale(1.06);filter:brightness(1) saturate(1.05)}
  .tile::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(4,8,22,.6));opacity:.7;transition:opacity .5s}
  .tile:hover::after{opacity:.35}
  .tile.hide{display:none}

  /* Lightbox */
  .lightbox{position:fixed;inset:0;z-index:50;display:flex;align-items:center;justify-content:center;padding:32px;
    background:rgba(4,8,22,.82);backdrop-filter:blur(14px);opacity:0;visibility:hidden;transition:opacity .5s var(--ease),visibility .5s}
  .lightbox.open{opacity:1;visibility:visible}
  .lightbox img{max-width:92vw;max-height:calc(85 * min(var(--vh,1vh),1vh));border-radius:16px;
    box-shadow:0 40px 100px rgba(0,0,0,.6);transform:scale(.94);transition:transform .6s var(--ease)}
  .lightbox.open img{transform:scale(1)}
  .lb-close{position:absolute;top:26px;right:26px;background:rgba(255,255,255,.08);border:1px solid var(--line);
    color:var(--text);width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .4s}
  .lb-close:hover{background:rgba(255,255,255,.16)}

  /* Watch */
  .watch-embed{position:relative;border-radius:20px;overflow:hidden;border:1px solid var(--line);aspect-ratio:16/9;
    background:var(--bg-1);box-shadow:0 30px 80px rgba(0,0,0,.45)}
  .watch-embed iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
  .watch-controls{display:flex;gap:12px;margin-top:22px;flex-wrap:wrap}
  .field{flex:1;min-width:220px;display:flex;flex-direction:column;gap:8px}
  label{font-size:.82rem;color:var(--text-2);letter-spacing:.02em}
  input,textarea{width:100%;background:rgba(8,16,34,.6);border:1px solid var(--line);border-radius:12px;color:var(--text);
    font-family:inherit;font-size:.94rem;padding:13px 15px;transition:border-color .4s,box-shadow .4s;resize:vertical}
  input::placeholder,textarea::placeholder{color:var(--text-3)}
  input:focus,textarea:focus{border-color:rgba(130,191,255,.5);box-shadow:0 0 0 4px rgba(106,174,255,.12);outline:none}
  .btn{align-self:flex-end;padding:13px 24px;border-radius:12px;background:rgba(130,191,255,.14);
    border:1px solid rgba(130,191,255,.4);color:var(--text);cursor:pointer;font-family:inherit;font-size:.9rem;
    transition:background .4s,transform .4s,box-shadow .4s;white-space:nowrap}
  .btn:hover:not(:disabled){background:rgba(130,191,255,.24);transform:translateY(-2px);box-shadow:0 0 30px rgba(106,174,255,.25)}
  .btn:disabled{opacity:.5;cursor:not-allowed}
  .hint{color:var(--text-3);font-size:.8rem;margin-top:12px;line-height:1.6}

  /* Notes */
  .notes-box textarea{min-height:220px;line-height:1.75}
  .notes-foot{display:flex;align-items:center;justify-content:space-between;margin-top:16px;gap:16px;flex-wrap:wrap}
  .status{font-size:.82rem;color:var(--text-3);display:inline-flex;align-items:center;gap:8px}
  .status .dot{width:7px;height:7px;border-radius:50%;background:var(--primary);opacity:.6}
  .status.saving .dot{animation:pulse 1s ease-in-out infinite}
  @keyframes pulse{0%,100%{opacity:.3}50%{opacity:1}}

  /* Footer */
  footer{padding:70px 0 calc(50px + env(safe-area-inset-bottom));border-top:1px solid var(--line);margin-top:60px}
  .foot{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap}
  .foot-name{letter-spacing:.2em;font-size:.82rem;color:var(--text)}
  .foot-text{color:var(--text-3);font-size:.82rem}

  /* Responsive */
  @media(max-width:900px){
    .cards{grid-template-columns:1fr}
    .grid{grid-template-columns:1fr}
    .hero-card{padding:44px 30px}
    .nav-links{display:none}
    .menu-btn{display:flex}
    header.open .nav-links{display:flex;position:absolute;top:72px;left:0;right:0;flex-direction:column;gap:0;
      background:rgba(4,8,22,.92);backdrop-filter:blur(18px);border-top:1px solid var(--line);padding:8px 28px 20px}
    header.open .nav-links a{padding:14px 0;border-bottom:1px solid var(--line)}
  }
  @media(prefers-reduced-motion:reduce){
    *{animation:none!important}
    .reveal{opacity:1;transform:none;filter:none}
  }
</style>
  <script src="https://cdn.tailwindcss.com/3.4.17" type="text/javascript"></script>
  <script src="/_sdk/9432170dbd2ae0df.resizing_sdk.js" type="text/javascript" integrity="sha512-FeT+58sb1f9ejWPWFjCbJvTT+SDwGV+ngrHUnlO7TWEOoqwOLj6p256kO3vOL7DIWl1cIgrobiof8v2bOigwPg=="></script>
 </head>
 <body data-template-id="__page-root"><!-- Atmosphere -->
  <div class="nebula-wrap" aria-hidden="true">
   <img data-template-id="nebula-image" loading="lazy" class="canva-image">
  </div>
  <div class="aurora atmos" aria-hidden="true"></div>
  <div class="fog atmos" aria-hidden="true"></div>
  <canvas id="starfield" aria-hidden="true"></canvas>
  <div class="vignette" aria-hidden="true"></div><!-- Nav -->
  <header id="site-header">
   <div class="wrap nav"><a href="#hero" class="brand" data-template-id="nav-brand" aria-label="Shim Seonghun Archive home">SHIM SEONGHUN</a>
    <nav aria-label="주요 메뉴">
     <ul class="nav-links">
      <li><a href="#hero" data-template-id="nav-hero">Home</a></li>
      <li><a href="#chapters" data-template-id="nav-chapters">Chapters</a></li>
      <li><a href="#gallery" data-template-id="nav-gallery">Gallery</a></li>
      <li><a href="#notes" data-template-id="nav-notes">Notes</a></li>
     </ul>
    </nav><button class="menu-btn" id="menu-btn" aria-label="메뉴 열기" aria-expanded="false"><i data-lucide="menu"></i></button>
   </div>
  </header>
  <main><!-- Hero -->
   <section class="hero" id="hero">
    <div class="wrap">
     <div class="glass hero-card" id="hero-card"><span class="eyebrow" data-template-id="hero-eyebrow"></span>
      <h1 data-template-id="hero-title"></h1>
      <p class="lead" data-template-id="hero-subtitle"></p><a href="#chapters" class="cta canva-button" data-template-id="hero-cta"><i data-lucide="arrow-down" style="width:16px;height:16px"></i><span></span></a> <span class="scroll-hint" data-template-id="hero-scroll-hint"></span>
     </div>
    </div>
   </section><!-- Chapters -->
   <section id="chapters">
    <div class="wrap">
     <div class="head reveal"><span class="eyebrow" data-template-id="chapters-eyebrow"></span>
      <h2 data-template-id="chapters-heading"></h2>
      <p class="sub" data-template-id="chapters-sub"></p>
     </div>
     <div class="cards">
      <article class="card reveal canva-card" data-template-id="chapter-1"><span class="num" data-template-id="chapter-1-num"></span>
       <h3 data-template-id="chapter-1-title"></h3>
       <p data-template-id="chapter-1-desc"></p>
      </article>
      <article class="card reveal canva-card" data-template-id="chapter-2"><span class="num" data-template-id="chapter-2-num"></span>
       <h3 data-template-id="chapter-2-title"></h3>
       <p data-template-id="chapter-2-desc"></p>
      </article>
      <article class="card reveal canva-card" data-template-id="chapter-3"><span class="num" data-template-id="chapter-3-num"></span>
       <h3 data-template-id="chapter-3-title"></h3>
       <p data-template-id="chapter-3-desc"></p>
      </article>
     </div>
    </div>
   </section><!-- Gallery -->
   <section id="gallery">
    <div class="wrap">
     <div class="head reveal"><span class="eyebrow" data-template-id="gallery-eyebrow"></span>
      <h2 data-template-id="gallery-heading"></h2>
      <p class="sub" data-template-id="gallery-sub"></p>
     </div>
     <div class="filters reveal" role="group" aria-label="갤러리 필터"><button class="filter canva-button" data-filter="all" aria-pressed="true" data-template-id="filter-all"></button> <button class="filter canva-button" data-filter="aurora" aria-pressed="false" data-template-id="filter-aurora"></button> <button class="filter canva-button" data-filter="galaxy" aria-pressed="false" data-template-id="filter-galaxy"></button>
     </div>
     <div class="grid"><button class="tile reveal" data-cat="aurora" aria-label="갤러리 이미지 1 확대"> <img data-template-id="gallery-1" loading="lazy" class="canva-image"> </button> <button class="tile reveal" data-cat="galaxy" aria-label="갤러리 이미지 2 확대"> <img data-template-id="gallery-2" loading="lazy" class="canva-image"> </button> <button class="tile reveal" data-cat="galaxy" aria-label="갤러리 이미지 3 확대"> <img data-template-id="gallery-3" loading="lazy" class="canva-image"> </button> <button class="tile reveal" data-cat="aurora" aria-label="갤러리 이미지 4 확대"> <img data-template-id="gallery-4" loading="lazy" class="canva-image"> </button>
     </div>
    </div>
   </section><!-- Watch -->
   <section id="watch">
    <div class="wrap">
     <div class="head reveal"><span class="eyebrow" data-template-id="watch-eyebrow"></span>
      <h2 data-template-id="watch-heading"></h2>
      <p class="sub" data-template-id="watch-sub"></p>
     </div>
     <div class="reveal">
      <div class="watch-embed">
       <iframe id="yt-frame" title="YouTube 영상" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="watch-controls">
       <div class="field"><label for="yt-url" data-template-id="watch-url-label"></label> <input type="text" id="yt-url" data-template-id="watch-url-input">
       </div><button class="btn canva-button" id="yt-load" data-template-id="watch-load-button"></button>
      </div>
      <p class="hint" data-template-id="watch-hint"></p>
     </div>
    </div>
   </section><!-- Notes -->
   <section id="notes">
    <div class="wrap">
     <div class="head reveal"><span class="eyebrow" data-template-id="notes-eyebrow"></span>
      <h2 data-template-id="notes-heading"></h2>
      <p class="sub" data-template-id="notes-sub"></p>
     </div>
     <div class="glass notes-box reveal" style="padding:30px;border-radius:22px">
      <div class="field"><label for="note-area" data-template-id="notes-label"></label> <textarea id="note-area" data-template-id="notes-input"></textarea>
      </div>
      <div class="notes-foot"><span class="status" id="note-status" aria-live="polite"><span class="dot"></span><span id="note-status-text"></span></span> <button class="btn canva-button" id="note-save" data-template-id="notes-save-button"></button>
      </div>
     </div>
    </div>
   </section>
  </main>
  <footer>
   <div class="wrap foot"><span class="foot-name" data-template-id="footer-name"></span> <span class="foot-text" data-template-id="footer-text"></span>
   </div>
  </footer><!-- Lightbox -->
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="이미지 확대 보기"><button class="lb-close" id="lb-close" data-template-id="lightbox-close" aria-label="닫기"><i data-lucide="x"></i></button> <img id="lb-img" alt="">
  </div>
  <script src="/_sdk/719055fef2a85d14.editing_sdk.js" integrity="sha512-kFqrdGgIiTOsu307feB5Cy3JVP9IayftsmCIZ0csxYBGuBmJQPhyvcnmKR8F0fTW97h5s1gAvz3SumI8zJ6OxQ=="></script>
  <script src="/_sdk/0179d719c431a79e.data_sdk.js" integrity="sha512-OsRvJkI5GkC3MJQcgotQYotpzrMSX415GiKKgvYdxQEEkzD/fdchShO2FMSy0PJr/tiINMXOk5Vl2zAgg6bUiA=="></script>
  <script>
  /* =========================================================================
   * SHIM SEONGHUN ARCHIVE — interactive starfield + app logic
   * Structure: Config → Utils → Star classes → ShootingStar → Manager → UI → Init
   * ========================================================================= */

  /* ---------- Config: central tuning values ---------- */
  const CONFIG = {
    starDensity: 0.00012,      // stars per pixel of viewport area
    maxStars: 260,             // hard cap for performance
    linkDistance: 130,         // px distance to draw constellation line
    mouseRadius: 170,          // px radius where cursor brightens links
    shootingChance: 0.004,     // per-frame chance to spawn a shooting star
    parallaxStrength: 14,      // px hero parallax offset
    colors: ['#82bfff', '#8ec5ff', '#d6ebff', '#9fd6ff', '#ffffff']
  };
  const STAR_TYPES = ['tiny','classic','cross','diamond','glow','twinkle'];

  /* ---------- Utils: math + pooling helpers ---------- */
  const rand = (min, max) => min + Math.random() * (max - min);        // random float in range
  const randInt = (min, max) => Math.floor(rand(min, max + 1));         // inclusive random int
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];      // random array element
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));               // constrain value

  /* ---------- Star: a single reusable celestial body ---------- */
  class Star {
    constructor(w, h) { this.reset(w, h, true); }
    /* Re-initialise this star's properties (object reuse to reduce GC) */
    reset(w, h, spawnAnywhere) {
      this.x = Math.random() * w;
      this.y = spawnAnywhere ? Math.random() * h : Math.random() * h;
      this.type = pick(STAR_TYPES);
      this.depth = rand(0.3, 1);                    // parallax depth factor
      this.size = rand(0.6, 2.2) * this.depth + (this.type === 'glow' ? 1.4 : 0);
      this.color = pick(CONFIG.colors);
      this.baseAlpha = rand(0.35, 0.9) * this.depth;
      this.twinkleSpeed = rand(0.4, 1.8);
      this.phase = rand(0, Math.PI * 2);
      this.rot = rand(0, Math.PI * 2);
      this.rotSpeed = rand(-0.15, 0.15);
      this.driftX = rand(-0.04, 0.04) * this.depth;
      this.driftY = rand(-0.02, 0.02) * this.depth;
      this.alpha = this.baseAlpha;
    }
    /* Advance animation state for one frame */
    update(dt, w, h) {
      this.phase += this.twinkleSpeed * dt;
      this.rot += this.rotSpeed * dt;
      const tw = 0.5 + 0.5 * Math.sin(this.phase);   // 0..1 twinkle
      this.alpha = clamp(this.baseAlpha * (0.55 + tw * 0.55), 0, 1);
      this.x += this.driftX; this.y += this.driftY;
      // wrap around edges to keep the field infinite
      if (this.x < -5) this.x = w + 5; else if (this.x > w + 5) this.x = -5;
      if (this.y < -5) this.y = h + 5; else if (this.y > h + 5) this.y = -5;
    }
    /* Draw the star according to its type */
    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      const s = this.size;
      switch (this.type) {
        case 'tiny':
        case 'classic':
          ctx.beginPath(); ctx.arc(this.x, this.y, s, 0, Math.PI * 2); ctx.fill();
          break;
        case 'glow': {
          const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, s * 4);
          g.addColorStop(0, this.color); g.addColorStop(1, 'transparent');
          ctx.fillStyle = g;
          ctx.beginPath(); ctx.arc(this.x, this.y, s * 4, 0, Math.PI * 2); ctx.fill();
          break;
        }
        case 'twinkle': {
          const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, s * 3);
          g.addColorStop(0, this.color); g.addColorStop(1, 'transparent');
          ctx.fillStyle = g;
          ctx.beginPath(); ctx.arc(this.x, this.y, s * 3, 0, Math.PI * 2); ctx.fill();
          break;
        }
        case 'cross':
          this.drawSpikes(ctx, 4, s * 3, s * 0.35); break;
        case 'diamond':
          ctx.translate(this.x, this.y); ctx.rotate(this.rot);
          ctx.beginPath();
          ctx.moveTo(0, -s * 2); ctx.lineTo(s, 0); ctx.lineTo(0, s * 2); ctx.lineTo(-s, 0);
          ctx.closePath(); ctx.fill();
          break;
      }
      ctx.restore();
    }
    /* Helper: draw a symmetrical cross/spike shape */
    drawSpikes(ctx, arms, len, thick) {
      ctx.save();
      ctx.translate(this.x, this.y); ctx.rotate(this.rot);
      for (let i = 0; i < arms; i++) {
        ctx.rotate(Math.PI / (arms / 2));
        ctx.fillRect(-thick / 2, -len, thick, len);
      }
      ctx.restore();
    }
  }

  /* ---------- ShootingStar: transient streaking meteor ---------- */
  class ShootingStar {
    constructor() { this.active = false; }
    /* Launch from a random edge with random velocity/length */
    spawn(w, h) {
      this.active = true;
      this.x = rand(0, w); this.y = rand(0, h * 0.5);
      const angle = rand(Math.PI * 0.15, Math.PI * 0.4);
      const speed = rand(6, 12);
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.len = rand(120, 280);
      this.life = 1;
      this.decay = rand(0.008, 0.018);
    }
    update() {
      if (!this.active) return;
      this.x += this.vx; this.y += this.vy;
      this.life -= this.decay;
      if (this.life <= 0) this.active = false;
    }
    draw(ctx) {
      if (!this.active) return;
      const tx = this.x - this.vx / Math.hypot(this.vx, this.vy) * this.len;
      const ty = this.y - this.vy / Math.hypot(this.vx, this.vy) * this.len;
      const g = ctx.createLinearGradient(this.x, this.y, tx, ty);
      g.addColorStop(0, `rgba(159,214,255,${this.life})`);
      g.addColorStop(1, 'transparent');
      ctx.save();
      ctx.strokeStyle = g; ctx.lineWidth = 2; ctx.lineCap = 'round';
      ctx.shadowBlur = 12; ctx.shadowColor = '#9fd6ff';
      ctx.beginPath(); ctx.moveTo(this.x, this.y); ctx.lineTo(tx, ty); ctx.stroke();
      ctx.restore();
    }
  }

  /* ---------- StarfieldManager: owns canvas, loop and interactions ---------- */
  class StarfieldManager {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.stars = [];
      this.shooting = [];
      this.mouse = { x: -9999, y: -9999 };
      this.last = performance.now();
      this.dpr = 1;
      this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.resize = this.resize.bind(this);
      this.loop = this.loop.bind(this);
      this.bind();
      this.resize();
    }
    /* Attach viewport + input listeners */
    bind() {
      window.addEventListener('resize', this.resize, { passive: true });
      window.addEventListener('mousemove', e => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; }, { passive: true });
      window.addEventListener('mouseleave', () => { this.mouse.x = -9999; this.mouse.y = -9999; });
    }
    /* Handle resize + retina scaling and rebuild the star pool */
    resize() {
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);   // cap DPR for perf
      this.w = window.innerWidth; this.h = window.innerHeight;
      this.canvas.width = this.w * this.dpr;
      this.canvas.height = this.h * this.dpr;
      this.canvas.style.width = this.w + 'px';
      this.canvas.style.height = this.h + 'px';
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      const target = Math.min(CONFIG.maxStars, Math.floor(this.w * this.h * CONFIG.starDensity));
      // reuse existing objects; add/remove only the delta
      while (this.stars.length < target) this.stars.push(new Star(this.w, this.h));
      while (this.stars.length > target) this.stars.pop();
      // pre-allocate shooting star pool
      if (this.shooting.length === 0) for (let i = 0; i < 3; i++) this.shooting.push(new ShootingStar());
    }
    /* Draw faint constellation lines between nearby stars, brighter near cursor */
    drawLinks() {
      const ctx = this.ctx;
      for (let i = 0; i < this.stars.length; i++) {
        const a = this.stars[i];
        for (let j = i + 1; j < this.stars.length; j++) {
          const b = this.stars[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > CONFIG.linkDistance * CONFIG.linkDistance) continue;
          const d = Math.sqrt(d2);
          let alpha = (1 - d / CONFIG.linkDistance) * 0.12;
          // brighten links close to the mouse
          const mdx = (a.x + b.x) / 2 - this.mouse.x;
          const mdy = (a.y + b.y) / 2 - this.mouse.y;
          const md = Math.hypot(mdx, mdy);
          if (md < CONFIG.mouseRadius) alpha += (1 - md / CONFIG.mouseRadius) * 0.35;
          if (alpha <= 0.01) continue;
          ctx.strokeStyle = `rgba(130,191,255,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    /* Main render loop driven by requestAnimationFrame */
    loop(now) {
      const dt = Math.min((now - this.last) / 16.67, 3); // normalise to ~60fps units
      this.last = now;
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.w, this.h);
      this.drawLinks();
      for (const s of this.stars) { s.update(dt, this.w, this.h); s.draw(ctx); }
      // maybe spawn a shooting star using an idle pooled object
      if (!this.reduced && Math.random() < CONFIG.shootingChance) {
        const free = this.shooting.find(s => !s.active);
        if (free) free.spawn(this.w, this.h);
      }
      for (const sh of this.shooting) { sh.update(); sh.draw(ctx); }
      requestAnimationFrame(this.loop);
    }
    start() { requestAnimationFrame(this.loop); }
  }

  /* ---------- UIManager: DOM interactions ---------- */
  const UI = {
    /* Sticky nav shadow + mobile menu toggle */
    initNav() {
      const header = document.getElementById('site-header');
      const menuBtn = document.getElementById('menu-btn');
      const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      menuBtn.addEventListener('click', () => {
        const open = header.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', String(open));
      });
      header.querySelectorAll('.nav-links a').forEach(a =>
        a.addEventListener('click', () => { header.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); })
      );
    },
    /* Scroll-reveal via IntersectionObserver */
    initReveal() {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) { setTimeout(() => e.target.classList.add('in'), i * 60); io.unobserve(e.target); }
        });
      }, { threshold: 0.15 });
      document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    },
    /* Hero mouse parallax (translate opposite to cursor) */
    initParallax() {
      const card = document.getElementById('hero-card');
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      window.addEventListener('mousemove', e => {
        const cx = (e.clientX / window.innerWidth - 0.5) * -CONFIG.parallaxStrength;
        const cy = (e.clientY / window.innerHeight - 0.5) * -CONFIG.parallaxStrength;
        card.style.transform = `translate(${cx}px, ${cy}px)`;
      }, { passive: true });
    },
    /* Gallery category filter + lightbox */
    initGallery() {
      const filters = document.querySelectorAll('.filter');
      const tiles = document.querySelectorAll('.tile');
      filters.forEach(f => f.addEventListener('click', () => {
        filters.forEach(x => x.setAttribute('aria-pressed', 'false'));
        f.setAttribute('aria-pressed', 'true');
        const cat = f.dataset.filter;
        tiles.forEach(t => t.classList.toggle('hide', cat !== 'all' && t.dataset.cat !== cat));
      }));
      const lb = document.getElementById('lightbox');
      const lbImg = document.getElementById('lb-img');
      const close = document.getElementById('lb-close');
      const open = (src, alt) => { lbImg.src = src; lbImg.alt = alt || ''; lb.classList.add('open'); close.focus(); };
      const hide = () => { lb.classList.remove('open'); };
      tiles.forEach(t => t.addEventListener('click', () => {
        const img = t.querySelector('img');
        if (img && img.src) open(img.src, img.alt);
      }));
      close.addEventListener('click', hide);
      lb.addEventListener('click', e => { if (e.target === lb) hide(); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') hide(); });
    },
    /* YouTube embed: extract id from any URL form and swap iframe src */
    initYouTube() {
      const input = document.getElementById('yt-url');
      const btn = document.getElementById('yt-load');
      const frame = document.getElementById('yt-frame');
      const extractId = (url) => {
        const patterns = [/[?&]v=([\w-]{11})/, /youtu\.be\/([\w-]{11})/, /embed\/([\w-]{11})/, /shorts\/([\w-]{11})/];
        for (const p of patterns) { const m = url.match(p); if (m) return m[1]; }
        if (/^[\w-]{11}$/.test(url.trim())) return url.trim();
        return null;
      };
      const load = () => {
        const id = extractId(input.value || '');
        if (id) frame.src = `https://www.youtube.com/embed/${id}`;
      };
      // sensible default embed so the frame is never blank
      frame.src = 'https://www.youtube.com/embed/aBr2kKAHN6M';
      btn.addEventListener('click', load);
      input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); load(); } });
    }
  };

  /* ---------- NotesManager: auto-saving note backed by Canva Sheet ---------- */
  const Notes = {
    record: null,          // the single note record from the Data SDK
    timer: null,           // debounce timer
    saving: false,
    area: null, btn: null, statusText: null, statusEl: null,

    setStatus(text, saving) {
      this.statusText.textContent = text;
      this.statusEl.classList.toggle('saving', !!saving);
    },
    /* Debounced auto-save after typing pauses */
    scheduleSave() {
      // instant local draft so text is never lost between sessions
      try { localStorage.setItem('ssa_note_draft', this.area.value); } catch (e) {}
      this.setStatus('입력 중…', true);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.save(), 900);
    },
    /* Persist to the Canva Sheet (create once, then update) */
    async save() {
      if (this.saving) return;
      this.saving = true;
      this.btn.disabled = true;
      this.setStatus('저장 중…', true);
      const body = this.area.value;
      const now = new Date().toISOString();
      let result;
      try {
        if (this.record) {
          this.record.note_body = body; this.record.updated_at = now;
          result = await window.dataSdk.update(this.record);
        } else {
          result = await window.dataSdk.create({ note_body: body, updated_at: now });
        }
        if (result && result.isOk) this.setStatus('저장됨', false);
        else this.setStatus('저장 실패 — 다시 시도해 주세요', false);
      } catch (e) {
        this.setStatus('저장 실패 — 다시 시도해 주세요', false);
      }
      this.saving = false;
      this.btn.disabled = false;
    },
    /* DataHandler callback — reads/displays only, never writes */
    onDataChanged(data) {
      const rec = data && data.length ? data[0] : null;
      this.record = rec;
      // only overwrite the textarea if the user isn't actively editing
      if (rec && document.activeElement !== this.area && !this.saving) {
        this.area.value = rec.note_body || '';
        this.setStatus('저장됨', false);
      }
    },
    async init() {
      this.area = document.getElementById('note-area');
      this.btn = document.getElementById('note-save');
      this.statusText = document.getElementById('note-status-text');
      this.statusEl = document.getElementById('note-status');
      // restore local draft immediately for perceived speed
      try {
        const draft = localStorage.getItem('ssa_note_draft');
        if (draft) { this.area.value = draft; }
      } catch (e) {}
      this.setStatus('연결 중…', true);
      this.area.addEventListener('input', () => this.scheduleSave());
      this.btn.addEventListener('click', () => { clearTimeout(this.timer); this.save(); });
      try {
        const res = await window.dataSdk.init({ onDataChanged: (d) => this.onDataChanged(d) });
        if (res && res.isOk) { if (!this.record) this.setStatus('준비됨', false); }
        else this.setStatus('오프라인 — 로컬 임시 저장 사용', false);
      } catch (e) {
        this.setStatus('오프라인 — 로컬 임시 저장 사용', false);
      }
    }
  };

  /* ---------- Initialization ---------- */
  function boot() {
    if (window.lucide) lucide.createIcons();
    const canvas = document.getElementById('starfield');
    const field = new StarfieldManager(canvas);
    field.start();
    UI.initNav();
    UI.initReveal();
    UI.initParallax();
    UI.initGallery();
    UI.initYouTube();
    Notes.init();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  </script>
 <script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'a17f757b10a1ea20',t:'MTc4MzUxNzU4OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
