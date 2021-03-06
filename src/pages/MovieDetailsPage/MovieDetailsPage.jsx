import { Navigate, Outlet, useParams } from 'react-router-dom';

import { toast } from 'react-hot-toast';

import { useState, useEffect, Suspense } from 'react';

import { getMovieDetailsById } from 'moviesAPI/moviesAPI';

import { DetailsSection } from './MovieDetailsPage.styled';

import Details from '../../components/Details';
import Loader from '../../components/Loaders/LoaderDetails';
import status from 'constants/status';
import toastErrorConfig from 'constants/toastErrorConfig';

const { RESOLVED, REJECTED, PENDING, IDLE } = status;

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(IDLE);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setStatus(PENDING);
      try {
        const response = await getMovieDetailsById(moviesId);
        setMovie(response);
        setStatus(RESOLVED);
      } catch {
        setStatus(REJECTED);
        toast.error('Page not found', toastErrorConfig);
      }
    };
    fetchMovieDetails();
  }, [moviesId]);
  const {
    title,
    tagline,
    poster_path,
    vote_average,
    release_date,
    overview,
    genres,
  } = movie;

  return (
    <main>
      <DetailsSection>
        {status === PENDING && <Loader />}
        {status === RESOLVED && (
          <Details
            poster_path={poster_path}
            tagline={tagline}
            release_date={release_date}
            title={title}
            genres={genres}
            vote_average={vote_average}
            overview={overview}
          />
        )}
        {status === REJECTED && <Navigate to="/" />}

        <Suspense fallback="">
          <Outlet />
        </Suspense>
      </DetailsSection>
    </main>
  );
};
export default MovieDetailsPage;
