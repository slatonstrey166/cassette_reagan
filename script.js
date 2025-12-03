// ===== 1. ALBUM DATA (your 60 albums) =====

const albumData = [
  { artist: "Dr. Dre", album: "The Chronic", genre: "Hip Hop", column: 1, row: 1, spotifyUrl: "https://open.spotify.com/album/2V5rhszUpCudPcb01zevOt" },
  { artist: "2 Live Crew", album: "Banned in the U.S.A.", genre: "Hip Hop", column: 1, row: 2, spotifyUrl: "https://open.spotify.com/album/1dBZatLGpRYvGesXn9JXcY" },
  { artist: "Too Short", album: "Life Is...Too Short", genre: "Hip Hop", column: 1, row: 3, spotifyUrl: "https://open.spotify.com/album/3vuQ0qc1DF5jJ4mz5Thm5J" },
  { artist: "Rob Base & DJ E-Z Rock", album: "It Takes Two", genre: "Hip Hop", column: 1, row: 4, spotifyUrl: "https://open.spotify.com/album/5tocCryeqWvFXn65seo0p6" },
  { artist: "House of Pain", album: "House of Pain", genre: "Hip Hop", column: 1, row: 5, spotifyUrl: "https://open.spotify.com/album/0hWY4eSi2bZ8tWplgjO0ph" },
  { artist: "Ice Cube", album: "The Predator", genre: "Hip Hop", column: 1, row: 6, spotifyUrl: "https://open.spotify.com/album/71HM1CMYWeZzws8pyEn46" },
  { artist: "M.C. Hammer", album: "Please Hammer Don’t Hurt ’Em", genre: "Hip Hop", column: 1, row: 7, spotifyUrl: "https://open.spotify.com/album/4r1WecJyt5FOhglysp9zhN" },
  { artist: "Beastie Boys", album: "Licensed to Ill", genre: "Hip Hop", column: 1, row: 8, spotifyUrl: "https://open.spotify.com/album/11oR0ZuqB3ucZwb5TGbZxb" },
  { artist: "N.W.A", album: "Straight Outta Compton", genre: "Hip Hop", column: 1, row: 9, spotifyUrl: "https://open.spotify.com/album/0Y7qkJVZ06tS2GUCDptzyW" },
  { artist: "Vanilla Ice", album: "To the Extreme", genre: "Hip Hop", column: 1, row: 10, spotifyUrl: "https://open.spotify.com/album/1LHacvoBTd7o2d7wwQ9EZD" },
  { artist: "Run-D.M.C.", album: "Raising Hell", genre: "Hip Hop", column: 1, row: 11, spotifyUrl: "https://open.spotify.com/album/7AFsTiojVaB2I58oZ1tMRg" },
  { artist: "LL Cool J", album: "Mama Said Knock You Out", genre: "Hip Hop", column: 1, row: 12, spotifyUrl: "https://open.spotify.com/album/7p7kcsrdoJ8DKQIMouujcb" },

  { artist: "The Police", album: "Every Breath You Take – The Singles", genre: "Pop / Rock", column: 2, row: 1, spotifyUrl: "https://open.spotify.com/album/3s9o7LSofJfIZafUgkDe9O" },
  { artist: "Quiet Riot", album: "Metal Health", genre: "Pop / Rock", column: 2, row: 2, spotifyUrl: "https://open.spotify.com/album/3Q3rQ8FK1e9Fd9Gv9xm3CK" },
  { artist: "Depeche Mode", album: "People Are People", genre: "Pop / Rock", column: 2, row: 3, spotifyUrl: "https://open.spotify.com/album/3zA1d01hWRRchi5sGcb3VR" },
  { artist: "Peter Gabriel", album: "So", genre: "Pop / Rock", column: 2, row: 4, spotifyUrl: "https://open.spotify.com/album/1vJ8rCzq6BJtKGz9Yf6oT3" },
  { artist: "Sting", album: "…Nothing Like the Sun", genre: "Pop / Rock", column: 2, row: 5, spotifyUrl: "https://open.spotify.com/album/3W3E9HCTFOcWAavPNfGMJ8" },
  { artist: "George Michael", album: "Faith", genre: "Pop / Rock", column: 2, row: 6, spotifyUrl: "https://open.spotify.com/album/34K1Kvskt9arWy8E1Gz3Lw" },
  { artist: "Dire Straits", album: "Brothers in Arms", genre: "Pop / Rock", column: 2, row: 7, spotifyUrl: "https://open.spotify.com/album/7jvcSnCnugLcisBCNBm60s" },
  { artist: "Tears for Fears", album: "Songs from the Big Chair", genre: "Pop / Rock", column: 2, row: 8, spotifyUrl: "https://open.spotify.com/album/7y7459SFZReE5Wec4hejv5" },
  { artist: "Duran Duran", album: "Rio", genre: "Pop / Rock", column: 2, row: 9, spotifyUrl: "https://open.spotify.com/album/0PqCkTvKFJxzr9uujq7a3T" },
  { artist: "Phil Collins", album: "No Jacket Required", genre: "Pop / Rock", column: 2, row: 10, spotifyUrl: "https://open.spotify.com/album/1rVhockt4RAiZFaK3M3zPB" },
  { artist: "Prince", album: "1999", genre: "Pop / Rock", column: 2, row: 11, spotifyUrl: "https://open.spotify.com/album/2umoqwMrmjBBPeaqgYu6J9" },
  { artist: "INXS", album: "Kick", genre: "Pop / Rock", column: 2, row: 12, spotifyUrl: "https://open.spotify.com/album/7cuwWzS0oiApEt2fpKafkX" },

  { artist: "Footloose", album: "Original Motion Picture Soundtrack", genre: "Rock", column: 3, row: 1, spotifyUrl: "https://open.spotify.com/album/3Tx8adY1323eMrMuvPILpl" },
  { artist: "Lionel Richie", album: "Can’t Slow Down", genre: "Rock", column: 3, row: 2, spotifyUrl: "https://open.spotify.com/album/609oTPBaxPzZUCHzQikOtC" },
  { artist: "Huey Lewis and the News", album: "Fore!", genre: "Rock", column: 3, row: 3, spotifyUrl: "https://open.spotify.com/album/5L0vaNLbzgP8RIJqs1zamE" },
  { artist: "Van Morrison", album: "Moondance", genre: "Rock", column: 3, row: 4, spotifyUrl: "https://open.spotify.com/album/5PfnCqRbdfIDMb1x3MPQam" },
  { artist: "U2", album: "The Joshua Tree", genre: "Rock", column: 3, row: 5, spotifyUrl: "https://open.spotify.com/album/5vBZRYu2GLA65nfxBvG1a7" },
  { artist: "Janet Jackson", album: "Rhythm Nation 1814", genre: "Rock", column: 3, row: 6, spotifyUrl: "https://open.spotify.com/album/4OD3LU6001esAtFshDX46M" },
  { artist: "Journey", album: "Frontiers", genre: "Rock", column: 3, row: 7, spotifyUrl: "https://open.spotify.com/album/1Gtf2hZQlOGVER16uemmzR" },
  { artist: "Bruce Springsteen", album: "Born in the U.S.A.", genre: "Rock", column: 3, row: 8, spotifyUrl: "https://open.spotify.com/album/0PMasrHdpaoIRuHuhHp72O" },
  { artist: "Michael Jackson", album: "Thriller", genre: "Rock", column: 3, row: 9, spotifyUrl: "https://open.spotify.com/album/2ANVost0y2y52ema1E9xAZ" },
  { artist: "Madonna", album: "Like a Virgin", genre: "Rock", column: 3, row: 10, spotifyUrl: "https://open.spotify.com/album/2IU9ftOgyRL2caQGWK1jjX" },
  { artist: "Cyndi Lauper", album: "She’s So Unusual", genre: "Rock", column: 3, row: 11, spotifyUrl: "https://open.spotify.com/album/1FvdZ1oizXwF9bxogujoF0" },
  { artist: "Chicago", album: "Greatest Hits 1982–1989", genre: "Rock", column: 3, row: 12, spotifyUrl: "https://open.spotify.com/playlist/0SiVNDqfmWetpRX1N1yCmQ" },

  { artist: "Metallica", album: "Metallica", genre: "Heavy Metal", column: 4, row: 1, spotifyUrl: "https://open.spotify.com/album/55fq75UfkYbGMq4CncCtOH" },
  { artist: "Mötley Crüe", album: "Girls, Girls, Girls", genre: "Heavy Metal", column: 4, row: 2, spotifyUrl: "https://open.spotify.com/album/0vPZhR1KpbRNBOQBsDScS8" },
  { artist: "Van Halen", album: "1984", genre: "Heavy Metal", column: 4, row: 3, spotifyUrl: "https://open.spotify.com/album/3REUXdj5OPKhuDTrTtCBU0" },
  { artist: "Nirvana", album: "Nevermind", genre: "Heavy Metal", column: 4, row: 4, spotifyUrl: "https://open.spotify.com/album/2guirTSEqLizK7j9i1MTTZ" },
  { artist: "The Black Crowes", album: "Shake Your Money Maker", genre: "Heavy Metal", column: 4, row: 5, spotifyUrl: "https://open.spotify.com/album/2NRRQLuW6j3EsoWpIl2MR3" },
  { artist: "Tom Petty", album: "Full Moon Fever", genre: "Heavy Metal", column: 4, row: 6, spotifyUrl: "https://open.spotify.com/album/5d71Imt5CIb7LpQwDMQ093" },
  { artist: "Pearl Jam", album: "Ten", genre: "Heavy Metal", column: 4, row: 7, spotifyUrl: "https://open.spotify.com/album/5B4PYA7wNN4WdEXdIJu58a" },
  { artist: "Guns N’ Roses", album: "Appetite for Destruction", genre: "Heavy Metal", column: 4, row: 8, spotifyUrl: "https://open.spotify.com/album/28yHV3Gdg30AiB8h8em1eW" },
  { artist: "Def Leppard", album: "Hysteria", genre: "Heavy Metal", column: 4, row: 9, spotifyUrl: "https://open.spotify.com/album/1ja2qzCrh6bZykcojbZs82" },
  { artist: "AC/DC", album: "Back in Black", genre: "Heavy Metal", column: 4, row: 10, spotifyUrl: "https://open.spotify.com/album/6mUdeDZCsExyJLMdAfDuwh" },
  { artist: "Bon Jovi", album: "Slippery When Wet", genre: "Heavy Metal", column: 4, row: 11, spotifyUrl: "https://open.spotify.com/album/0kBfgEilUFCMIQY5IOjG4t" },
  { artist: "Aerosmith", album: "Greatest Hits", genre: "Heavy Metal", column: 4, row: 12, spotifyUrl: "https://open.spotify.com/album/5Z3bU10WcD9JOt98mui7DC" },

  { artist: "Waylon Jennings", album: "Greatest Hits", genre: "Country", column: 5, row: 1, spotifyUrl: "https://open.spotify.com/album/5Fx4B1UYRtbc3sbhca9OZo" },
  { artist: "David Allan Coe", album: "Greatest Hits", genre: "Country", column: 5, row: 2, spotifyUrl: "https://open.spotify.com/album/0VYmJzCaXoph0JfVXGNNos" },
  { artist: "Alan Jackson", album: "A Lot About Livin’ (And a Little ’Bout Love)", genre: "Country", column: 5, row: 3, spotifyUrl: "https://open.spotify.com/album/79yCfWigSGt94zi1CIkkJZ" },
  { artist: "Kenny Rogers", album: "Greatest Hits", genre: "Country", column: 5, row: 4, spotifyUrl: "https://open.spotify.com/album/5Cum33m0MK39JjWvbGO8bQ" },
  { artist: "Don Williams", album: "20 Greatest Hits", genre: "Country", column: 5, row: 5, spotifyUrl: "https://open.spotify.com/album/1EoBcNqFMobg6Wrzskv6G9" },
  { artist: "Alabama", album: "Alabama Live", genre: "Country", column: 5, row: 6, spotifyUrl: "https://open.spotify.com/album/4P3SBjcE4PLO8ArJ17sXoh" },
  { artist: "Willie Nelson", album: "Greatest Hits (And Some That Will Be)", genre: "Country", column: 5, row: 7, spotifyUrl: "https://open.spotify.com/album/7oRkZF4ysrOnGThgSiUtUC" },
  { artist: "Robert Earl Keen", album: "A Bigger Piece of Sky", genre: "Country", column: 5, row: 8, spotifyUrl: "https://open.spotify.com/album/7icbWmyzOlrSf9VkBCXCbz" },
  { artist: "Jerry Jeff Walker", album: "¡Viva Terlingua!", genre: "Country", column: 5, row: 9, spotifyUrl: "https://open.spotify.com/album/526pp31N1ObvGLB4ktvmCX" },
  { artist: "George Strait", album: "Greatest Hits Volume Two", genre: "Country", column: 5, row: 10, spotifyUrl: "https://open.spotify.com/album/2ZN1GwIaBhc9exRqKI0gad" },
  { artist: "Garth Brooks", album: "In Pieces", genre: "Country", column: 5, row: 11, spotifyUrl: "https://youtu.be/dQw4w9WgXcQ?si=RgNmyrsWH8hAl49q" },
  { artist: "The Allman Brothers Band", album: "A Decade of Hits 1969-1979", genre: "Country", column: 5, row: 12, spotifyUrl: "https://open.spotify.com/album/4HKQRECxozbRjqfNU0h0VX" },
];

