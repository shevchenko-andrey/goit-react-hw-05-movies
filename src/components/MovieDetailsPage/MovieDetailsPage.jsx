import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetailsById, getConfig } from 'moviesAPI/moviesAPI';
const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const { moviesId } = useParams();
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetailsById(moviesId);
        console.log(getConfig());
        setMovie(response);
        console.log('film', response);
      } catch (error) {}
    };
    fetchMovieDetails();
  }, [moviesId]);
  const {
    title,
    tagline,
    poster_path,
    popularity,
    release_date,
    overview,
    genres,
  } = movie;
  const yearOfIssue = release_date && `${title} (${release_date.slice(0, 4)})`;
  const genresList = genres && genres.map(({ name }) => name).join(', ');

  return (
    <main>
      <section>
        <article>
          <img
            src={poster_path && `http://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={tagline}
          />
          <div>
            <h2>{yearOfIssue}</h2>
            <p>User score:{popularity}</p>
            <h3>Overview:</h3>
            <p>{overview}</p>
            <h4>genres</h4>
            <p>{genresList && genresList}</p>
          </div>
        </article>
      </section>
    </main>
  );
};
export default MovieDetailsPage;
