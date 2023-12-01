import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  AuthInput,
  Container,
  Img,
  TextButtonContainer,
  SubmitButton,
  AuthInputContainer,
} from './styles';
import { Title } from '../../commonStyles';
import { ROUTE } from '../../routes/Routes';
import { usePostLogin } from '../../hooks/postLogin';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  /* 로그인 hook 호출 */
  const { mutate: mutateLogin } = usePostLogin(email, password);

  const submitLogin = () => {
    mutateLogin();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      submitLogin();
    }
  };

  /* 회원가입 버튼 클릭 시 회원가입 페이지로 이동 */
  const linkToSignup = () => {
    navigate(ROUTE.SIGNUP_PAGE.link);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <Img src={`${process.env.PUBLIC_URL}/logo.png`} />
      <Title>로그인</Title>

      <AuthInputContainer>
        <AuthInput
          placeholder="아이디(이메일)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          placeholder="비밀번호"
          value={password}
          type={hidePassword ? 'password' : 'text'}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {hidePassword ? (
          <PiEyeBold onClick={() => setHidePassword(false)} />
        ) : (
          <PiEyeClosedBold onClick={() => setHidePassword(true)} />
        )}
      </AuthInputContainer>

      <SubmitButton onClick={submitLogin}>로그인</SubmitButton>

      <TextButtonContainer>
        <span>아직 회원이 아니신가요?</span>
        <button onClick={linkToSignup}>회원가입하기</button>
      </TextButtonContainer>
    </Container>
  );
};

export default LoginPage;
