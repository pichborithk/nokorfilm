import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import './App.css';

// API Key 41fb3a2f
const API_URL = 'http://www.omdbapi.com?apikey=41fb3a2f';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie('Spider');
  }, []);

  return (
    <div className='app'>
      <h1>NokorFilm</h1>
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
      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
