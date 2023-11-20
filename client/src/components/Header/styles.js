import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 10;
  display: flex;
  align-items: center;
  box-shadow: 3px 3px 10px 0px lightgray;
`;

export const Navbar = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const Navitem = styled.nav`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: center;
  margin: 0 10px;
  border-radius: 10px;
  padding: 10px 15px;
  width: auto;
  &:hover {
    background-color: #ffe794;
    transition: 0.5s;
  }

  ${(props) =>
    props.id === 'home' &&
    `
      margin: 0 1% 0 5%;
  `};

  ${(props) =>
    props.id === 'signup' &&
    `
  background-color: var(--main-yellow-color);`}
`;

export const Space = styled.div`
  width: 15%;
`;
