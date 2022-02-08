const ReviewsList = ({ name, reviews }) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{reviews}</p>
    </li>
  );
};
export default ReviewsList;
