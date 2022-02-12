import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { BulletList } from 'react-content-loader';
import MoviesList from 'components/MoviesList';
import { Home, HomeTitle } from './HomePage.styled';
import status from 'constants/status';
import { getTrendingMovies } from '../../moviesAPI/moviesAPI';
import toastErrorConfig from '../../constants/toastErrorConfig';
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
        setMovies(results);
        setStatus(RESOLVED);
      } catch {
        setStatus(REJECTED);
        toast.error(
          'Please check your connection and try again',
          toastErrorConfig
        );
      }
    };
    fatchMovies();
  }, []);

  return (
    <Home>
      <section>
        <HomeTitle>Trending today</HomeTitle>
        {status === PENDING && <BulletList width="750px" />}
        {status === RESOLVED && <MoviesList movies={movies} />}
        {status === REJECTED && <main></main>}
      </section>
    </Home>
  );
};

export default HomePages;
