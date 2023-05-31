// api.js
const fetch = require('cross-fetch');

async function fetchMoviesByTitle(title) {
  const response = await fetch(`https://api.example.com/movies?title=${encodeURIComponent(title)}`);
  const data = await response.json();
  return data.results;
}

module.exports = {
  fetchMoviesByTitle,
};