// ===== 2. BUILD GENRE STRUCTURE FROM DATA =====

const columnKey = {
  1: "hiphop",
  2: "poprock",
  3: "rock",
  4: "metal",
  5: "country",
};

const genreNames = {
  hiphop: "Hip Hop",
  poprock: "Pop / Rock",
  rock: "Rock",
  metal: "Heavy Metal",
  country: "Country",
};

function buildGenres() {
  const groups = {};

  albumData.forEach((a) => {
    const key = columnKey[a.column];
    if (!key) return;
    if (!groups[key]) groups[key] = [];
    groups[key].push(a);
  });

  const result = Object.keys(groups).map((key) => {
    const albums = groups[key]
      .sort((a, b) => a.row - b.row)
      .map((a) => ({
        artist: a.artist,
        album: a.album,
        title: `${a.artist} – ${a.album}`,
        row: a.row,
        image: `${key}-${String(a.row).padStart(2, "0")}.png`,
        faceImage: `${key}-${String(a.row).padStart(2, "0")}-face.png`,
        spotifyUrl: a.spotifyUrl,
      }));

    const column = Number(
      Object.keys(columnKey).find((c) => columnKey[c] === key)
    );

    return {
      id: key,
      name: genreNames[key],
      column,
      albums,
    };
  });

  // keep columns in rack order 1..5
  result.sort((a, b) => a.column - b.column);
  return result;
}

