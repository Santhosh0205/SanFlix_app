import { FaHeart, FaRegHeart } from "react-icons/fa";

const MovieCard = ({ movie, toggleFavorite, isFavorite, openMovieDetails }) => {
  return (
    <div className="movie-card" onClick={() => openMovieDetails(movie)}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.slice(0, 4)}</p>
      </div>

      {/* Favorite Button - Stops click from opening details */}
      <button
        className="favorite-btn"
        onClick={(e) => {
          e.stopPropagation(); // Prevents triggering openMovieDetails
          toggleFavorite(movie);
        }}
      >
        {isFavorite ? <FaHeart color="red" /> : <FaRegHeart color="white" />}
      </button>
    </div>
  );
};

export default MovieCard;
