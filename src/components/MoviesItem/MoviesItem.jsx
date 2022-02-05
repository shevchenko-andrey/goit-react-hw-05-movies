import { Link } from 'react-router-dom';
const MoviesItem = ({ name }) => {
  return (
    <li>
      <Link to="/movies">{name}</Link>
    </li>
  );
};
export default MoviesItem;