const genres = buildGenres();

// ===== 3. STATE + ELEMENT REFERENCES =====

let currentView = "home"; // "home" | "genre" | "album"
let activeGenreIndex = 0;
let activeAlbumIndex = 0;

const appEl = document.getElementById("app");

// views
const homeViewEl = document.getElementById("home-view");
const genreViewEl = document.getElementById("genre-view");
const albumViewEl = document.getElementById("album-view");

// shelves
const homeShelfEl = document.getElementById("home-shelf");
const genreShelfEl = document.getElementById("genre-shelf");
const albumStripEl = document.getElementById("album-strip");

// Overlay elements for cassette animation
const pulloutOverlayEl = document.getElementById("cassette-flip-overlay");
const pulloutImgEl     = document.getElementById("cassette-flip-img");

// nav buttons
const homeGenreButtons = Array.from(
  document.querySelectorAll(".home-genre-btn")
);
const genrePrevBtn = document.getElementById("genre-prev");
const genreNextBtn = document.getElementById("genre-next");
const genreBackBtn = document.getElementById("genre-back");

const albumPrevBtn = document.getElementById("album-prev");
const albumNextBtn = document.getElementById("album-next");
const albumBackBtn = document.getElementById("album-back");
const albumPlayBtn = document.getElementById("album-play");

