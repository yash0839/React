
import React, { useState } from "react";
import SearchMovie from "./components/SearchMovie";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
const API_KEY = "ed3a48d4";


  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Search Movies
  const searchMovies = async (movieName) => {
    setLoading(true);
    setError("");
    setSelectedMovie(null);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(movieName)}&type=movie`
      );

      const data = await response.json();
      console.log("API Response:", data);

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || "No movies found");
      }
    } catch (err) {
      setMovies([]);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Get Movie Details
  const getMovieDetails = async (id) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
      );

      const data = await response.json();

      if (data.Response === "True") {
        setSelectedMovie(data);
      } else {
        setError(data.Error || "Movie details not found");
      }
    } catch (err) {
      setError("Unable to load movie details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">

      <header className="text-center bg-dark text-white p-4 rounded mb-4">
        <h1>🎬 Movie Search App</h1>
        <p>Search your favourite movies and explore details</p>
      </header>

      <SearchMovie onSearch={searchMovies} />

      {loading && (
        <h4 className="text-center mt-4">Loading...</h4>
      )}

      {error && (
        <p className="text-danger text-center mt-3">{error}</p>
      )}

      <MovieDetails
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

      <MovieList
        movies={movies}
        onSelect={getMovieDetails}
      />

    </div>
  );
}

export default App;
