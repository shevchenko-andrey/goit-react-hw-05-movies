import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'moviesAPI/moviesAPI';
import ActorsItem from 'components/ActorsItem';
import status from 'constants/status';
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

  if (cast) {
    console.log(cast);
    return (
      <ul>
        {cast.map(({ profile_path, id, original_name }) => (
          <ActorsItem
            key={id}
            imgUrl={`http://image.tmdb.org/t/p/w92/${profile_path}`}
            profile_path={profile_path}
            name={original_name}
            id={id}
          />
        ))}
      </ul>
    );
  }

  return <ul></ul>;
};
export default Cast;
