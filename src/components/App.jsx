import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePages';
import Layout from './Layout';
import { getTrendingMovies } from '../moviesAPI/moviesAPI';
const status = {
  IDLE: 'idle',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
  PENDING: 'pending',
};
const { IDLE, REJECTED, RESOLVED, PENDING } = status;
export const App = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(IDLE);
  const isMounted = useRef(false);
  useEffect(() => {
    const fatchMovies = async () => {
      setStatus(PENDING);
      try {
        const response = await getTrendingMovies(1);
        const { results } = response;
        console.log(results);
        setMovies(results);
        setStatus(RESOLVED);
      } catch {
        setStatus(REJECTED);
        return console.log('ban');
      }
    };
    if (!isMounted.current) {
      fatchMovies();
    }
    isMounted.current = true;
  });
  console.log(movies);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {status === RESOLVED && (
          <Route path="/" element={<HomePage movies={movies} />}></Route>
        )}
      </Route>
    </Routes>
  );
};
