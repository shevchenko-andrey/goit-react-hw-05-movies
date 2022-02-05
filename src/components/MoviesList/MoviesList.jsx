import MoviesItem from 'components/MoviesItem';
const MoviesList = ({ movies }) => {
  console.log(movies);
  return (
    <ul>
      {movies.map(movie => {
        const { id, original_title } = movie;
        return <MoviesItem key={id} name={original_title} />;
      })}
    </ul>
  );
};
export default MoviesList;
