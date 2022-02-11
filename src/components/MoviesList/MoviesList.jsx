import PropTypes from 'prop-types';
import MoviesItem from 'components/MoviesItem';
import { StyledMoviesList } from './MoviesList.styled';
const MoviesList = ({ movies }) => {
  console.log(movies, 'dfgtyty');
  return (
    <StyledMoviesList>
      {movies.map(movie => {
        const { id, original_title } = movie;
        return <MoviesItem key={id} id={id} name={original_title} />;
      })}
    </StyledMoviesList>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired),
};
export default MoviesList;
