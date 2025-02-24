import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);

  const toggleFavorite = (movie) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.id === movie.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Favorites</h2>

      {favorites.length === 0 ? (
        <motion.div
          className="text-center text-gray-400 mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          No favorite movies added 🎬
        </motion.div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {favorites.map((movie) => (
            <motion.div
              key={movie.id}
              className="relative bg-gray-800 p-3 rounded text-white shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Heart button */}
              <button
                className="absolute top-2 right-2 text-xl"
                onClick={() => toggleFavorite(movie)}
              >
                <FaHeart
                  className={`transition-all ${
                    favorites.some((fav) => fav.id === movie.id)
                      ? "text-red-500"
                      : "text-gray-300"
                  }`}
                />
              </button>

              {/* Movie Poster */}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded w-full"
              />

              {/* Movie Title */}
              <p className="mt-2 text-center font-bold">{movie.title}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
