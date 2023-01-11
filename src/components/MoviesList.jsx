import React from 'react';
import MovieCard from './MovieCard';

const MoviesList = ({ movies }) => {
  return (
    <div className='container'>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
};

export default MoviesList;
