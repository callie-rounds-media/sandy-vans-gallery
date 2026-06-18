/* Sandy Vans · Campaign Delivery
   ─────────────────────────────────────────────────────────────
   TO GO LIVE, EDIT THE THREE LISTS BELOW.
   Drop real files into  photos/  and point each entry at them.
   Leave `src` empty ("") and a styled placeholder shows instead.
*/

const CONFIG = {
  // Paste the client's permanent Drive link here:
  driveUrl: "",
};

// ── Photos grouped by scene. Add a new { name, photos:[...] } block per scene. ──
const SCENES = [
  {
    name: "Scene One",
    photos: [
      "photos/scene-1/scene1-01.jpg",
      "photos/scene-1/scene1-02.jpg",
      "photos/scene-1/scene1-03.jpg",
      "photos/scene-1/scene1-04.jpg",
      "photos/scene-1/scene1-05.jpg",
      "photos/scene-1/scene1-06.jpg",
      "photos/scene-1/scene1-07.jpg",
      "photos/scene-1/scene1-08.jpg",
      "photos/scene-1/scene1-09.jpg",
      "photos/scene-1/scene1-10.jpg",
    ],
  },
  {
    name: "Scene Three",
    photos: [
      "photos/scene-3/scene3-01.jpg",
      "photos/scene-3/scene3-02.jpg",
      "photos/scene-3/scene3-03.jpg",
      "photos/scene-3/scene3-04.jpg",
      "photos/scene-3/scene3-05.jpg",
      "photos/scene-3/scene3-06.jpg",
      "photos/scene-3/scene3-07.jpg",
      "photos/scene-3/scene3-08.jpg",
      "photos/scene-3/scene3-09.jpg",
      "photos/scene-3/scene3-10.jpg",
      "photos/scene-3/scene3-11.jpg",
      "photos/scene-3/scene3-12.jpg",
      "photos/scene-3/scene3-13.jpg",
      "photos/scene-3/scene3-14.jpg",
      "photos/scene-3/scene3-15.jpg",
      "photos/scene-3/scene3-16.jpg",
      "photos/scene-3/scene3-17.jpg",
      "photos/scene-3/scene3-18.jpg",
      "photos/scene-3/scene3-19.jpg",
      "photos/scene-3/scene3-20.jpg",
      "photos/scene-3/scene3-21.jpg",
      "photos/scene-3/scene3-22.jpg",
      "photos/scene-3/scene3-23.jpg",
      "photos/scene-3/scene3-24.jpg",
      "photos/scene-3/scene3-25.jpg",
    ],
  },
  {
    name: "Scene Two",
    photos: [
      "photos/scene-2/scene2-01.jpg",
      "photos/scene-2/scene2-02.jpg",
      "photos/scene-2/scene2-03.jpg",
    ],
  },
];

// Flat list powers the lightbox; each tile maps to its index here.
const PHOTOS = SCENES.flatMap((s) =>
  s.photos.map((src) => ({ src, alt: `Sandy Vans — ${s.name}` }))
);

// Cover photo (change to any gallery shot you like):
const COVER_SRC = "photos/scene-1/scene1-01.jpg";

// ── Reels: 9:16 vertical. Only the text versions go here. ──
const REELS = [
  { src: "videos/reels/reel-1.mp4", poster: "videos/reels/poster-1.jpg" },
];

// ── Carousel: horizontal "moving still" clips, in post order. ──
const CAROUSEL = [
  { src: "videos/carousel/carousel-1.mp4", poster: "videos/carousel/poster-1.jpg", cap: "mountain morning" },
  { src: "videos/carousel/carousel-2.mp4", poster: "videos/carousel/poster-2.jpg", cap: "city night" },
  { src: "videos/carousel/carousel-3.mp4", poster: "videos/carousel/poster-3.jpg", cap: "golden hills" },
  { src: "videos/carousel/carousel-4.mp4", poster: "videos/carousel/poster-4.jpg", cap: "coffee + a view" },
  { src: "videos/carousel/carousel-5.mp4", poster: "videos/carousel/poster-5.jpg", cap: "soft daylight" },
  { src: "videos/carousel/carousel-6.mp4", poster: "videos/carousel/poster-6.jpg", cap: "hot air balloon" },
];

