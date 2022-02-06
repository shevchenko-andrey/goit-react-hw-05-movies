import { Link } from 'react-router-dom';
const MoviesItem = ({ name, id }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>{name}</Link>
    </li>
  );
};
export default MoviesItem;
