const KINOPOISK_API_KEY = `SAVJ3VG-H5D4XWZ-GX1B5D9-XKA7DAG`;
const KINOPOISK_API = `https://api.kinopoisk.dev/v1.3/movie?&api_key=${KINOPOISK_API_KEY}page=1&limit=10&externalId.imdb=`;

getImdbId(API_URL);

function getMovieId() {
  const searchParams = new URLSearchParams(window.location.search);

  return searchParams.get("tmdbId");
}

async function getImdbId(url) {
  const id = getMovieId();
  const res = await fetch(`${url}/movie/${id}/external_ids?api_key=${API_KEY}`);
  const data = await res.json();

  getKinopoiskId(KINOPOISK_API, data.imdb_id);
}

async function getKinopoiskId(url, id) {
  const res = await fetch(`${url}${id}`, {
    headers: {
      Accept: "application/json",
      "X-Api-Key": "SAVJ3VG-H5D4XWZ-GX1B5D9-XKA7DAG",
    },
  });
  const data = await res.json();
  getPlayer("444");
}

async function getPlayer(kinopoiskId) {
  const id = await kinopoiskId;
  let html = "";
  html += `
   <div id="kinoplayertop" data-player data-kinopoisk=${id}></div>
   
    
   `;
  elMovie.innerHTML = await html;
  //   const el = elPlayer.dataset;

  //   el.kinopoisk = kinopoiskId;

  //   elPlayer.setAttribute("id", "kinoplayertop");
}

var btn = document.querySelector("[data-btn]");

// Tugma bosilganda ishga tushadi
btn.addEventListener("click", function () {
  elPlayer.classList.add("active");
});
