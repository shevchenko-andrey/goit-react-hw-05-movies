import { useState } from 'react';
const SearchMovies = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="please input movie name"
          type="text"
        />
      </label>
      <button />
    </form>
  );
};
export default SearchMovies;