// ===== 4. VIEW SWITCHING =====

function setView(view) {
  currentView = view;
  appEl.classList.remove("view-home", "view-genre", "view-album");
  appEl.classList.add(`view-${view}`);

  if (view === "home") {
    renderHomeShelf();
  } else if (view === "genre") {
    renderGenreShelf();
  } else if (view === "album") {
    renderAlbumView();
  }

  updateNavButtons();
}

function updateNavButtons() {
  if (currentView === "genre") {
    genrePrevBtn.disabled = activeGenreIndex === 0;
    genreNextBtn.disabled = activeGenreIndex === genres.length - 1;
  }

  if (currentView === "album") {
    const albums = genres[activeGenreIndex].albums;
    albumPrevBtn.disabled = activeAlbumIndex === 0;
    albumNextBtn.disabled = activeAlbumIndex === albums.length - 1;
  }
}

// ===== 5. HOME VIEW =====

function renderHomeShelf() {
  homeShelfEl.innerHTML = "";

  genres.forEach((genre, genreIndex) => {
    const col = document.createElement("div");
    col.className = "genre-column";
    col.dataset.genreId = genre.id;

    const header = document.createElement("div");
    header.className = "genre-header";

    const nameEl = document.createElement("div");
    nameEl.className = "genre-name";
    nameEl.textContent = genre.name;

    header.appendChild(nameEl);
    col.appendChild(header);

    const list = document.createElement("div");
    list.className = "album-list";

    genre.albums.forEach((album, albumIndex) => {
      const spine = document.createElement("div");
      spine.className = "album-spine";

      const img = document.createElement("img");
      img.src = album.image;
      img.alt = album.title;

      spine.appendChild(img);

      // From home: clicking a spine goes to Genre view
      // with that genre and that album pre-selected
      spine.addEventListener("click", (e) => {
        e.stopPropagation();
        activeGenreIndex = genreIndex;
        activeAlbumIndex = albumIndex;
        setView("genre");
      });

      list.appendChild(spine);
    });

    // clicking column itself (not spines) → Genre view, first album
    col.addEventListener("click", () => {
      activeGenreIndex = genreIndex;
      activeAlbumIndex = 0;
      setView("genre");
    });

    col.appendChild(list);
    homeShelfEl.appendChild(col);
  });
}

