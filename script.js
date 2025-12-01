// ===== 1. ALBUM DATA (from your Excel) =====

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

// ===== 1b. MAP DATA → GENRES + IMAGE FILENAMES =====

// Column index → image filename key (matches your PNG names)
const columnKey = {
  1: "hiphop",
  2: "poprock",
  3: "rock",
  4: "metal",
  5: "country",
};

// Human-readable names for the headers
const genreNames = {
  hiphop: "Hip Hop",
  poprock: "Pop / Rock",
  rock: "Rock",
  metal: "Heavy Metal",
  country: "Country",
};

// Build the "genres" structure the rest of the code expects
function buildGenresFromData() {
  const grouped = {};

  albumData.forEach((a) => {
    const key = columnKey[a.column];
    if (!key) return; // ignore if column is out of range

    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(a);
  });

  const result = [];

  Object.keys(grouped).forEach((key) => {
    const albums = grouped[key]
      // make sure they're in top-to-bottom order
      .sort((a, b) => a.row - b.row)
      // convert each raw row into the shape renderShelf expects
      .map((a) => ({
        title: `${a.artist} – ${a.album}`,
        image: `${key}-${String(a.row).padStart(2, "0")}.png`,
        spotifyUrl: a.spotifyUrl,
      }));

    result.push({
      id: key,
      name: genreNames[key],
      albums,
    });
  });

  // Ensure columns appear in order 1 → 5
  result.sort((a, b) => {
    const aCol = Number(
      Object.keys(columnKey).find((c) => columnKey[c] === a.id)
    );
    const bCol = Number(
      Object.keys(columnKey).find((c) => columnKey[c] === b.id)
    );
    return aCol - bCol;
  });

  return result;
}

// This is what the rest of your code uses
const genres = buildGenresFromData();


// ===== 2. RENDER: build the DOM =====

const appEl = document.getElementById("app");
const shelfEl = document.getElementById("shelf");

let zoomed = false;
let activeGenreIndex = 0;

function updateShelfOffset() {
  if (!zoomed) {
    // ALL mode: show full wall as-is
    shelfEl.style.setProperty("--shelf-offset", "0px");
    return;
  }

  const columns = Array.from(document.querySelectorAll(".genre-column"));
  if (!columns.length) return;

  const activeCol = columns[activeGenreIndex];
  const shelfRect = shelfEl.getBoundingClientRect();
  const activeRect = activeCol.getBoundingClientRect();

  // Center of shelf & active column, in shelf coords
  const shelfCenter = shelfRect.width / 2;
  const activeCenter =
    activeRect.left - shelfRect.left + activeRect.width / 2;

  const delta = shelfCenter - activeCenter;

  // This will naturally leave some of each neighbor visible
  shelfEl.style.setProperty("--shelf-offset", `${delta}px`);
}

function renderShelf() {
  shelfEl.innerHTML = "";

  genres.forEach((genre, index) => {
    const col = document.createElement("div");
    col.className = "genre-column";
    col.dataset.genreId = genre.id;

    if (zoomed && index === activeGenreIndex) {
      col.classList.add("active-genre");
    }

    // Header
    const header = document.createElement("div");
    header.className = "genre-header";

    const nameEl = document.createElement("div");
    nameEl.className = "genre-name";
    nameEl.textContent = genre.name;

    const controls = document.createElement("div");
    controls.className = "genre-controls";

    const viewBtn = document.createElement("button");
    viewBtn.className = "view-btn";
    viewBtn.textContent =
      zoomed && index === activeGenreIndex ? "Close" : "View";

    viewBtn.addEventListener("click", (event) => {
      event.stopPropagation(); // don't trigger other clicks
      handleViewClick(index);
    });

    controls.appendChild(viewBtn);
    header.appendChild(nameEl);
    header.appendChild(controls);
    col.appendChild(header);

    // Album spines
    const list = document.createElement("div");
    list.className = "album-list";

    genre.albums.forEach((album) => {
      const spine = document.createElement("div");
      spine.className = "album-spine";

      const img = document.createElement("img");
      img.src = album.image;
      img.alt = album.title;

      spine.appendChild(img);

      spine.addEventListener("click", () => {
        // Open Spotify album
        if (album.spotifyUrl && album.spotifyUrl !== "#") {
          window.open(album.spotifyUrl, "_blank");
        }
      });

      list.appendChild(spine);
    });

    col.appendChild(list);
    shelfEl.appendChild(col);
  });

  updateShelfOffset();
}

function handleViewClick(index) {
  if (!zoomed) {
    zoomed = true;
    activeGenreIndex = index;
    appEl.classList.add("zoomed");
  } else {
    // If clicking the active column, close zoom; otherwise switch to new column
    if (activeGenreIndex === index) {
      zoomed = false;
      appEl.classList.remove("zoomed");
    } else {
      activeGenreIndex = index;
    }
  }

  renderShelf();
}

// ===== 3. SWIPE HANDLING (for zoomed mode) =====

let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].clientX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipeGesture();
}

function handleSwipeGesture() {
  if (!zoomed) return;

  const diffX = touchEndX - touchStartX;
  const threshold = 30; // px before we consider it a swipe

  if (Math.abs(diffX) < threshold) return;

  if (diffX < 0 && activeGenreIndex < genres.length - 1) {
    activeGenreIndex++;
    renderShelf();
  } else if (diffX > 0 && activeGenreIndex > 0) {
    activeGenreIndex--;
    renderShelf();
  }
}

// Attach touch listeners to main shelf wrapper
const shelfWrapper = document.querySelector(".shelf-wrapper");
shelfWrapper.addEventListener("touchstart", handleTouchStart, {
  passive: true,
});
shelfWrapper.addEventListener("touchend", handleTouchEnd, {
  passive: true,
});

// ===== 4. INITIALIZE =====

renderShelf();
