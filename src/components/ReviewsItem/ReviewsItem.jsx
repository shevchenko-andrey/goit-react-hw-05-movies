import PropTypes from 'prop-types';
import { StyledReviewsItem, ReviewsTitle } from './ReviewsItem.styled';
const ReviewsItem = ({ name, reviews }) => {
  return (
    <StyledReviewsItem>
      <ReviewsTitle>{name}</ReviewsTitle>
      <p>{reviews}</p>
    </StyledReviewsItem>
  );
};
ReviewsItem.propTypes = {
  name: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
};
export default ReviewsItem;
