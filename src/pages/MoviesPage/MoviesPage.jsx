import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import MoviesList from '../../components/MoviesList';

import { useSearchParams } from 'react-router-dom';

import { BulletList } from 'react-content-loader';

import { getSearchMovie } from '../../moviesAPI/moviesAPI';

import SearchMovies from '../../components/searchMovies';
import toastErrorConfig from '../../constants/toastErrorConfig';
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
          const { results, total_pages } = response;
          if (total_pages < 1) {
            throw new Error('404');
          }
          setMovies(results);
          setStatus(RESOLVED);
        } catch {
          setStatus(REJECTED);
          toast.error(`Not results found for "${query}"`, toastErrorConfig);
        }
      };

      fatchMovies();
    }
  }, [query]);

  return (
    <Movies>
      <section>
        <SearchMovies onSubmit={setSearchParams} />
        {status === RESOLVED && <MoviesList movies={movies} />}
        {status === PENDING && <BulletList />}
      </section>
    </Movies>
  );
};
export default MoviesPage;
