import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import MoviesList from './components/MoviesList';
import NotFound from './components/NotFound';
import './App.css';

// API Key 41fb3a2f
const API_URL = 'https://www.omdbapi.com?apikey=41fb3a2f';

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
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchMovie={searchMovie}
      />
      {movies?.length > 0 ? <MoviesList movies={movies} /> : <NotFound />}
    </div>
  );
};

export default App;
