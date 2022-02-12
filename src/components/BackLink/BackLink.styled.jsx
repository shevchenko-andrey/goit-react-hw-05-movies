import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const StyledBackLink = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px;
  background-color: #bebbd1;
  border-radius: 10px;
  transition: color 0.2s linear, background-color 0.2s linear;
  :hover {
    background-color: #0a8672;
    color: #ffffff;
  }
`;
