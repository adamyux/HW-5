let Movie = function(aMoviename, aRating) {
  this.moviename = aMoviename;
  this.ratings = aRating;
};

Movie.prototype.isValid = function() {
  if (this.moviename == "" || isNaN(this.ratings)) {
    return false;
  } else if (this.ratings < 1 || this.ratings > 5) {
    return false;
  } else {
    return true;
  }
};

Movie.prototype.toString = function() {
  return "- " + this.moviename + " with a rating of " + this.ratings + ". ";
};
