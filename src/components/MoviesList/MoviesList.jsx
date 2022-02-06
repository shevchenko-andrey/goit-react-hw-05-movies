import MoviesItem from 'components/MoviesItem';
const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        const { id, original_title } = movie;
        return <MoviesItem key={id} id={id} name={original_title} />;
      })}
    </ul>
  );
};
export default MoviesList;
