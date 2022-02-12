import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'moviesAPI/moviesAPI';
import { AuthorList } from './Cast.styled';
import ActorsItem from 'components/ActorsItem';
import status from 'constants/status';
import CatalogMagic from '../Loader/CatalogMagic';
const { IDLE, REJECTED, RESOLVED, PENDING } = status;

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState(IDLE);
  const { moviesId } = useParams();
  useEffect(() => {
    const fatchCast = async () => {
      setStatus(PENDING);
      try {
        const response = await getMovieCredits(moviesId);
        setCast(response.cast);
        setStatus(RESOLVED);
      } catch {
        setStatus(REJECTED);
      }
    };
    fatchCast();
  }, [moviesId]);

  if (status === RESOLVED) {
    return (
      <AuthorList>
        {cast.map(({ profile_path, id, original_name }) => (
          <ActorsItem
            key={id}
            imgUrl={`http://image.tmdb.org/t/p/w92/${profile_path}`}
            profile_path={profile_path}
            name={original_name}
            id={id}
          />
        ))}
      </AuthorList>
    );
  }
  if (status === PENDING) {
    return <CatalogMagic />;
  }

  return <ul></ul>;
};
export default Cast;