// ===== 6. GENRE VIEW =====

function updateGenreShelfOffset() {
  const columns = Array.from(genreShelfEl.querySelectorAll(".genre-column"));
  if (!columns.length) return;

  const activeCol = columns[activeGenreIndex];
  const shelfRect = genreShelfEl.getBoundingClientRect();
  const colRect = activeCol.getBoundingClientRect();

  const shelfCenter = shelfRect.width / 2;
  const activeCenter = colRect.left - shelfRect.left + colRect.width / 2;

  const delta = shelfCenter - activeCenter;
  genreShelfEl.style.setProperty("--shelf-offset", `${delta}px`);
}

function renderGenreShelf() {
  genreShelfEl.innerHTML = "";

  genres.forEach((genre, genreIndex) => {
    const col = document.createElement("div");
    col.className = "genre-column";
    col.dataset.genreId = genre.id;

    const header = document.createElement("div");
    header.className = "genre-header";

    const nameEl = document.createElement("div");
    nameEl.className = "genre-name";
    nameEl.textContent = genre.name;

    header.appendChild(nameEl);
    col.appendChild(header);

    const list = document.createElement("div");
    list.className = "album-list";

    genre.albums.forEach((album, albumIndex) => {
        const spine = document.createElement("div");
        spine.className = "album-spine";
        
        const img = document.createElement("img");
        img.src = album.image;
        img.alt = album.title;
        
        spine.appendChild(img);
        
        // Click on a spine inside Genre View
        spine.addEventListener("click", (e) => {
            e.stopPropagation();
            
            if (genreIndex === activeGenreIndex) {
                // Center column → run pull-out animation to Album View
                startPulloutAnimation(spine, genre, albumIndex);
            } else {
                activeGenreIndex = genreIndex;
                activeAlbumIndex = albumIndex;
                renderGenreShelf();
            }
        });

        list.appendChild(spine);
    });

    col.appendChild(list);
    genreShelfEl.appendChild(col);
  });

  updateGenreShelfOffset();
  updateNavButtons();
}

