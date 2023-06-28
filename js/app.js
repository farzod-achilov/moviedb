const API_KEY = `b0953172542360179da2c72a4c51f1c9`;
const API_URL = `https://api.themoviedb.org/3`;
const API_URL_IMG = `https://image.tmdb.org/t/p/original`;
("");

const elHeroSectionlist = document.querySelector("[data-hero-section]");
const elBestList = document.querySelector("[data-best-film]");
const elNewList = document.querySelector("[data-new-film]");
const elPopularList = document.querySelector("[data-popular-film]");
const elAboutFilm1 = document.querySelector("[data-one-film]");
const elAboutFilm2 = document.querySelector("[data-two-film]");

getData(API_URL);
getBestFilm(API_URL);
getNewFilm(API_URL);
getPopularFilm(API_URL);

async function getData(url) {
  const res = await fetch(
    `${url}/movie/popular?api_key=${API_KEY}&language=ru-RU&page=1`
  );
  const data = await res.json();
  renderPoster(data.results);
}

async function getNewFilm(url) {
  const res = await fetch(
    `${url}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  console.log(data.results);
  renderNewFilm(data.results);
}

async function getPopularFilm(url) {
  const res = await fetch(`${url}/movie/upcoming?api_key=${API_KEY}&page=2`);
  const data = await res.json();
  renderPopularFilm(data.results);
}

async function getBestFilm(url) {
  const res = await fetch(`${url}/movie/top_rated?api_key=${API_KEY}`);
  const data = await res.json();
  renderBestFilm(data.results);
}

function renderPoster(cinema) {
  let html = "";
  cinema.forEach((film) => {
    html += `
    <swiper-slide class="hero-section__slide"><img src="${API_URL_IMG}${film.backdrop_path}" alt="${film.title}" /></swiper-slide>
   `;
  });
  elHeroSectionlist.innerHTML = html;
}

function renderBestFilm(cinema) {
  let html = "";
  cinema.forEach((film) => {
    html += `
    <swiper-slide class="best-films__slide">
    <img width="245" height="381" src="${API_URL_IMG}${film.poster_path}" alt="${film.title}" />
    <h2>${film.title}</h2>
     <p>${film.release_date}</p>
</swiper-slide>
    `;
  });
  elBestList.innerHTML = html;
}

function renderNewFilm(cinema) {
  let html = "";
  cinema.forEach((film) => {
    html += `
    <swiper-slide class="best-films__slide">
    <img width="245" height="381" src="${API_URL_IMG}${film.poster_path}" alt="${film.title}" />
    <h2>${film.title}</h2>
     <p>${film.release_date}</p>
</swiper-slide>
    `;
  });
  elNewList.innerHTML = html;
}

function renderPopularFilm(cinema) {
  let html = "";
  cinema.forEach((film) => {
    html += `
    <swiper-slide class="best-films__slide">
    <img width="245" height="381" src="${API_URL_IMG}${film.poster_path}" alt="${film.title}" />
    <h2>${film.title}</h2>
     <p>${film.release_date}</p>
</swiper-slide>
    `;
  });
  elPopularList.innerHTML = html;
}
