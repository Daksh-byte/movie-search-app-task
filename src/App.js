import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import MovieModal from './components/MovieModal';

const API_KEY = '145edd33';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch default popular movies when the component mounts
  useEffect(() => {
    axios
    .get(`http://www.omdbapi.com/?s=popular&apikey=${API_KEY}`)
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  // Search movie based on the searchTerm
  const handleSearch = () => {
    if (searchTerm) {
      axios
      .get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`)
        .then((response) => {
          if (response.data.Search) {
            setMovies(response.data.Search);
          } else {
            setMovies([]);
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="app">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />
      {selectedMovie && <MovieModal movie={selectedMovie} setSelectedMovie={setSelectedMovie} />}
    </div>
  );
};

export default App;