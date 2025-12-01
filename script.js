// ===== 1. ALBUM DATA =====
const albumData = [
  { artist: "Dr. Dre", album: "The Chronic", genre: "Hip Hop", column: 1, row: 1, spotifyUrl: "https://open.spotify.com/album/2V5rhszUpCudPcb01zevOt" },
  { artist: "2 Live Crew", album: "Banned in the U.S.A.", genre: "Hip Hop", column: 1, row: 2, spotifyUrl: "https://open.spotify.com/album/1dBZatLGpRYvGesXn9JXcY" },
  { artist: "Too Short", album: "Life Is...Too Short", genre: "Hip Hop", column: 1, row: 3, spotifyUrl: "https://open.spotify.com/album/3vuQ0qc1DF5jJ4mz5Thm5J" },
  { artist: "Rob Base & DJ E-Z Rock", album: "It Takes Two", genre: "Hip Hop", column: 1, row: 4, spotifyUrl: "https://open.spotify.com/album/5tocCryeqWvFXn65seo0p6" },
  { artist: "House of Pain", album: "House of Pain", genre: "Hip Hop", column: 1, row: 5, spotifyUrl: "https://open.spotify.com/album/0hWY4eSi2bZ8tWplgjO0ph" },
  { artist: "Ice Cube", album: "The Predator", genre: "Hip Hop", column: 1, row: 6, spotifyUrl: "https://open.spotify.com/album/71HM1CMYWeZzws8pyiEn46" },
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
  { artist: "Sting", album: "Fields of Gold: The Best of Sting 1984–1994", genre: "Pop / Rock", column: 2, row: 5, spotifyUrl: "https://open.spotify.com/album/3W3E9HCTFOcWAavPNfGMJ8" },
  { artist: "George Michael", album: "Faith", genre: "Pop / Rock", column: 2, row: 6, spotifyUrl: "https://open.spotify.com/album/34K1Kvskt9arWy8E1Gz3Lw" },
  { artist: "Dire Straits", album: "Brothers in Arms", genre: "Pop / Rock", column: 2, row: 7, spotifyUrl: "https://open.spotify.com/album/7jvcSnCnugLcisBCNBm60s" },
  { artist: "Tears for Fears", album: "Songs from the Big Chair", genre: "Pop / Rock", column: 2, row: 8, spotifyUrl: "https://open.spotify.com/album/7y7459SFZReE5Wec4hejv5" },
  { artist: "Duran Duran", album: "Duran Duran (The Wedding Album)", genre: "Pop / Rock", column: 2, row: 9, spotifyUrl: "https://open.spotify.com/album/0PqCkTvKFJxzr9uujq7a3T" },
  { artist: "Phil Collins", album: "No Jacket Required", genre: "Pop / Rock", column: 2, row: 10, spotifyUrl: "https://open.spotify.com/album/1rVhockt4RAiZFaK3M3zPB" },
  { artist: "Prince", album: "Purple Rain", genre: "Pop / Rock", column: 2, row: 11, spotifyUrl: "https://open.spotify.com/album/2umoqwMrmjBBPeaqgYu6J9" },
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

// ===== 1b. BUILD GENRE STRUCTURE =====

const columnKey = { 1: "hiphop", 2: "poprock", 3: "rock", 4: "metal", 5: "country" };

const genreNames = {
  hiphop: "Hip Hop",
  poprock: "Pop / Rock",
  rock: "Rock",
  metal: "Heavy Metal",
  country: "Country",
};

function buildGenresFromData() {
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
        title: `${a.artist} – ${a.album}`,
        image: `${key}-${String(a.row).padStart(2, "0")}.png`,
        faceImage: `${key}-${String(a.row).padStart(2, "0")}-face.png`,
        spotifyUrl: a.spotifyUrl,
      }));

    return {
      id: key,
      name: genreNames[key],
      albums,
      column: Number(Object.keys(columnKey).find((c) => columnKey[c] === key)),
    };
  });

  result.sort((a, b) => a.column - b.column);
  return result;
}

