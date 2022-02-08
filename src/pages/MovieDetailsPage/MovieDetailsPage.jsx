import { Outlet, Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';

import { useState, useEffect, Suspense } from 'react';

import { getMovieDetailsById, getConfig } from 'moviesAPI/moviesAPI';
import Loader from '../../components/Loader/Loader';
import status from 'constants/status';

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
        console.log(getConfig());
        setMovie(response);
        console.log('film', response);
        setStatus(RESOLVED);
      } catch (error) {
        setStatus(REJECTED);
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
  const movieTitle = release_date && `${title} (${release_date.slice(0, 4)})`;
  const genresList = genres && genres.map(({ name }) => name).join(', ');

  return (
    <main>
      <section>
        {status === PENDING && <Loader />}
        {status === RESOLVED && (
          <>
            <article>
              <img
                src={
                  poster_path && `http://image.tmdb.org/t/p/w300/${poster_path}`
                }
                alt={tagline}
              />
              <div>
                <h2>{movieTitle}</h2>
                <p>User score:{vote_average}</p>

                {overview && (
                  <>
                    <h2>Overview:</h2>
                    <p>{overview}</p>
                  </>
                )}

                {genresList && (
                  <>
                    <h2>genres</h2>
                    <p>{genresList}</p>
                  </>
                )}
              </div>
              <div>
                <h2>Addition information</h2>
                <ul>
                  <li>
                    <Link to={`cast`}>Cast</Link>
                  </li>
                  <li>
                    <Link to={`reviews`}>reviews</Link>
                  </li>
                </ul>
              </div>
            </article>
          </>
        )}
        <Suspense fallback="">
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
};
export default MovieDetailsPage;
