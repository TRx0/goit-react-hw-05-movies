const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'bd976601ef505d915c39fc1c350b9425';


export const movieTrending = async () => {
  const movies = await fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
  const res = await movies.json();
  return res.results;
};

export const movieDetails = async movieId => {
  const movies = await fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
  const response = await movies.json();
  return response;
};

export const movieSearch = async query => {
  const movies = await fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );
  const response = await movies.json();
  return response.results;
};

export const movieCast = async movieId => {
  const movies = await fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const response = await movies.json();
  return response.cast;
};

export const movieReviews = async movieId => {
  const movies = await fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const response = await movies.json();
  return response.results;
};