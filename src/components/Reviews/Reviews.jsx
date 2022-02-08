import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../moviesAPI/moviesAPI';
import ReviewsItem from 'components/ReviewsItem';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();
  useEffect(() => {
    const fetchReviews = async () => {
      const response = await getReviews(moviesId);
      setReviews(response.results);
    };
    fetchReviews();
  }, [moviesId]);
  if (reviews.length > 0) {
    console.log(reviews);
    return (
      <ul>
        {reviews.map(({ content, author, id }) => (
          <ReviewsItem key={id} name={author} reviews={content} />
        ))}
      </ul>
    );
  }

  return <p>Not reviews</p>;
};
export default Reviews;
