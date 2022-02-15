import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import BackLink from '../BackLink';
import { NavigateButton } from 'components/Buttons/NavigateButton.styled';

import {
  MovieCard,
  DetailsWrapper,
  StyledTitle,
  StyledText,
  ImgWrapper,
  AdditionInfo,
  AdditionRefList,
  AdditionItem,
} from './Details.styled';
const Details = ({
  poster_path,
  tagline,
  release_date,
  title,
  genres,
  vote_average,
  overview,
}) => {
  const location = useLocation();
  const baseLocation = location?.state?.from;
  const movieTitle = `${title} (${release_date.slice(0, 4)})`;
  const genresList = genres.map(({ name }) => name).join(', ');
  return (
    <>
      <MovieCard>
        <BackLink>Go back</BackLink>

        <ImgWrapper>
          <img
            src={poster_path && `http://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={tagline}
          />
        </ImgWrapper>
        <DetailsWrapper>
          <StyledTitle>{movieTitle}</StyledTitle>
          <StyledText>User score: {vote_average}</StyledText>

          {overview && (
            <>
              <StyledTitle>Overview:</StyledTitle>
              <StyledText>{overview}</StyledText>
            </>
          )}

          {genresList && (
            <>
              <StyledTitle>Genres:</StyledTitle>
              <p>{genresList}</p>
            </>
          )}
        </DetailsWrapper>
      </MovieCard>
      <AdditionInfo>
        <StyledTitle>Addition information</StyledTitle>
        <AdditionRefList>
          <AdditionItem>
            <NavigateButton to={`cast`} state={{ from: baseLocation }}>
              Cast
            </NavigateButton>
          </AdditionItem>
          <AdditionItem>
            <NavigateButton to={`reviews`} state={{ from: baseLocation }}>
              reviews
            </NavigateButton>
          </AdditionItem>
        </AdditionRefList>
      </AdditionInfo>
    </>
  );
};
Details.propTypes = {
  poster_path: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object.isRequired),
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};
export default Details;
