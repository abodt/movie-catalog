// movieManager.js
const { readData, writeData } = require('./fileHandler');
const Movie = require('./movie');

async function getMovies() {
  const movies = await readData();
  return movies.map((movieData) => new Movie(...Object.values(movieData)));
}

async function addMovie(movie) {
  const movies = await readData();
  movies.push(movie);
  await writeData(movies);
}

async function updateMovie(index, movie) {
  const movies = await readData();
  movies[index] = movie;
  await writeData(movies);
}

async function deleteMovie(index) {
  const movies = await readData();
  movies.splice(index, 1);
  await writeData(movies);
}

module.exports = {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
};
