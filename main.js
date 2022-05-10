let movies = [];

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("add_movie").addEventListener("click", newMovie);
});

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("show_movie").addEventListener("click", displayMovies);
});

let newMovie = function() {
  let movie = new Movie(
    document.getElementById("moviename").value,
    document.getElementById("ratings").value
  );
  if (!movie.isValid()) {
    alert("Invalid input. Please input again. ");
  } else {
    movies.push(movie);

    document.getElementById("moviename").value = "";
    document.getElementById("ratings").value = "";
  }
};

let displayMovies = function() {
  let displayString = "";

  for (let i in movies) {
    displayString += movies[i].toString() + "\n";
  }  
  document.getElementById("movie_list").value = displayString;
};
