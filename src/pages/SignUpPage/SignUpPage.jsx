import { useEffect, useState } from 'react';
import { SignUpCheckbox } from '../../components';
import {
  AuthInput,
  AuthInputContainer,
  CheckButton,
  Container,
  InputContainer,
  SubmitButton,
  Text,
  Img,
} from './styles';
import { Title } from '../../commonStyles';
import {
  EmailValidCheck,
  NickNameValidCheck,
  PasswordValidCheck,
  ConfirmPasswordValidCheck,
} from '../../libs/AuthValidCheck';

import { InputStatus, SetMessage } from '../../libs/AuthMessage';
import { usePostSignUp } from '../../hooks/postSignUp';

import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';
import { getCheckNickname } from '../../hooks/getCheckNickname';
import { getCheckEmail } from '../../hooks/getCheckEmail';

const SignUpPage = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    email: '',
    nickName: '',
    password: '',
    confirmPassword: '',
  });

  const [signUpStatus, setSignUpStatus] = useState({
    emailInputStatus: InputStatus.DEFAULT,
    nicknameInputStatus: InputStatus.DEFAULT,
    passwordInputStatus: InputStatus.DEFAULT,
    confirmPasswordInputStatus: InputStatus.DEFAULT,
    checkboxInputStatus: InputStatus.DEFAULT,
  });

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const { mutate } = usePostSignUp(
    signUpInfo.email,
    signUpInfo.password,
    signUpInfo.nickName,
  );

  const submitSignUp = () => {
    if (signUpStatus.emailInputStatus !== InputStatus.SUCCESS) {
      alert('이메일을 다시 확인해주세요.');
    } else if (signUpStatus.passwordInputStatus !== InputStatus.SUCCESS) {
      alert('비밀번호를 다시 확인해주세요.');
    } else if (
      signUpStatus.confirmPasswordInputStatus !== InputStatus.SUCCESS
    ) {
      alert('비밀번호가 일치하지 않습니다. ');
    } else if (signUpStatus.nicknameInputStatus !== InputStatus.SUCCESS) {
      alert('닉네임을 다시 확인해주세요.');
    } else if (signUpStatus.checkboxInputStatus !== InputStatus.SUCCESS) {
      alert('약관에 동의해주세요.');
    } else {
      mutate();
    }
  };

  // 닉네임 중복체크 api
  const NickNameDuplicateCheck = async (e) => {
    e.preventDefault();
    const isDuplicate = await getCheckNickname(signUpInfo.nickName);

    if (!isDuplicate) {
      setSignUpStatus({
        ...signUpStatus,
        nicknameInputStatus: InputStatus.SUCCESS,
      });
    } else {
      setSignUpStatus({
        ...signUpStatus,
        nicknameInputStatus: InputStatus.DUPLICATE,
      });
    }
  };

  // 이메일 중복체크 api
  const EmailDuplicateCheck = async (e) => {
    e.preventDefault();
    const isDuplicate = await getCheckEmail(signUpInfo.email);

    if (!isDuplicate) {
      setSignUpStatus({
        ...signUpStatus,
        emailInputStatus: InputStatus.SUCCESS,
      });
    } else {
      setSignUpStatus({
        ...signUpStatus,
        emailInputStatus: InputStatus.DUPLICATE,
      });
    }
  };

  useEffect(() => {
    setSignUpStatus({
      ...signUpStatus,
      emailInputStatus: EmailValidCheck(
        signUpInfo.email,
        signUpStatus.emailInputStatus,
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signUpInfo.email]);

  useEffect(() => {
    setSignUpStatus({
      ...signUpStatus,
      nicknameInputStatus: NickNameValidCheck(
        signUpInfo.nickName,
        signUpStatus.nicknameInputStatus,
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signUpInfo.nickName]);

  useEffect(() => {
    setSignUpStatus({
      ...signUpStatus,
      passwordInputStatus: PasswordValidCheck(signUpInfo.password),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signUpInfo.password]);

  useEffect(() => {
    setSignUpStatus({
      ...signUpStatus,
      confirmPasswordInputStatus: ConfirmPasswordValidCheck(
        signUpInfo.confirmPassword,
        signUpInfo.password,
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signUpInfo.confirmPassword]);

  return (
    <Container>
      <Img src={`${process.env.PUBLIC_URL}/logo.png`} />
      <Title>회원가입</Title>
      <InputContainer>
        <AuthInputContainer border="none">
          <AuthInput
            placeholder="아이디(이메일)"
            value={signUpInfo.email}
            onChange={(e) => {
              setSignUpInfo({
                ...signUpInfo,
                email: e.target.value,
              });
            }}
          ></AuthInput>
          <CheckButton
            onClick={(e) => EmailDuplicateCheck(e)}
            disabled={
              signUpStatus.emailInputStatus !== InputStatus.CHECK_REQUIRED
            }
          >
            중복확인
          </CheckButton>
        </AuthInputContainer>
        <Text
          success={
            signUpStatus.emailInputStatus === InputStatus.SUCCESS
              ? 'true'
              : 'false'
          }
        >
          {SetMessage('email', signUpStatus.emailInputStatus)}
        </Text>
        <AuthInputContainer border="none">
          <AuthInput
            placeholder="닉네임"
            value={signUpInfo.nickName}
            onChange={(e) => {
              setSignUpInfo({ ...signUpInfo, nickName: e.target.value });
            }}
          ></AuthInput>
          <CheckButton
            onClick={(e) => NickNameDuplicateCheck(e)}
            disabled={
              signUpStatus.nicknameInputStatus !== InputStatus.CHECK_REQUIRED
            }
          >
            중복확인
          </CheckButton>
        </AuthInputContainer>
        <Text
          success={
            signUpStatus.nicknameInputStatus === InputStatus.SUCCESS
              ? 'true'
              : 'false'
          }
        >
          {SetMessage('nickName', signUpStatus.nicknameInputStatus)}
        </Text>
        <AuthInputContainer>
          <AuthInput
            placeholder="비밀번호"
            type={hidePassword ? 'password' : 'text'}
            value={signUpInfo.password}
            onChange={(e) => {
              setSignUpInfo({
                ...signUpInfo,
                password: e.target.value,
              });
            }}
            border="none"
          ></AuthInput>
          {hidePassword ? (
            <PiEyeBold onClick={() => setHidePassword(false)} />
          ) : (
            <PiEyeClosedBold onClick={() => setHidePassword(true)} />
          )}
        </AuthInputContainer>
        <Text
          success={
            signUpStatus.passwordInputStatus === InputStatus.SUCCESS
              ? 'true'
              : 'false'
          }
        >
          {SetMessage('password', signUpStatus.passwordInputStatus)}
        </Text>
        <AuthInputContainer>
          <AuthInput
            placeholder="비밀번호 확인"
            type={hideConfirmPassword ? 'password' : 'text'}
            value={signUpInfo.confirmPassword}
            onChange={(e) => {
              setSignUpInfo({
                ...signUpInfo,
                confirmPassword: e.target.value,
              });
            }}
            border="none"
          ></AuthInput>
          {hideConfirmPassword ? (
            <PiEyeBold onClick={() => setHideConfirmPassword(false)} />
          ) : (
            <PiEyeClosedBold onClick={() => setHideConfirmPassword(true)} />
          )}
        </AuthInputContainer>
        <Text
          success={
            signUpStatus.confirmPasswordInputStatus === InputStatus.SUCCESS
              ? 'true'
              : 'false'
          }
        >
          {SetMessage(
            'confirmPassword',
            signUpStatus.confirmPasswordInputStatus,
          )}
        </Text>
      </InputContainer>
      <SignUpCheckbox
        setCheckboxInputStatus={(status) => {
          setSignUpStatus({ ...signUpStatus, checkboxInputStatus: status });
        }}
      />
      <SubmitButton onClick={submitSignUp}>회원가입</SubmitButton>
    </Container>
  );
};

export default SignUpPage;
