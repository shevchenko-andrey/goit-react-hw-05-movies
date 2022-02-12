import PropTypes from 'prop-types';
import { useState } from 'react';
import { SearchInput, SearchForm } from './searchMovies.styled';
import { SearchButton } from '../Buttons/SearchButton.styled';
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

      <SearchButton>Search</SearchButton>
    </SearchForm>
  );
};
SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchMovies;
