import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation, ImgWrapper, RouteNavLink, Header } from './Layout.styled';
import sourceFilm from '../../images/sourceFilms.svg';
const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <RouteNavLink to="/">Home</RouteNavLink>

          <RouteNavLink to="/movies">Movies</RouteNavLink>
        </Navigation>
        <ImgWrapper>
          <img alt="source films" src={sourceFilm} />
        </ImgWrapper>
      </Header>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
