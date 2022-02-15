import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledMoviesItem, MoviesLink } from './MoviesItem.styled';
const MoviesItem = ({ name, id }) => {
  const location = useLocation();
  return (
    <StyledMoviesItem>
      <MoviesLink to={`/movies/${id}`} state={{ from: location }}>
        {name}
      </MoviesLink>
    </StyledMoviesItem>
  );
};

MoviesItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default MoviesItem;
