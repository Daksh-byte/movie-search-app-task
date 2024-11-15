import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;