// ===== 6b. SIMPLE 2D SCALE-ONLY PULL-OUT ANIMATION =====

function startPulloutAnimation(spineEl, genre, albumIndex) {
  const album = genre.albums[albumIndex];
  if (!album) {
    setView("album");
    return;
  }

  // ---- Timing controls (ms) ----
  const SPINE_GROW_MS   = 1000;   // spine pull-out + grow
  const SPINE_SHRINK_MS = 1000;   // spine shrink (horizontal only)
  const FACE_GROW_MS    = 1000;   // face grow (vertical only)
  const FACE_FLY_MS     = 1000;   // face fly to Album View
  const FACE_GROW_SCALE = 7.5;  // how tall the face grows, in multiples of spine height

  // Overlay elements
  const overlay = pulloutOverlayEl; // #pullout-overlay
  const imgEl   = pulloutImgEl;     // #pullout-image

  // 1) Spine geometry in the viewport
  const rect = spineEl.getBoundingClientRect();

  // 2) Setup overlay image exactly on top of the spine (anchored at top-left)
  overlay.classList.remove("hidden");
  overlay.classList.add("active");
  overlay.style.display = "block";

  imgEl.style.transition = "none";
  imgEl.style.opacity = "1";

  // Lock width/height to the spine so width never changes
  imgEl.style.width  = `${rect.width}px`;
  imgEl.style.height = `${rect.height}px`;

  // Spine overlay starts exactly where the real spine is drawn
  imgEl.style.left = `${rect.left}px`;
  imgEl.style.top  = `${rect.top}px`;

  // Spine phase: anchor at TOP-LEFT so horizontal scale collapses from the left edge
  imgEl.style.transformOrigin = "0% 0%";

  // Start: no translate, full size
  imgEl.style.transform = "translateY(0) scale(1, 1)";
  imgEl.src = album.image; // spine image

  // Hide the real spine to leave a blank slot
  setTimeout(() => {
    spineEl.style.opacity = "0";
  }, 50);

  // ---- PHASE 1: Spine grow out slightly (anchored on the LEFT) ----
  requestAnimationFrame(() => {
    imgEl.style.transition =
      `transform ${SPINE_GROW_MS}ms ease-out`;

    // Move slightly up and grow a bit, still anchored top-left
    imgEl.style.transform = "translateY(-10px) scale(1.1, 1.1)";
  });

  // ---- PHASE 2: Spine shrink horizontally (anchored on the LEFT) ----
  setTimeout(() => {
    imgEl.style.transition =
      `transform ${SPINE_SHRINK_MS}ms ease-in`;

    // Collapse X to 0, keep Y at 1.1 → vertical strip pinned to the left edge
    imgEl.style.transform = "translateY(-10px) scale(0, 1.1)";
  }, SPINE_GROW_MS);

  // ---- PHASE 3: Face grow vertically only (same left/top as shrunken spine) ----
  setTimeout(() => {
    imgEl.style.transition = "none";
    imgEl.src = album.faceImage;

    // Face starts from the SAME left/top as the shrunken spine
    const faceLeft = rect.left;
    const faceTop  = rect.top - 10; // match the -10px upward offset

    imgEl.style.left = `${faceLeft}px`;
    imgEl.style.top  = `${faceTop}px`;

    // Anchor at TOP-LEFT so vertical growth is straight down from the left edge
    imgEl.style.transformOrigin = "0% 0%";

    // Key idea: we animate HEIGHT, not scaleX, so width never changes.
    // Start as 0px tall, full width.
    imgEl.style.width  = `${rect.width}px`;      // keep width fixed
    imgEl.style.height = `0px`;
    imgEl.style.transform = "translateY(0)";     // no scaling used for vertical

    const targetHeight = rect.height * FACE_GROW_SCALE;

    // Animate height only
    requestAnimationFrame(() => {
      imgEl.style.transition =
        `height ${FACE_GROW_MS}ms ease-out`;

      imgEl.style.height = `${targetHeight}px`;
    });
  }, SPINE_GROW_MS + SPINE_SHRINK_MS);

  // ---- PHASE 4: Face fly to Album View (keep same size) ----
  setTimeout(() => {
    // Try to align with the actual album image in Album View
    const albumImgEl = document.querySelector("#album-image img");
    let targetLeft, targetTop;

    if (albumImgEl) {
      const r = albumImgEl.getBoundingClientRect();
      // Because our overlay is anchored at top-left, align its top-left to the album image top-left
      targetLeft = r.left;
      targetTop  = r.top;
    } else {
      // Fallback: approximate center of viewport
      targetLeft = (window.innerWidth  - parseFloat(imgEl.style.width)) / 2;
      targetTop  = (window.innerHeight * 0.35);
    }

    imgEl.style.transition =
      `top ${FACE_FLY_MS}ms ease-out, left ${FACE_FLY_MS}ms ease-out`;

    imgEl.style.left = `${targetLeft}px`;
    imgEl.style.top  = `${targetTop}px`;
    // NOTE: we do NOT change width/height here, so size stays exactly as Phase 3
  }, SPINE_GROW_MS + SPINE_SHRINK_MS + FACE_GROW_MS);

  // ---- PHASE 5: Show Album View & fade overlay ----
  setTimeout(() => {
    // Switch to album view
    activeAlbumIndex = albumIndex;
    const genreIndex = genres.findIndex((g) => g.id === genre.id);
    if (genreIndex !== -1) {
      activeGenreIndex = genreIndex;
    }
    setView("album");

    // Fade out overlay
    imgEl.style.transition = "opacity 0.35s ease-out";
    imgEl.style.opacity = "0";

    setTimeout(() => {
      overlay.classList.remove("active");
      overlay.classList.add("hidden");
      overlay.style.display = "none";
      imgEl.style.opacity = "1";
      imgEl.style.transformOrigin = "50% 50%";
      spineEl.style.opacity = "1";
    }, 350);
  }, SPINE_GROW_MS + SPINE_SHRINK_MS + FACE_GROW_MS + FACE_FLY_MS);
}


