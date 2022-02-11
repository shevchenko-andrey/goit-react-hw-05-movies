import { useState, useEffect, useRef } from 'react';

import MoviesList from '../../components/MoviesList';

import { getSearchMovie } from '../../moviesAPI/moviesAPI';

import SearchMovies from '../../components/searchMovies';

import { Movies } from './MoviesPage.styled';

import status from 'constants/status';

const { IDLE, REJECTED, RESOLVED, PENDING } = status;

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(IDLE);
  const [query, setQuery] = useState('');
  const isMounted = useRef(false);
  useEffect(() => {
    const fatchMovies = async () => {
      setStatus(PENDING);
      try {
        const response = await getSearchMovie(query);
        const { results } = response;
        console.log('movi', results);
        setMovies(results);
        setStatus(RESOLVED);
      } catch {
        setStatus(REJECTED);
      }
    };
    if (isMounted.current) {
      fatchMovies();
    }
    isMounted.current = true;
  }, [query]);
  return (
    <Movies>
      <section>
        <SearchMovies onSubmit={setQuery} />
        <MoviesList movies={movies} />
      </section>
    </Movies>
  );
};
export default MoviesPage;
