(function () {
  const id = window.CURSO;
  const C = window.CURSOS[id];
  const E = window.EVENTO;
  document.body.classList.add("curso-" + id);
  if (/imprimir/.test(location.search)) document.body.classList.add("preview-print");
  document.title = "Invitación Egresados 2026 · " + C.titulo + " · Fray Mamerto Esquiú";

  // ---------- Logo (usa assets/logo.png; si no existe, muestra un escudo) ----------
  function crestSVG() {
    return `<svg viewBox="0 0 120 140" class="crest" aria-label="Escudo">
      <defs><linearGradient id="g${Math.random().toString(36).slice(2,6)}" x1="0" y1="0" x2="0" y2="1"></linearGradient></defs>
      <path d="M60 6 L108 22 V64 C108 98 86 120 60 134 C34 120 12 98 12 64 V22 Z" fill="var(--accent)" stroke="var(--gold)" stroke-width="4"/>
      <path d="M60 16 L99 29 V64 C99 92 81 111 60 123 C39 111 21 92 21 64 V29 Z" fill="none" stroke="var(--gold)" stroke-width="1.2" opacity=".7"/>
      <text x="60" y="58" text-anchor="middle" font-family="Cinzel, serif" font-size="13" fill="var(--gold)" letter-spacing="1">N.º</text>
      <text x="60" y="82" text-anchor="middle" font-family="Cinzel, serif" font-weight="700" font-size="26" fill="#fff">5078</text>
      <text x="60" y="102" text-anchor="middle" font-family="Cinzel, serif" font-size="10" fill="var(--gold)" letter-spacing="2">F · M · E</text>
    </svg>`;
  }
  function logoHTML(cls) {
    return `<span class="logo-wrap ${cls || ""}"><img class="logo" src="${E.logo}" alt="Logo del colegio"
      onerror="this.parentNode.innerHTML=window.__crest()"></span>`;
  }
  window.__crest = crestSVG;

  // ---------- Íconos SVG (trazo fino, estilo elegante) ----------
  const svg = (p, cls) => `<svg class="icon ${cls || ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const I = {
    calendar: svg('<rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/><path d="M8 13.5h.01M12 13.5h.01M16 13.5h.01M8 17h.01M12 17h.01"/>'),
    clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>'),
    pin: svg('<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.6"/>'),
    music: svg('<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>'),
    mute: svg('<path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="m22 9-6 6M16 9l6 6"/>'),
    print: svg('<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 14h12v7H6z"/>'),
    close: svg('<path d="M6 6l12 12M18 6 6 18"/>'),
    down: svg('<path d="m6 9 6 6 6-6"/>'),
    calPlus: svg('<rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4M12 12.5v5M9.5 15h5"/>'),
    map: svg('<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/>'),
    envelope: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
    cap: svg('<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6"/>'),
    zoom: svg('<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M11 8v6M8 11h6"/>')
  };

  const divider = `<div class="divider"><span></span><i></i><span></span></div>`;
  const nombres = C.alumnos.map(n => `<li>${n}</li>`).join("");

  const calURL = "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" + encodeURIComponent("Acto de Egresados 2026 - " + C.titulo + " - Fray Mamerto Esquiú") +
    "&dates=20261211T213000Z/20261212T003000Z" +
    "&details=" + encodeURIComponent("Acto de Egresados · Promoción 2026") +
    "&location=" + encodeURIComponent(E.colegio + " Fray Mamerto Esquiú, " + E.direccion + ", Pichanal, Salta");
  const mapURL = "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Colegio Secundario 5078 Fray Mamerto Esquiú, Misión San Francisco, Pichanal, Salta");

  const app = document.getElementById("app");
  app.innerHTML = `
  <!-- ================= VERSIÓN WEB ================= -->
  <div class="web">
    <div class="intro" id="intro">
      <div class="intro-card">
        <span class="corner tl"><svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M2 58V20C2 10 10 2 20 2h38"/><path d="M10 58V24c0-8 6-14 14-14h34"/><circle cx="20" cy="20" r="3" fill="currentColor"/><path d="M26 20c6-8 14-8 20-4M20 26c-8 6-8 14-4 20"/></svg></span><span class="corner tr"><svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M2 58V20C2 10 10 2 20 2h38"/><path d="M10 58V24c0-8 6-14 14-14h34"/><circle cx="20" cy="20" r="3" fill="currentColor"/><path d="M26 20c6-8 14-8 20-4M20 26c-8 6-8 14-4 20"/></svg></span><span class="corner bl"><svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M2 58V20C2 10 10 2 20 2h38"/><path d="M10 58V24c0-8 6-14 14-14h34"/><circle cx="20" cy="20" r="3" fill="currentColor"/><path d="M26 20c6-8 14-8 20-4M20 26c-8 6-8 14-4 20"/></svg></span><span class="corner br"><svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M2 58V20C2 10 10 2 20 2h38"/><path d="M10 58V24c0-8 6-14 14-14h34"/><circle cx="20" cy="20" r="3" fill="currentColor"/><path d="M26 20c6-8 14-8 20-4M20 26c-8 6-8 14-4 20"/></svg></span>
        ${logoHTML("big")}
        <p class="intro-small">Promoción 2026</p>
        <h1 class="intro-course">${C.titulo}</h1>
        <p class="intro-small">Tenés una invitación especial</p>
        <button class="btn btn-gold" id="openBtn">${I.envelope} Abrir invitación</button>
        <p class="intro-hint">${I.music} Con música · subí el volumen</p>
      </div>
    </div>

    <header class="hero">
      <div class="sparkles" id="sparkles"></div>
      <span class="corner tl"><svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M2 58V20C2 10 10 2 20 2h38"/><path d="M10 58V24c0-8 6-14 14-14h34"/><circle cx="20" cy="20" r="3" fill="currentColor"/><path d="M26 20c6-8 14-8 20-4M20 26c-8 6-8 14-4 20"/></svg></span><span class="corner tr"><svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M2 58V20C2 10 10 2 20 2h38"/><path d="M10 58V24c0-8 6-14 14-14h34"/><circle cx="20" cy="20" r="3" fill="currentColor"/><path d="M26 20c6-8 14-8 20-4M20 26c-8 6-8 14-4 20"/></svg></span><span class="corner bl"><svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M2 58V20C2 10 10 2 20 2h38"/><path d="M10 58V24c0-8 6-14 14-14h34"/><circle cx="20" cy="20" r="3" fill="currentColor"/><path d="M26 20c6-8 14-8 20-4M20 26c-8 6-8 14-4 20"/></svg></span><span class="corner br"><svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M2 58V20C2 10 10 2 20 2h38"/><path d="M10 58V24c0-8 6-14 14-14h34"/><circle cx="20" cy="20" r="3" fill="currentColor"/><path d="M26 20c6-8 14-8 20-4M20 26c-8 6-8 14-4 20"/></svg></span>
      ${logoHTML("big")}
      <p class="school">${E.colegio}</p>
      <p class="school-name">${E.nombre}</p>
      ${divider}
      <p class="script">Egresados</p>
      <h1 class="promo">PROMOCIÓN 2026</h1>
      <div class="course-badge">${C.titulo}</div>
      <a href="#mensaje" class="scroll-down" aria-label="Bajar"><span class="mouse"><i></i></span>${I.down}</a>
    </header>

    <section class="section text reveal" id="mensaje">
      <p class="lead">Hay etapas que terminan, pero momentos que permanecen para siempre.</p>
      ${divider}
      <p>Después de tantos días compartidos, aprendizajes, risas y experiencias, llegó el momento de cerrar una etapa y comenzar nuevos caminos.</p>
      <p>Nos quedan las personas que conocimos, las historias que construimos y los recuerdos que llevaremos siempre con nosotros.</p>
    </section>

    <section class="section invite reveal">
      <div class="invite-card">
        <p class="invite-text">Tenemos el agrado de invitarlos al</p>
        <h2 class="invite-title">Acto de Egresados 2026</h2>
        ${divider}
        <div class="details">
          <div class="detail"><div class="ic">${I.calendar}</div><div><b>${E.diaSemana} ${E.fechaTexto}</b><small>Fecha</small></div></div>
          <div class="detail"><div class="ic">${I.clock}</div><div><b>${E.horaTexto}</b><small>Hora</small></div></div>
          <div class="detail"><div class="ic">${I.pin}</div><div><b>${E.lugar}</b><small>${E.direccion}</small></div></div>
        </div>
        <div class="actions">
          <a class="btn btn-gold" href="${calURL}" target="_blank" rel="noopener">${I.calPlus} Agendar fecha</a>
          <a class="btn btn-outline" href="${mapURL}" target="_blank" rel="noopener">${I.map} Cómo llegar</a>
        </div>
      </div>
    </section>

    <section class="section countdown reveal">
      <p class="label">Faltan</p>
      <div class="cd" id="cd">
        <div><b id="cdD">0</b><span>días</span></div>
        <div><b id="cdH">0</b><span>horas</span></div>
        <div><b id="cdM">0</b><span>min</span></div>
        <div><b id="cdS">0</b><span>seg</span></div>
      </div>
    </section>

    <section class="section photo reveal">
      <h2 class="section-title">Nuestro curso</h2>
      <p class="script small">${C.titulo}</p>
      <figure class="photo-frame" id="photoFrame">
        <img src="${C.foto}" alt="Foto del curso ${C.titulo}">
        <figcaption>${I.zoom} Tocá la foto para verla en grande</figcaption>
      </figure>
    </section>

    <section class="section names reveal"><div class="names-card">
      <h2 class="section-title">Egresados ${C.titulo}</h2>
      ${divider}
      <ol class="names-list">${nombres}</ol>
    </div></section>

    <section class="section closing reveal">
      <p class="quote">“${C.frase}”</p>
      <p>Los esperamos para compartir juntos este momento tan especial.</p>
      <div class="cap-ic">${I.cap}</div>
      <p class="script">¡Felicitaciones, Promoción 2026!</p>
      ${logoHTML()}
    </section>

    <footer class="foot">
      <button class="btn btn-outline small" onclick="window.print()">${I.print} Imprimir versión A4</button>
      <p>${E.colegio} ${E.nombre} · ${E.localidad}</p>
    </footer>

    <button class="music" id="musicBtn" aria-label="Pausar o reproducir música" title="Música">
      <span class="ico-off">${I.mute}</span>
      <span class="bars"><i></i><i></i><i></i></span>
    </button>

    <div class="lightbox" id="lightbox"><img src="${C.foto}" alt=""><span class="lb-close">${I.close}</span></div>
    <audio id="song" src="${E.cancion}" loop preload="auto"></audio>
  </div>

  <!-- ================= VERSIÓN IMPRIMIBLE (A4 apaisada, doblada al medio) ================= -->
  <div class="print-sheet">
    <div class="half p-invite">
      <div class="p-border">
        ${logoHTML("p-logo")}
        <p class="p-school">${E.colegio}</p>
        <p class="p-school-name">${E.nombre}</p>
        <p class="p-script">Egresados</p>
        <p class="p-promo">PROMOCIÓN 2026 · ${C.titulo}</p>
        ${divider}
        <p class="p-lead">Hay etapas que terminan, pero momentos que permanecen para siempre.</p>
        <p>Después de tantos días compartidos, aprendizajes, risas y experiencias, llegó el momento de cerrar una etapa y comenzar nuevos caminos.</p>
        <p>Nos quedan las personas que conocimos, las historias que construimos y los recuerdos que llevaremos siempre con nosotros.</p>
        <p class="p-invite-text">Tenemos el agrado de invitarlos al</p>
        <p class="p-title">Acto de Egresados 2026</p>
        <div class="p-details">
          <div><b>${E.diaSemana}</b><span>11 de diciembre<br>de 2026</span></div>
          <div class="sep"></div>
          <div><b>Hora</b><span>18:30<br>horas</span></div>
          <div class="sep"></div>
          <div><b>Lugar</b><span>Nuestra institución<br>${E.direccion}</span></div>
        </div>
        <p>Los esperamos para compartir juntos este momento tan especial.</p>
        <p class="p-script small">¡Felicitaciones, Promoción 2026!</p>
      </div>
    </div>
    <div class="fold"></div>
    <div class="half p-list">
      <div class="p-border">
        <p class="p-promo top">EGRESADOS ${C.titulo}</p>
        <p class="p-sub">Promoción 2026 · ${E.nombre}</p>
        <div class="p-photo"><img src="${C.foto}" alt="" style="object-position:${C.fotoPos}"></div>
        <ol class="p-names">${nombres}</ol>
        <p class="p-quote">“${C.frase}”</p>
      </div>
    </div>
  </div>`;

  // ---------- Intro / música ----------
  const song = document.getElementById("song");
  const musicBtn = document.getElementById("musicBtn");
  const intro = document.getElementById("intro");
  let hasSong = true;
  song.addEventListener("error", () => { hasSong = false; musicBtn.style.display = "none"; });

  function setState() { musicBtn.classList.toggle("playing", !song.paused); }
  song.addEventListener("play", setState);
  song.addEventListener("pause", setState);

  document.getElementById("openBtn").addEventListener("click", () => {
    intro.classList.add("hide");
    document.body.classList.add("opened");
    if (hasSong) { song.volume = 0.7; song.play().catch(() => {}); }
    burst();
  });
  if (/static/.test(location.search)) document.body.classList.add("static");
  if (/abierta|static/.test(location.search)) { intro.classList.add("hide"); document.body.classList.add("opened"); }
  musicBtn.addEventListener("click", () => {
    if (song.paused) song.play().catch(() => {}); else song.pause();
  });
  // Si salís de la página / cambiás de pestaña / minimizás: se detiene y NO se reanuda sola.
  document.addEventListener("visibilitychange", () => { if (document.hidden) song.pause(); });
  window.addEventListener("pagehide", () => { song.pause(); song.currentTime = 0; });
  window.addEventListener("blur", () => song.pause());
  window.addEventListener("beforeprint", () => song.pause());

  // ---------- Foto ampliada ----------
  const lb = document.getElementById("lightbox");
  document.getElementById("photoFrame").addEventListener("click", () => lb.classList.add("show"));
  lb.addEventListener("click", () => lb.classList.remove("show"));

  // ---------- Cuenta regresiva ----------
  const target = new Date(E.fechaISO).getTime();
  const $ = id => document.getElementById(id);
  function tick() {
    let d = Math.max(0, target - Date.now());
    if (d === 0) { $("cd").innerHTML = "<p class='today'>¡Llegó el gran día!</p>"; return; }
    const s = Math.floor(d / 1000);
    $("cdD").textContent = Math.floor(s / 86400);
    $("cdH").textContent = String(Math.floor(s % 86400 / 3600)).padStart(2, "0");
    $("cdM").textContent = String(Math.floor(s % 3600 / 60)).padStart(2, "0");
    $("cdS").textContent = String(s % 60).padStart(2, "0");
    setTimeout(tick, 1000);
  }
  tick();

  // ---------- Animación al hacer scroll ----------
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  // ---------- Destellos ----------
  const sp = document.getElementById("sparkles");
  for (let i = 0; i < 28; i++) {
    const s = document.createElement("i");
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDelay = (Math.random() * 4) + "s";
    s.style.transform = "scale(" + (0.4 + Math.random()) + ")";
    sp.appendChild(s);
  }
  function burst() {
    const colors = ["var(--gold)", "#fff", "var(--accent-light)"];
    for (let i = 0; i < 60; i++) {
      const c = document.createElement("span");
      c.className = "confetti";
      c.style.left = Math.random() * 100 + "vw";
      c.style.background = colors[i % 3];
      c.style.animationDuration = (2.5 + Math.random() * 2.5) + "s";
      c.style.animationDelay = (Math.random() * 0.8) + "s";
      c.style.transform = "rotate(" + Math.random() * 360 + "deg)";
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 6000);
    }
  }
})();
