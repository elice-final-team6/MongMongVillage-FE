import {
  Container,
  CheckboxContainer,
  CheckboxText,
  Checkbox,
  Space,
} from './styles';
const SignUpCheckbox = () => {
  return (
    <Container>
      <CheckboxContainer>
        <Checkbox type="checkbox" />
        <CheckboxText>모두 동의</CheckboxText>
      </CheckboxContainer>
      <CheckboxContainer>
        <Space />
        <Checkbox type="checkbox" />
        <CheckboxText>위치기반 서비스 이용 동의</CheckboxText>
      </CheckboxContainer>
      <CheckboxContainer>
        <Space />
        <Checkbox type="checkbox" />
        <CheckboxText>만 14세 이상입니다.</CheckboxText>
      </CheckboxContainer>
    </Container>
  );
};

export default SignUpCheckbox;
