const readline = require('readline');
const { readData, writeData } = require('./fileHandler');
const Movie = require('./movie');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log('\nMovie Catalog CLI Application');
  console.log('1. Display Movie Catalog');
  console.log('2. Add New Movie');
  console.log('3. Update Movie Details');
  console.log('4. Delete Movie');
  console.log('5. Search and Filter Movies');
  console.log('6. Fetch Movie Data from API');
  console.log('0. Exit');
}

function promptChoice() {
  rl.question('\nEnter your choice (number): ', (choice) => {
    handleChoice(Number(choice));
  });
}

function handleChoice(choice) {
  switch (choice) {
    case 1:
      displayMovieCatalog();
      break;
    case 2:
      addNewMovie();
      break;
    case 3:
      updateMovieDetails();
      break;
    case 4:
      deleteMovie();
      break;
    case 5:
      searchAndFilterMovies();
      break;
    case 6:
      fetchMovieDataFromAPI();
      break;
    case 0:
      exitProgram();
      break;
    default:
      console.log('Invalid choice. Please try again.');
      promptChoice();
  }
}

function displayMovieCatalog() {
  readData()
    .then((movies) => {
      if (movies.length === 0) {
        console.log('\nThe movie catalog is empty.');
      } else {
        console.log('\nMovie Catalog:');
        movies.forEach((movie, index) => {
          console.log(`${index + 1}. ${movie.getDetails()}`);
        });
      }
      promptChoice();
    })
    .catch((error) => {
      console.log('An error occurred while reading the movie catalog:', error);
      promptChoice();
    });
}

function addNewMovie() {
  rl.question('Add New Movie\nTitle: ', (title) => {
    rl.question('Director: ', (director) => {
      rl.question('Release Year: ', (releaseYear) => {
        rl.question('Genre: ', (genre) => {
          const movie = new Movie(title, director, releaseYear, genre);
          readData()
            .then((movies) => {
              movies.push(movie);
              return writeData(movies);
            })
            .then(() => {
              console.log('\nNew movie added successfully!');
              promptChoice();
            })
            .catch((error) => {
              console.log('An error occurred while adding the movie:', error);
              promptChoice();
            });
        });
      });
    });
  });
}

function updateMovieDetails() {
  // Implement the updateMovieDetails function
  console.log('Updating movie details...');
  promptChoice();
}

function deleteMovie() {
  // Implement the deleteMovie function
  console.log('Deleting a movie...');
  promptChoice();
}

function searchAndFilterMovies() {
  // Implement the searchAndFilterMovies function
  console.log('Searching and filtering movies...');
  promptChoice();
}

function fetchMovieDataFromAPI() {
  // Implement the fetchMovieDataFromAPI function
  console.log('Fetching movie data from API...');
  promptChoice();
}

function exitProgram() {
  console.log('\nExiting Movie Catalog. Goodbye!');
  rl.close();
}

displayMenu();
promptChoice();
