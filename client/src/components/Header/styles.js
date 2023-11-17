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
  justify-content: space-between;
  align-items: center;
`;

export const Navbar = styled.div`
  display: flex;
  flex: 1;
  justify-content: Left;
`;

export const Navitem = styled.nav`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: center;
  margin: 0 1%;
  border-radius: 10px;
  padding: 10px 20px 8px 20px;

  &:hover {
    background-color: #ffe794;
    transition: 0.5s;
  }

  ${(props) =>
    props.id === 'home' &&
    `
      margin: 0 1% 0 5%;
  `};
`;

export const LoginSignupMypage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20% 0 0;
`;

export const Login = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: center;
  background: none;
  border: none;
  font-family: 'GmarketSansMedium';
  font-size: 16px;
  margin-right: 20px;
  border-radius: 10px;
  padding: 10px 10px 8px 10px;

  &:hover {
    background-color: #ffe794;
    transition: 0.5s;
  }
`;

export const Signup = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: center;
  background: none;
  border: none;
  border-radius: 10px;
  font-family: 'GmarketSansMedium';
  font-size: 16px;
  background-color: var(--main-yellow-color);
  padding: 10px 10px 8px 10px;

  &:hover {
    background-color: #ffe794;
    transition: 0.5s;
  }
`;

export const Mypage = styled.button`
  vertical-align: middle;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: center;
  background: none;
  border: none;
  border-radius: 10px;
  font-family: 'GmarketSansMedium';
  font-size: 16px;
  padding: 10px 10px 8px 10px;

  &:hover {
    background-color: #ffe794;
    transition: 0.5s;
  }
  display: none;
`;
