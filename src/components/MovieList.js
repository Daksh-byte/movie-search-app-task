import React from 'react';
import MovieCard from '../components/MovieCard';

const MovieList = ({ movies, setSelectedMovie }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} setSelectedMovie={setSelectedMovie} />
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;