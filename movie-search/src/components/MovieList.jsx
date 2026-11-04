
import React from "react";

function MovieList({ movies, onSelect }) {
  return (
    <div className="row mt-4">
      {movies.map((movie) => (
        <div className="col-md-4 col-lg-3 mb-4" key={movie.imdbID}>
          <div className="card h-100 shadow-sm">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://placehold.co/300x450?text=No+Poster"
              }
              className="card-img-top"
              alt={movie.Title}
              style={{ height: "320px", objectFit: "cover" }}
            />

            <div className="card-body">
              <h5>{movie.Title}</h5>
              <p>Year: {movie.Year}</p>

              <button
                className="btn btn-primary"
                onClick={() => onSelect(movie.imdbID)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
