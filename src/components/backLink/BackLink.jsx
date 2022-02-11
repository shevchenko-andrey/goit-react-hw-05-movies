import { Link, useLocation } from 'react-router-dom';

const BackLink = () => {
  const location = useLocation();
  return <Link to={location?.state?.from ?? '/'}>Go back</Link>;
};
export default BackLink;
