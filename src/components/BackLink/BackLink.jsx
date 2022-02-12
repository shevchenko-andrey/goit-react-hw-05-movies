import { useLocation } from 'react-router-dom';
import { StyledBackLink } from './BackLink.styled';

const BackLink = () => {
  const location = useLocation();

  return (
    <StyledBackLink to={location?.state?.from ?? '/'}>Go back</StyledBackLink>
  );
};
export default BackLink;
