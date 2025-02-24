import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, toggleFavorite, favorites, openMovieDetails }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.some((fav) => fav.id === movie.id)}
            onClick={openMovieDetails} // Pass function to open details
          />
        ))
      ) : (
        <p className="no-results">No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;