// ===== 7. ALBUM VIEW =====

function updateAlbumOffset() {
  const cards = Array.from(albumStripEl.querySelectorAll(".album-card"));
  if (!cards.length) return;

  // Ensure activeAlbumIndex is always in range
  const maxIndex = cards.length - 1;
  activeAlbumIndex = Math.max(0, Math.min(activeAlbumIndex, maxIndex));

  // Mark the active card
  cards.forEach((card, i) => {
    card.classList.toggle("active", i === activeAlbumIndex);
  });

  // Get actual live geometry (THIS is what fixes iPhone)
  const stageEl = document.querySelector(".album-stage");
  const stageRect = stageEl.getBoundingClientRect();
  const stripRect = albumStripEl.getBoundingClientRect();
  const activeCard = cards[activeAlbumIndex];
  const cardRect = activeCard.getBoundingClientRect();

  // Real center of the stage
  const stageCenter = stageRect.width / 2;

  // Real center of the active card, relative to the strip
  const cardCenter =
    (cardRect.left - stripRect.left) + (cardRect.width / 2);

  // Offset needed to bring active card to center
  const delta = stageCenter - cardCenter;

  // Apply smoothly
  albumStripEl.style.setProperty("--album-offset", `${delta}px`);

  updateNavButtons();
}

