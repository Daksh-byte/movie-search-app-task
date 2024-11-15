import React from 'react';

const MovieCard = ({ movie, setSelectedMovie }) => {
  return (
    <div className="movie-card" onClick={() => setSelectedMovie(movie)}>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;