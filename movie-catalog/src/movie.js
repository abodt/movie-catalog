class Movie {
  constructor(title, director, releaseYear, genre) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.genre = genre;
  }

  getDetails() {
    return `${this.title} (${this.releaseYear}) - Directed by ${this.director} (${this.genre})`;
  }
}

module.exports = Movie;
