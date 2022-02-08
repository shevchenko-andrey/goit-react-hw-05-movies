import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <hr></hr>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
