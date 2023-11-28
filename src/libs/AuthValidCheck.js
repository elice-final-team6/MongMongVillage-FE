import { InputStatus } from './AuthMessage';
import axios from 'axios';
import { useQuery } from 'react-query';

export const EmailValidCheck = (value, status) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // 이메일 정규표현식
  if (value.length === 0) {
    return InputStatus.DEFAULT;
  } else if (!emailRegex.test(value)) {
    // 이메일 형식이 아니면 -> erorr
    return InputStatus.ERROR;
  } else if (status !== InputStatus.SUCCESS) {
    // 이메일 형식이 맞으면 -> check-required
    return InputStatus.CHECK_REQUIRED;
  }
};

export const EmailDuplicateCheck = (email) => {
  // 이메일 중복체크 api 호출
  return InputStatus.SUCCESS; // 중복이 아닌 상태로 수정
};

export const NickNameValidCheck = (value, status) => {
  if (value.length === 0) {
    return InputStatus.DEFAULT;
  } else if (value.length < 2) {
    // 2글자 미만이면 -> erorr
    return InputStatus.ERROR;
  } else if (status !== InputStatus.SUCCESS) {
    // 2글자 이상이면 -> check-required
    return InputStatus.CHECK_REQUIRED;
  }
};

export const PasswordValidCheck = (value) => {
  if (value.length === 0) {
    return InputStatus.DEFAULT;
  } else if (value.length < 8) {
    // 8글자 미만이면 -> erorr
    return InputStatus.ERROR;
  } else {
    // 8글자 이상이면 -> success
    return InputStatus.SUCCESS;
  }
};

export const ConfirmPasswordValidCheck = (value, inputPassword) => {
  if (value.length === 0) {
    return InputStatus.DEFAULT;
  } else if (value !== inputPassword) {
    // 비밀번호가 다르면 -> error
    return InputStatus.ERROR;
  } else {
    // 비밀번호가 같으면 -> success
    return InputStatus.SUCCESS;
  }
};
