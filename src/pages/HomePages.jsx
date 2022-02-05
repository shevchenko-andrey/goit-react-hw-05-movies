import MoviesList from 'components/MoviesList';
function HomePages({ movies }) {
  console.log(movies);
  if (movies.length < 1) {
    return <main></main>;
  }
  return (
    <main>
      <section>
        <MoviesList movies={movies} />
      </section>
    </main>
  );
}
export default HomePages;
