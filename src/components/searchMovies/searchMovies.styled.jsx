import styled from 'styled-components';
export const SearchInput = styled.input`
  margin-right: 10px;
  border-radius: 5px;
  width: 600px;
  padding: 10px;
  border: 3px solid #ddd;
  transition: border-color 0.2s linear;
  :hover,
  :focus {
    border-color: #032541;
  }
`;
export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;
