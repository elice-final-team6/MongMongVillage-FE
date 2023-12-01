import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 95px;
  z-index: 10;
  display: flex;
  align-items: center;
  box-shadow: 3px 3px 10px 0px lightgray;
  font-size: 18px;
`;

export const Navbar = styled.div`
  max-width: 1920px;
  width: 90%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  .admin {
    font-size: 14px;
    color: var(--main-yellow-color);
  }
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
    props.className === 'active' &&
    `
      background-color: var(--main-yellow-color);
  `};
`;

export const Space = styled.div``;