function renderAlbumView() {
  const genre = genres[activeGenreIndex];
  const albums = genre.albums;

  albumStripEl.innerHTML = "";

  albums.forEach((album, index) => {
    const card = document.createElement("div");
    card.className = "album-card";
    if (index === activeAlbumIndex) card.classList.add("active");

    const img = document.createElement("img");
    img.src = album.faceImage;
    img.alt = album.title;

    // tap album image → open Spotify
    card.addEventListener("click", () => {
      activeAlbumIndex = index;
      updateAlbumOffset();
      playCurrentAlbum();
    });

    card.appendChild(img);
    albumStripEl.appendChild(card);
  });

  updateAlbumOffset();
}

// swipe between albums
(function setupAlbumSwipe() {
  const stage = document.querySelector(".album-stage");
  let startX = 0;

  stage.addEventListener(
    "touchstart",
    (e) => {
      startX = e.changedTouches[0].clientX;
    },
    { passive: true }
  );

  stage.addEventListener(
    "touchend",
    (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      const threshold = 30;
      if (Math.abs(dx) < threshold) return;

      const albums = genres[activeGenreIndex].albums;

      if (dx < 0 && activeAlbumIndex < albums.length - 1) {
        activeAlbumIndex++;
        updateAlbumOffset();
      } else if (dx > 0 && activeAlbumIndex > 0) {
        activeAlbumIndex--;
        updateAlbumOffset();
      }
    },
    { passive: true }
  );
})();

function playCurrentAlbum() {
  const album = genres[activeGenreIndex].albums[activeAlbumIndex];
  if (album && album.spotifyUrl) {
    window.open(album.spotifyUrl, "_blank");
  }
}

// ===== 8. NAV BUTTON WIRING =====

// Home genre buttons (footer)
homeGenreButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.genreId;
    const index = genres.findIndex((g) => g.id === id);
    if (index >= 0) {
      activeGenreIndex = index;
      activeAlbumIndex = 0;
      setView("genre");
    }
  });
});

// Genre nav
genrePrevBtn.addEventListener("click", () => {
  if (activeGenreIndex > 0) {
    activeGenreIndex--;
    renderGenreShelf();
  }
});

genreNextBtn.addEventListener("click", () => {
  if (activeGenreIndex < genres.length - 1) {
    activeGenreIndex++;
    renderGenreShelf();
  }
});

genreBackBtn.addEventListener("click", () => {
  setView("home");
});

// Album nav
albumPrevBtn.addEventListener("click", () => {
  const albums = genres[activeGenreIndex].albums;
  if (activeAlbumIndex > 0) {
    activeAlbumIndex--;
    updateAlbumOffset();
  }
});

albumNextBtn.addEventListener("click", () => {
  const albums = genres[activeGenreIndex].albums;
  if (activeAlbumIndex < albums.length - 1) {
    activeAlbumIndex++;
    updateAlbumOffset();
  }
});

albumBackBtn.addEventListener("click", () => {
  setView("genre");
});

albumPlayBtn.addEventListener("click", () => {
  playCurrentAlbum();
});

// ===== 9. INIT =====

renderHomeShelf();
setView("home");
