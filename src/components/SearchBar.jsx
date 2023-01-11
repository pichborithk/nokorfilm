import React from 'react';
import SearchIcon from './search.svg';

const SearchBar = ({ searchTerm, setSearchTerm, searchMovie }) => {
  return (
    <div className='search'>
      <input
        placeholder='Enter the movie title'
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <img
        src={SearchIcon}
        alt='search-icon'
        onClick={() => searchMovie(searchTerm)}
      />
    </div>
  );
};

export default SearchBar;
