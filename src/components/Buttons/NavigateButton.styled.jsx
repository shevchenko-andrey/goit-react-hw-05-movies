import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavigateButton = styled(NavLink)`
  display: block;
  border-radius: 10px;
  padding: 10px;
  width: 100px;
  background-color: #bebbd1;
  transition: color 0.2s linear, background-color 0.2s linear;
  :hover,
  &.active {
    background-color: #0a8672;
    color: #ffffff;
  }
`;
