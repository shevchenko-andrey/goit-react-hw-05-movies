import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchInput, SearchForm } from './searchMovies.styled';
import { Button } from '../Button/Button';
const SearchMovies = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ query: query });
    setQuery('');
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search movies"
        type="text"
      />

      <Button>Search</Button>
    </SearchForm>
  );
};
export default SearchMovies;
