import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;

  .SearchResult {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
  }
`;

export const PageButton = styled.button`
  background-color: ${(props) => (props.active ? '#007bff' : '#f2f2f2')};
  color: ${(props) => (props.active ? '#fff' : '#333')};

  &:hover {
    background-color: ${(props) => (props.active ? '#0056b3' : '#ddd')};
    color: ${(props) => (props.active ? '#fff' : '#333')};
  }
`;
