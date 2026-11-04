
import React, { useState } from "react";

function SearchMovie({ onSearch }) {
  const [movieName, setMovieName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (movieName.trim()) {
      onSearch(movieName);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2">
      <input
        type="text"
        className="form-control"
        placeholder="Search movie name..."
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />

      <button className="btn btn-warning" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchMovie;
