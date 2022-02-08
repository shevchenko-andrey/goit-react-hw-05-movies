import axios from 'axios';
const API_KEY = 'api_key=169ca8c721ab5dcac16a3ddf7ef07e2a';
const searchTrend = '/trending/movie/day';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const imageConfig = '/configuration';

export const getTrendingMovies = async page => {
  const response = await axios.get(`${searchTrend}?${API_KEY}&page=${page}`);
  return response.data;
};

export const getMovieDetailsById = async id => {
  const response = await axios.get(`/movie/${id}?${API_KEY}`);
  return response.data;
};

export const getMovieCredits = async id => {
  const response = await axios.get(`/movie/${id}/credits?${API_KEY}`);
  return response.data;
};

export const getConfig = async () => {
  const response = await axios.get(`${imageConfig}?${API_KEY}`);
  return response.data;
};
export const getReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews?${API_KEY}`);
  return response.data;
};
export const getSearchMovie = async query => {
  const response = await axios.get(`/search/movie?query=${query}&${API_KEY}`);
  return response.data;
};
