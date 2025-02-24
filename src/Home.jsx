import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieDetails from "./MovieDetails";
import "./Home.css";

const Home = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // ✅ Added state

  useEffect(() => {
    if (searchQuery.trim() === "") {
      fetchMovies();
    } else {
      searchMovies(searchQuery);
    }
  }, [searchQuery]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          params: {
            api_key: "e1d9a5c77c2387dcea1d598392d5bfc1",
          },
        }
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const searchMovies = async (query) => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: "e1d9a5c77c2387dcea1d598392d5bfc1",
            query: query,
          },
        }
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  // ✅ Fix: Select movie and show details
  const openMovieDetails = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="home-container">
      {selectedMovie ? ( // ✅ Show Movie Details when selected
        <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      ) : (
        <div className="movie-grid">
          {movies.length === 0 ? (
            <p className="text-center text-gray-400 mt-10">No results found 🎬</p>
          ) : (
            movies.map((movie) => (
              <div key={movie.id} className="movie-card" onClick={() => openMovieDetails(movie)}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-info">
                  <h3 className="movie-title">{movie.title}</h3>
                  <p className="movie-year">{movie.release_date?.slice(0, 4)}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
