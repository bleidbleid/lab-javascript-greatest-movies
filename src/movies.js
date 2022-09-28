const moviesArray = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//     We need to get the array of all directors. Since this is a warm up, we will give you a hint:
//     you have to _map_ through the array of movies and get all the directors into one array as a final result.
//     Go ahead and create a function named `getAllDirectors()` that receives an array of movies as an
//     argument and returns a new (_mapped_) array.
function getAllDirectors(moviesArray) {
    let directorsArray = moviesArray.map(movie => movie.director);

    function uniqueDirectors(directorsArray) {
        return [...new Set(directorsArray)];
    }

    return uniqueDirectors(directorsArray);
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// One of the most famous directors in cinema is Steven Spielberg,
// and he has some really awesome drama movies that are on our list,
// but we want to know how many of them are there.

// Go ahead and create a howManyMovies() function that
// receives an array as a parameter and filter 👀
// the array so we can have only the drama movies where Steven Spielberg is the director.

function howManyMovies(moviesArray) {

    const stevenSpielberg = moviesArray.filter(movie => movie.director === ('Steven Spielberg'));
    const spielbergDrama = stevenSpielberg.filter(movie => movie.genre.includes('Drama'))
    return spielbergDrama.length;

}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

// These are the best movies based on their scores, so supposedly all of them have a remarkable score.
// In this iteration, we want to know the average score of all of them and display it on the console.
// Create a scoresAverage() function that receives an array as a parameter and solves the challenge.

// The score must be returned rounded to 2 decimals!
// 💡 Maybe you want to "reduce" the data to a single value.
// arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])

function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    let allScores = moviesArray.filter(movie => movie.score);

    let totalScore = allScores.reduce((b, a) => (b.score + a.score));
    let averageScore = totalScore / allScores.length;

    return Math.round(averageScore * 100) / 100;
}
console.log(scoresAverage(moviesArray));


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray === 0) return 0;

    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'));
    if (dramaMovies.length === 0) return 0;

    const dramaScore = dramaMovies.filter((movie) => movie.score);
    if (dramaScore.length === 0) return 0;

    const totalDrama = dramaScore.reduce((b, a) => (b.score + a.score));
    if (totalDrama.length === 0) return 0;

    const averageDrama = totalDrama / dramaMovies.length;
    if (averageDrama.length === 0) return 0;


    return Math.round(averageDrama * 100) / 100;

}






// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
