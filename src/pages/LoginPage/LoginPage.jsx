import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  AuthInput,
  Container,
  Img,
  SNSButton,
  TextButton,
  TextButtonContainer,
  Title,
} from './styles';
import { FcGoogle } from 'react-icons/fc';
import { SiNaver } from 'react-icons/si';
import { ROUTE } from '../../routes/Routes';

const LoginPage = () => {
  const navigate = useNavigate();
  const [toggleEmailLogin, setToggleEmailLogin] = useState(false);

  const toggle = () => {
    setToggleEmailLogin(!toggleEmailLogin);
  };

  return (
    <Container>
      <Img src={`${process.env.PUBLIC_URL}/logo.png`} />
      <Title>로그인</Title>
      <SNSButton className="google-login-button">
        <FcGoogle />
        <span>구글로 로그인</span>
        <span></span>
      </SNSButton>
      <SNSButton className="naver-login-button">
        <SiNaver />
        <span>네이버로 로그인</span>
        <span></span>
      </SNSButton>
      {toggleEmailLogin && (
        <>
          <AuthInput placeholder="아이디(이메일)" />
          <AuthInput placeholder="비말번호" />
        </>
      )}
      <SNSButton className="email-login-button" onClick={toggle}>
        이메일로 로그인
      </SNSButton>

      <TextButtonContainer>
        <TextButton>비밀번호 찾기</TextButton>
        <span>|</span>
        <TextButton onClick={() => navigate(ROUTE.SIGNUP_PAGE)}>
          회원가입
        </TextButton>
      </TextButtonContainer>
    </Container>
  );
};

export default LoginPage;
