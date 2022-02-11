import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: rgba(3, 37, 65, 1);
  width: 100%;
  z-index: 10;
  transition: top 0.2s linear;
`;
export const ImgWrapper = styled.div`
  width: 400px;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin-right: 150px;
`;
export const RouteNavLink = styled(NavLink)`
  transition: color 0.2s linear;
  padding: 20px 0px;

  &:hover,
  &.active {
    color: #00fff0;
  }
`;