const genres = buildGenresFromData();

// ===== 2. STATE + ELEMENTS =====

const appEl = document.getElementById("app");

const homeViewEl = document.getElementById("home-view");
const homeShelfEl = document.getElementById("home-shelf");

const genreViewEl = document.getElementById("genre-view");
const genreShelfEl = document.getElementById("genre-shelf");

const albumViewEl = document.getElementById("album-view");
const albumStripEl = document.getElementById("album-strip");

const pulloutOverlayEl = document.getElementById("pullout-overlay");
const pulloutImgEl = document.getElementById("pullout-image");

let currentView = "home"; // "home" | "genre" | "album"
let activeGenreIndex = 0;
let activeAlbumIndex = 0;

// ===== 3. VIEW SWITCHING =====

function setView(view) {
  currentView = view;
  appEl.classList.remove("view-home", "view-genre", "view-album");
  appEl.classList.add(`view-${view}`);

  homeViewEl.classList.toggle("hidden", view !== "home");
  genreViewEl.classList.toggle("hidden", view !== "genre");
  albumViewEl.classList.toggle("hidden", view !== "album");

  if (view === "home") {
    renderHomeShelf();
  } else if (view === "genre") {
    renderGenreShelf();
  } else if (view === "album") {
    renderAlbumStrip();
  }

  updateNavButtons();
}

function updateNavButtons() {
  const genrePrevBtn = document.getElementById("genre-prev");
  const genreNextBtn = document.getElementById("genre-next");
  if (genrePrevBtn && genreNextBtn) {
    genrePrevBtn.disabled = activeGenreIndex === 0;
    genreNextBtn.disabled = activeGenreIndex === genres.length - 1;
  }

  const albumPrevBtn = document.getElementById("album-prev");
  const albumNextBtn = document.getElementById("album-next");
  if (albumPrevBtn && albumNextBtn && currentView === "album") {
    const albums = genres[activeGenreIndex].albums;
    albumPrevBtn.disabled = activeAlbumIndex === 0;
    albumNextBtn.disabled = activeAlbumIndex === albums.length - 1;
  }
}

// ===== 4. HOME VIEW (wall) =====

function renderHomeShelf() {
  homeShelfEl.innerHTML = "";
  homeShelfEl.style.setProperty("--shelf-offset", "0px");

  genres.forEach((genre, index) => {
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

      // From Home: clicking a spine takes you to the Genre view, with that album selected
      spine.addEventListener("click", (e) => {
        e.stopPropagation();
        activeAlbumIndex = albumIndex;
        goToGenre(index);
      });

      list.appendChild(spine);
    });

    // Clicking anywhere in the column title/area (except spine clicks)
    // should go to Genre view with first album selected
    col.addEventListener("click", () => {
      activeAlbumIndex = 0;
      goToGenre(index);
    });

    col.appendChild(list);
    homeShelfEl.appendChild(col);
  });
}

// ===== 5. GENRE VIEW (zoomed column) =====

function updateGenreShelfOffset() {
  const columns = Array.from(genreShelfEl.querySelectorAll(".genre-column"));
  if (!columns.length) return;

  const activeCol = columns[activeGenreIndex];
  const shelfRect = genreShelfEl.getBoundingClientRect();
  const activeRect = activeCol.getBoundingClientRect();

  const shelfCenter = shelfRect.width / 2;
  const activeCenter = activeRect.left - shelfRect.left + activeRect.width / 2;

  const delta = shelfCenter - activeCenter;
  genreShelfEl.style.setProperty("--shelf-offset", `${delta}px`);
}

