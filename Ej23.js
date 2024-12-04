const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];

let smallMovies = [];
let mediumMoves = [];
let longMoves = [];

for (const movie of movies) {
    if (movie.durationInMinutes <= 100) {
        smallMovies.push(movie);
    } else if(movie.durationInMinutes > 100 && movie.durationInMinutes <= 200){
        mediumMoves.push(movie);
    } else if(movie.durationInMinutes > 200){
        longMoves.push(movie);
    }
}

console.log(smallMovies);
console.log(mediumMoves);
console.log(longMoves);


