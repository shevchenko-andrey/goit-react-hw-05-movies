import axios from 'axios';
const API_KEY = 'api_key=169ca8c721ab5dcac16a3ddf7ef07e2a';
const searchTrend = '/trending/movie/day';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const getTrendingMovies = async page => {
  const response = await axios.get(`${searchTrend}?${API_KEY}&page=${page}`);
  return response.data;
};