function renderGenreShelf() {
  genreShelfEl.innerHTML = "";

  genres.forEach((genre, index) => {
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

  spine.addEventListener("click", () => {
    if (index === activeGenreIndex) {
      // Clicked in the currently focused column → pull out & go to Album View
      activeAlbumIndex = albumIndex;
      startPulloutAnimation(spine, genre, albumIndex);
    } else {
      // Clicked in a neighbor column → recenter on that genre (no Album View yet)
      activeGenreIndex = index;
      activeAlbumIndex = albumIndex; // optional: remember which row they tapped
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

function goToGenre(genreIndex) {
  activeGenreIndex = genreIndex;
  setView("genre");
}

// ===== 5b. PULLOUT ANIMATION =====

function startPulloutAnimation(spineEl, genre, albumIndex) {
  const album = genre.albums[albumIndex];
  if (!album) {
    setView("album");
    return;
  }

  // 1) Get spine rect and main content rect
  const rect = spineEl.getBoundingClientRect();
  const mainRect = document.querySelector(".app-main").getBoundingClientRect();

  // 2) Prepare overlay image starting exactly over the spine
  pulloutOverlayEl.classList.remove("hidden");
  pulloutImgEl.src = album.image; // spine art; could be album.faceImage instead

  pulloutImgEl.style.left = `${rect.left}px`;
  pulloutImgEl.style.top = `${rect.top}px`;
  pulloutImgEl.style.width = `${rect.width}px`;
  pulloutImgEl.style.height = `${rect.height}px`;
  pulloutImgEl.style.opacity = "1";

  // Start aligned with the spine
  pulloutImgEl.style.transform = "translate3d(0, 0, 0) scale(1)";

  // Leave a blank slot in the rack
  spineEl.style.opacity = "0";

  // Force reflow so the browser applies the initial transform
  // eslint-disable-next-line no-unused-expressions
  pulloutImgEl.offsetHeight;

  // 3) Target position: center of the main content area (where album view sits)
  const startCenterX = rect.left + rect.width / 2;
  const startCenterY = rect.top + rect.height / 2;

  const targetCenterX = mainRect.left + mainRect.width / 2;
  const targetCenterY = mainRect.top + mainRect.height / 2;

  const dx = targetCenterX - startCenterX;
  const dy = targetCenterY - startCenterY;

  // 4) Target size: fixed visual size, independent of which row you clicked
  const maxWidth = Math.min(mainRect.width * 0.7, 360);
  const scale = maxWidth / rect.width;

  // 5) Animate: slide + zoom straight out
  pulloutImgEl.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(${scale})`;

  // 6) When animation finishes, fade overlay and switch to Album View
  const onTransitionEnd = () => {
  pulloutImgEl.removeEventListener("transitionend", onTransitionEnd);

  // fade overlay out quickly
  pulloutImgEl.style.opacity = "0";

  setTimeout(() => {
    // switch to Album View; Genre view will be re-rendered if we ever go back
    setView("album");

    // reset overlay state for future animations
    pulloutOverlayEl.classList.add("hidden");
    pulloutImgEl.style.transform = "";
    pulloutImgEl.style.opacity = "";

    // IMPORTANT: do NOT restore spine opacity here
    // Genre view is rebuilt from data when we navigate back,
    // so this specific spineEl will be thrown away.
  }, 150);
  };

  // Remove any previous listeners before adding a new one, so it always fires
  pulloutImgEl.removeEventListener("transitionend", onTransitionEnd);
  pulloutImgEl.addEventListener("transitionend", onTransitionEnd);
}

// ===== 6. ALBUM VIEW (face carousel) =====

function updateAlbumOffset() {
  const cards = Array.from(albumStripEl.querySelectorAll(".album-card"));
  if (!cards.length) return;

  cards.forEach((card, i) => {
    card.classList.toggle("active", i === activeAlbumIndex);
  });

  const activeCard = cards[activeAlbumIndex];
  const stripRect = albumStripEl.getBoundingClientRect();
  const activeRect = activeCard.getBoundingClientRect();

  const stripCenter = stripRect.width / 2;
  const activeCenter = activeRect.left - stripRect.left + activeRect.width / 2;

  const delta = stripCenter - activeCenter;
  albumStripEl.style.setProperty("--album-offset", `${delta}px`);

  updateNavButtons();
}

function renderAlbumStrip() {
  albumStripEl.innerHTML = "";
  const genre = genres[activeGenreIndex];

  genre.albums.forEach((album, index) => {
    const card = document.createElement("div");
    card.className = "album-card";
    if (index === activeAlbumIndex) card.classList.add("active");

    const img = document.createElement("img");
    img.src = album.faceImage;
    img.alt = album.title;

    card.appendChild(img);
    card.addEventListener("click", () => {
      activeAlbumIndex = index;
      updateAlbumOffset();
    });

    albumStripEl.appendChild(card);
  });

  updateAlbumOffset();
}

// ===== 7. NAV BUTTONS & EVENTS =====

// Home genre buttons
document.querySelectorAll(".home-genre-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const genreId = btn.dataset.genreId;
    const index = genres.findIndex((g) => g.id === genreId);
    if (index !== -1) {
      activeAlbumIndex = 0;
      goToGenre(index);
    }
  });
});

// Genre nav
document.getElementById("genre-prev").addEventListener("click", () => {
  if (activeGenreIndex > 0) {
    activeGenreIndex--;
    renderGenreShelf();
    updateNavButtons();
  }
});

document.getElementById("genre-next").addEventListener("click", () => {
  if (activeGenreIndex < genres.length - 1) {
    activeGenreIndex++;
    renderGenreShelf();
    updateNavButtons();
  }
});

document.getElementById("genre-back").addEventListener("click", () => {
  setView("home");
});

// Album nav
document.getElementById("album-prev").addEventListener("click", () => {
  const albums = genres[activeGenreIndex].albums;
  if (activeAlbumIndex > 0) {
    activeAlbumIndex--;
    updateAlbumOffset();
  }
});

document.getElementById("album-next").addEventListener("click", () => {
  const albums = genres[activeGenreIndex].albums;
  if (activeAlbumIndex < albums.length - 1) {
    activeAlbumIndex++;
    updateAlbumOffset();
  }
});

document.getElementById("album-back").addEventListener("click", () => {
  setView("genre");
});

document.getElementById("album-play").addEventListener("click", () => {
  const album = genres[activeGenreIndex].albums[activeAlbumIndex];
  if (album.spotifyUrl && album.spotifyUrl !== "#") {
    window.open(album.spotifyUrl, "_blank");
  }
});

// ===== 8. SWIPE HANDLING =====

let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].clientX;
}

function handleTouchEnd(e, context) {
  touchEndX = e.changedTouches[0].clientX;
  const diffX = touchEndX - touchStartX;
  const threshold = 30;
  if (Math.abs(diffX) < threshold) return;

  if (context === "genre") {
    if (diffX < 0 && activeGenreIndex < genres.length - 1) {
      activeGenreIndex++;
      renderGenreShelf();
    } else if (diffX > 0 && activeGenreIndex > 0) {
      activeGenreIndex--;
      renderGenreShelf();
    }
  } else if (context === "album") {
    const albums = genres[activeGenreIndex].albums;
    if (diffX < 0 && activeAlbumIndex < albums.length - 1) {
      activeAlbumIndex++;
      updateAlbumOffset();
    } else if (diffX > 0 && activeAlbumIndex > 0) {
      activeAlbumIndex--;
      updateAlbumOffset();
    }
  }
}

// Attach swipe listeners
const genreWrapper = document.querySelector(".genre-shelf-wrapper");
genreWrapper.addEventListener("touchstart", handleTouchStart, { passive: true });
genreWrapper.addEventListener("touchend", (e) => handleTouchEnd(e, "genre"), {
  passive: true,
});

const albumStage = document.querySelector(".album-stage");
albumStage.addEventListener("touchstart", handleTouchStart, { passive: true });
albumStage.addEventListener("touchend", (e) => handleTouchEnd(e, "album"), {
  passive: true,
});

// ===== 9. INIT =====
setView("home");