import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from 'constants/GlobalStyle';
import Layout from './Layout';
// import HomePage from '../pages/HomePage';
// import MovieDetailsPage from '../pages/MovieDetailsPage';
// import Cast from './Cast';
// import Reviews from './Reviews';

const HomePage = lazy(() => import('../pages/HomePage'));

const MoviesPage = lazy(() => import('../pages/MoviesPage'));

const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));

const Cast = lazy(() => import('./Cast'));

const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="movies" element={<MoviesPage />}></Route>
          <Route path="movies/:moviesId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </>
  );
};
