// fileHandler.js
const fs = require('fs');

function readData() {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/movies.json', 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(JSON.parse(data));
    });
  });
}

function writeData(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./data/movies.json', JSON.stringify(data), 'utf8', (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

module.exports = {
  readData,
  writeData,
};
