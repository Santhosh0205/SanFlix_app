import React from "react";
import "./MovieDetails.css";

const MovieDetails = ({ movie, onClose }) => {
  return (
    <div className="movie-details-container">
      <button className="close-btn" onClick={onClose}>❌</button>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p><strong>Overview:</strong> {movie.overview}</p>
      <p><strong>Release Year:</strong> {movie.release_date?.slice(0, 4)}</p>
    </div>
  );
};

export default MovieDetails;