const GRADS = [
  "linear-gradient(160deg, #cdb892, #b29a74)",
  "linear-gradient(160deg, #c8a98a, #a8744f)",
  "linear-gradient(160deg, #b9bca0, #8a9670)",
  "linear-gradient(160deg, #d8c6a6, #bda079)",
  "linear-gradient(160deg, #c2b18c, #9c8a63)",
  "linear-gradient(160deg, #d3b79a, #b07b58)",
];

const apertureSVG = `<svg viewBox="0 0 24 24" width="30" height="30"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 3v6M21 12h-6M12 21v-6M3 12h6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" transform="rotate(45 12 12)"/></svg>`;
const playSVG = `<svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5l11 7-11 7V5z" fill="currentColor"/></svg>`;
const mutedSVG = `<svg viewBox="0 0 24 24" width="17" height="17"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 9l5 5M21 9l-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
const soundOnSVG = `<svg viewBox="0 0 24 24" width="17" height="17"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8 8 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;

/* ─── Cover photo ─── */
const coverMedia = document.getElementById("cover-media");
if (COVER_SRC) {
  coverMedia.style.backgroundImage = `url("${COVER_SRC}")`;
  coverMedia.classList.add("cover__media--photo");
}

/* ─── Gallery (one justified grid — rows fill edge to edge, no gaps) ─── */
const galleryGrid = document.getElementById("gallery-grid");
galleryGrid.className = "gallery";
const ROW_H = 260; // target row height; flex widths scale to each photo's aspect
PHOTOS.forEach((p, i) => {
  const tile = document.createElement("button");
  tile.className = "tile";
  tile.dataset.index = i;
  // sensible portrait default so the layout is stable before each image loads
  tile.style.flexGrow = "0.7";
  tile.style.flexBasis = ROW_H * 0.7 + "px";

  const img = document.createElement("img");
  img.className = "tile__img";
  img.loading = "lazy";
  img.alt = p.alt;
  img.src = p.src;
  const setFlex = () => {
    if (!img.naturalWidth || !img.naturalHeight) return;
    const ar = img.naturalWidth / img.naturalHeight;
    tile.style.flexGrow = ar.toFixed(4);
    tile.style.flexBasis = (ar * ROW_H).toFixed(1) + "px";
  };
  if (img.complete) setFlex();
  else img.addEventListener("load", setFlex);
  tile.appendChild(img);

  const ov = document.createElement("div");
  ov.className = "tile__overlay";
  ov.innerHTML = `<span class="tile__expand">Expand ⤢</span>`;
  tile.appendChild(ov);

  tile.addEventListener("click", () => openLightbox(i));
  galleryGrid.appendChild(tile);
});

/* ─── Reels ─── */
const reelsRow = document.getElementById("reels-row");
REELS.forEach((r) => {
  const reel = document.createElement("button");
  reel.className = "reel";
  reel.type = "button";
  reel.innerHTML = `
    <video class="reel__video" src="${r.src}" poster="${r.poster}" muted loop playsinline autoplay preload="metadata"></video>
    <div class="reel__grad"></div>
    <span class="reel__sound">${mutedSVG}</span>`;
  const video = reel.querySelector("video");
  const sound = reel.querySelector(".reel__sound");
  reel.addEventListener("click", () => {
    video.muted = !video.muted;
    sound.innerHTML = video.muted ? mutedSVG : soundOnSVG;
    if (!video.muted) video.play();
  });
  reelsRow.appendChild(reel);
});

/* ─── Carousel + live mixer ─── */
const track = document.getElementById("ig-track");
const dotsWrap = document.getElementById("ig-dots");
const countEl = document.getElementById("ig-count");
const prevBtn = document.getElementById("ig-prev");
const nextBtn = document.getElementById("ig-next");
const tray = document.getElementById("mixer-tray");
let cIndex = 0;
let selected = CAROUSEL.map((_, i) => i); // ordered indices currently in the post

