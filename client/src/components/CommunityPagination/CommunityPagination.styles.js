import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  font-size: 20px;
`;
export const PageButton = styled.button`
  font-size: 20px;
  margin-right: 10px;
  margin-left: 10px;
  padding: none;
  border-radius: 50%;
  padding-top: 6px;

  background-color: ${(props) =>
    props.active ? 'var(--main-yellow-color)' : 'white'};
  color: ${(props) => (props.active ? 'black' : '#333')};

  &:hover {
    background-color: ${(props) => (props.active ? '#0056b3' : '#ddd')};
    color: ${(props) => (props.active ? '#fff' : '#333')};
  }
`;
