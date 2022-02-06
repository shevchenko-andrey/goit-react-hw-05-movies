import { lazy } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../pages/HomePage';
import MovieDetailsPage from './MovieDetailsPage';
// const HomePage = lazy(() => import('pages/HomePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="movies"></Route>
        <Route path="movies/:moviesId" element={<MovieDetailsPage />}></Route>
        {/* <Route path="*" element={<Navigate to="/" />}></Route> */}
      </Route>
    </Routes>
  );
};
