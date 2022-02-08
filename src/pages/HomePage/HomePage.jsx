import { useState, useEffect } from 'react';

import MoviesList from 'components/MoviesList';

import status from 'constants/status';

import { getTrendingMovies } from '../../moviesAPI/moviesAPI';

const { IDLE, REJECTED, RESOLVED, PENDING } = status;

const HomePages = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(IDLE);
  useEffect(() => {
    const fatchMovies = async () => {
      setStatus(PENDING);
      try {
        const response = await getTrendingMovies(1);
        const { results } = response;
        console.log(results);
        setMovies(results);
        setStatus(RESOLVED);
      } catch {
        setStatus(REJECTED);
      }
    };
    fatchMovies();
  }, []);
  if (status === RESOLVED) {
    return (
      <main>
        <section>
          <MoviesList movies={movies} />
        </section>
      </main>
    );
  }

  return <main></main>;
};
export default HomePages;
