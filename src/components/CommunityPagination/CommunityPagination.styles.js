import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-right: 100px;

  .space {
    width: 60px;
  }
`;
export const PageButton = styled.button`
  font-size: 20px;
  margin-right: 10px;
  margin-left: 10px;
  padding: none;
  border-radius: 50%;
  padding-top: 6px;
  width: 40px;
  height: 40px;
  background-color: white !important;

  border: 3px solid
    ${(props) => (props.active ? 'var(--main-yellow-color)' : 'white')};

  color: ${(props) => (props.active ? 'black' : '#333')};

  &:hover {
    background-color: ${(props) =>
      props.active ? 'white' : 'var(--main-yellow-color)'} !important;
  }
`;
