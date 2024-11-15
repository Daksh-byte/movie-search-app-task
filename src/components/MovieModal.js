import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '145edd33';  

const MovieModal = ({ movie, setSelectedMovie }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  if(movie) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  
  useEffect(() => {
    axios
    .get(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`)
      .then((response) => {
        if (response.data) {
          setMovieDetails(response.data);
        }
      })
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [movie]);  

  if (!movieDetails) {
    return <div>Loading...</div>;
  }
  console.log (movieDetails)

  return (
    <div className="modal">
        <div onClick={() => setSelectedMovie(null)} className="overlay"></div>
      <div className="modal-content">
      
        <button className="close" onClick={() => setSelectedMovie(null)}>
        &times;
        </button>
        <h2 style={{ fontSize: '15px' }}>{movieDetails.Title}</h2>
      <img 
        src={movieDetails.Poster} 
        alt={movieDetails.Title} 
        style={{ width: '150px', height: 'auto' }} 
      />
      <p style={{ fontSize: '12px' }}><strong>Genre:</strong> {movieDetails.Genre}</p>
      <p style={{ fontSize: '12px' }}><strong>Plot:</strong> {movieDetails.Plot}</p>
      <p style={{ fontSize: '12px' }}><strong>IMDB Rating:</strong> {movieDetails.imdbRating}</p>
      <p style={{ fontSize: '12px' }}><strong>Year:</strong> {movieDetails.Year}</p>
      <p style={{ fontSize: '12px' }}><strong>Director:</strong> {movieDetails.Director}</p>
      <p style={{ fontSize: '12px' }}><strong>Actors:</strong> {movieDetails.Actors}</p>
      <p style={{ fontSize: '12px' }}><strong>Runtime:</strong> {movieDetails.Runtime}</p>
      </div>
      </div>
  );
};

export default MovieModal;