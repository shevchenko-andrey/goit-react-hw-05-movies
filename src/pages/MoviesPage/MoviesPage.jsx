import { useState, useEffect, useRef } from 'react';

import MoviesList from '../../components/MoviesList';

import { useSearchParams } from 'react-router-dom';

import { getSearchMovie } from '../../moviesAPI/moviesAPI';

import SearchMovies from '../../components/searchMovies';

import { Movies } from './MoviesPage.styled';

import status from 'constants/status';

const { IDLE, REJECTED, RESOLVED, PENDING } = status;

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(IDLE);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  useEffect(() => {
    if (query) {
      const fatchMovies = async () => {
        setStatus(PENDING);
        try {
          const response = await getSearchMovie(query);
          const { results } = response;

          setMovies(results);
          setStatus(RESOLVED);
        } catch {
          setStatus(REJECTED);
        }
      };

      fatchMovies();
    }
  }, [query]);

  return (
    <Movies>
      <section>
        <SearchMovies onSubmit={setSearchParams} />
        <MoviesList movies={movies} />
      </section>
    </Movies>
  );
};
export default MoviesPage;
