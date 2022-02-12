import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../moviesAPI/moviesAPI';
import ReviewsItem from 'components/ReviewsItem';
import { StyledReviewsList, NotReviews } from './Reviews.styled';
import status from 'constants/status';
import DoorDashFavorite from '../Loader/DoorDashFavorite';
const { IDLE, RESOLVED, REJECTED, PENDING } = status;
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();
  const [status, setStatus] = useState(IDLE);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setStatus(PENDING);
        const response = await getReviews(moviesId);

        setReviews(response.results);
        setStatus(RESOLVED);
      } catch {
        setStatus(REJECTED);
      }
    };
    fetchReviews();
  }, [moviesId]);
  if (status === RESOLVED && reviews.length > 0) {
    return (
      <StyledReviewsList>
        {reviews.map(({ content, author, id }) => (
          <ReviewsItem key={id} name={author} reviews={content} />
        ))}
      </StyledReviewsList>
    );
  }
  if (status === RESOLVED && reviews.length === 0) {
    return <NotReviews>Not reviews</NotReviews>;
  }
  if (status === PENDING) {
    return <DoorDashFavorite />;
  }
  return <></>;
};
export default Reviews;
