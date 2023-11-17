import { Footer, Header, SignUpCheckbox } from '../../components';
import {
  AuthInput,
  AuthInputContainer,
  CheckButton,
  Container,
  InputContainer,
  SubmitButton,
  Title,
  Text,
} from './styles';

const SignUpPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>회원가입</Title>
        <InputContainer>
          <AuthInputContainer>
            <AuthInput placeholder="아이디(이메일)"></AuthInput>
            <CheckButton>중복체크</CheckButton>
          </AuthInputContainer>
          <Text>사용 가능한 아이디 입니다.</Text>
          <AuthInputContainer>
            <AuthInput placeholder="닉네임"></AuthInput>
            <CheckButton>중복체크</CheckButton>
          </AuthInputContainer>
          <Text className="warning">중복된 닉네임입니다.</Text>
          <AuthInput placeholder="비밀번호"></AuthInput>
          <Text className="warning">비밀번호는 8글자 이상이어야 합니다.</Text>
          <AuthInput placeholder="비밀번호 확인"></AuthInput>
          <Text className="warning">비밀번호가 일치하지 않습니다.</Text>
        </InputContainer>
        <SignUpCheckbox />
        <SubmitButton>회원가입</SubmitButton>
      </Container>
      <Footer />
    </>
  );
};

export default SignUpPage;
