
import React from "react";

function MovieDetails({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="card shadow mt-4 mb-4">
      <div className="row g-0">

        <div className="col-md-4">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://placehold.co/300x450?text=No+Poster"
            }
            className="img-fluid rounded-start"
            alt={movie.Title}
          />
        </div>

        <div className="col-md-8">
          <div className="card-body">

            <h2>{movie.Title}</h2>

            <p><b>Year:</b> {movie.Year}</p>
            <p><b>Released:</b> {movie.Released}</p>
            <p><b>Genre:</b> {movie.Genre}</p>
            <p><b>Director:</b> {movie.Director}</p>
            <p><b>Actors:</b> {movie.Actors}</p>
            <p><b>Language:</b> {movie.Language}</p>
            <p><b>Country:</b> {movie.Country}</p>
            <p><b>Runtime:</b> {movie.Runtime}</p>
            <p><b>IMDb Rating:</b> {movie.imdbRating}</p>
            <p><b>Plot:</b> {movie.Plot}</p>

            <button
              className="btn btn-danger"
              onClick={onClose}
            >
              Close Details
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
