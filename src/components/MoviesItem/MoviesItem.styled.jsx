import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const StyledMoviesItem = styled.li`
  border: 1px solid #ddd;
  min-width: 700px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const MoviesLink = styled(Link)`
  display: block;
  padding: 30px;
  transition: color 0.2s linear, background-color 0.2s linear;
  :hover {
    background-color: #032541;
    color: #ffffff;
  }
`;
