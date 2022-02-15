import styled from 'styled-components';

export const SearchButton = styled.button`
  min-width: 60px;
  border-radius: 10px;
  border: 3px solid #ddd;
  padding: 10px;

  transition: border-color 0.2s linear;
  :disabled {
    color: #807e7edf;
  }
  :hover {
    border-color: #032541;
  }
  :hover[disabled] {
    border-color: #ddd;
  }
`;