function buildTrack() {
  track.innerHTML = "";
  dotsWrap.innerHTML = "";
  selected.forEach((ci) => {
    const c = CAROUSEL[ci];
    const slide = document.createElement("div");
    slide.className = "ig__slide";
    slide.innerHTML = `<video class="ig__video" src="${c.src}" poster="${c.poster}" muted loop playsinline autoplay preload="metadata"></video>
      <span class="ig__slide-cap">${c.cap}</span>`;
    track.appendChild(slide);
    const dot = document.createElement("span");
    dot.className = "ig__dot";
    dotsWrap.appendChild(dot);
  });
  if (cIndex >= selected.length) cIndex = Math.max(0, selected.length - 1);
  renderCarousel();
}

function renderCarousel() {
  track.style.transform = `translateX(-${cIndex * 100}%)`;
  countEl.textContent = `${cIndex + 1}/${selected.length}`;
  prevBtn.disabled = cIndex === 0;
  nextBtn.disabled = cIndex >= selected.length - 1;
  [...dotsWrap.children].forEach((d, i) => d.classList.toggle("ig__dot--on", i === cIndex));
}

prevBtn.addEventListener("click", () => { if (cIndex > 0) { cIndex--; renderCarousel(); } });
nextBtn.addEventListener("click", () => { if (cIndex < selected.length - 1) { cIndex++; renderCarousel(); } });

function buildTray() {
  tray.innerHTML = "";
  CAROUSEL.forEach((c, i) => {
    const on = selected.includes(i);
    const btn = document.createElement("button");
    btn.className = "chip" + (on ? " chip--on" : "");
    btn.innerHTML = `<img class="chip__thumb" src="${c.poster}" alt="${c.cap}" />
      <span class="chip__badge">${on ? "✓" : "+"}</span>
      <span class="chip__cap">${c.cap}</span>`;
    btn.addEventListener("click", () => toggleClip(i));
    tray.appendChild(btn);
  });
}

function toggleClip(i) {
  if (selected.includes(i)) {
    if (selected.length <= 2) return; // keep at least 2 clips in the post
    selected = selected.filter((x) => x !== i);
  } else {
    // re-insert keeping the original clip order
    selected = CAROUSEL.map((_, idx) => idx).filter((idx) => selected.includes(idx) || idx === i);
  }
  buildTray();
  buildTrack();
}

buildTray();
buildTrack();

/* ─── Lightbox ─── */
const lightbox = document.getElementById("lightbox");
const lbStage = document.getElementById("lb-stage");
const lbClose = document.getElementById("lb-close");
const lbPrev = document.getElementById("lb-prev");
const lbNext = document.getElementById("lb-next");
let lbIndex = 0;

function renderLightbox() {
  const p = PHOTOS[lbIndex];
  if (p.src) {
    lbStage.innerHTML = `<img src="${p.src}" alt="${p.alt}" />`;
  } else {
    lbStage.innerHTML = `<div class="lb-ph" style="background:${GRADS[lbIndex % GRADS.length]}">
      ${apertureSVG}<span class="tile__num">Photo ${String(lbIndex + 1).padStart(2, "0")} · full resolution</span></div>`;
  }
}
function openLightbox(i) { lbIndex = i; renderLightbox(); lightbox.hidden = false; document.body.style.overflow = "hidden"; }
function closeLightbox() { lightbox.hidden = true; document.body.style.overflow = ""; }
function stepLightbox(d) { lbIndex = (lbIndex + d + PHOTOS.length) % PHOTOS.length; renderLightbox(); }

lbClose.addEventListener("click", closeLightbox);
lbPrev.addEventListener("click", () => stepLightbox(-1));
lbNext.addEventListener("click", () => stepLightbox(1));
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") stepLightbox(-1);
  if (e.key === "ArrowRight") stepLightbox(1);
});

/* ─── Drive link ─── */
const driveLink = document.getElementById("drive-link");
const driveHint = document.getElementById("drive-hint");
const filesSection = document.getElementById("files");
const navCta = document.querySelector(".nav__cta");
if (CONFIG.driveUrl) {
  driveLink.href = CONFIG.driveUrl;
  driveHint.hidden = true;
} else {
  // No Drive link yet — hide the download elements so nothing dead shows publicly.
  if (filesSection) filesSection.hidden = true;
  if (navCta) navCta.style.display = "none";
}
