import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = ' 145edd33';

const MovieModal = ({ movie, setSelectedMovie }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`)
      .then((response) => setMovieDetails(response.data))
      .catch((error) => console.error(error));
  }, [movie]);
  return (
    movieDetails && (
      <div className="movie-modal">
        <div className="modal-content">
          <button className="close" onClick={() => setSelectedMovie(null)}>
            &times;
          </button>
          <h2>{movieDetails.Title}</h2>
          <img src={movieDetails.Poster} alt={movieDetails.Title} />
          <p><strong>Genre:</strong> {movieDetails.Genre}</p>
          <p><strong>Plot:</strong> {movieDetails.Plot}</p>
          <p><strong>IMDB Rating:</strong> {movieDetails.imdbRating}</p>
          <p><strong>Year:</strong> {movieDetails.Year}</p>
        </div>
      </div>
    )
  );
};

export default MovieModal;