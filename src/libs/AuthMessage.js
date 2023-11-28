export const InputStatus = {
  DEFAULT: 'default',
  ERROR: 'error',
  CHECK_REQUIRED: 'duplicate-check-required',
  DUPLICATE: 'duplicate',
  SUCCESS: 'success',
};

export const EmailMessage = {
  DEFAULT: '',
  ERROR: '올바른 이메일 형식이 아닙니다.',
  CHECK_REQUIRED: '이메일 중복 확인이 필요합니다.',
  DUPLICATE: '이미 존재하는 이메일입니다.',
  SUCCESS: '사용가능한 이메일입니다.',
};

export const PasswordMessage = {
  DEFAULT: '',
  ERROR: '비밀번호는 8자 이상이어야 합니다.',
  SUCCESS: '사용가능한 비밀번호입니다.',
};

export const ConfirmPasswordMessage = {
  DEFAULT: '',
  ERROR: '비밀번호가 일치하지 않습니다.',
  SUCCESS: '비밀번호가 일치합니다.',
};

export const NickNameMessage = {
  DEFAULT: '',
  ERROR: '닉네임은 2글자 이상이어야 합니다.',
  CHECK_REQUIRED: '닉네임 중복 확인이 필요합니다.',
  DUPLICATE: '이미 존재하는 닉네임입니다.',
  SUCCESS: '사용가능한 닉네임입니다.',
};

export const SetMessage = (type, status) => {
  let message;
  if (type === 'email') message = EmailMessage;
  else if (type === 'nickName') message = NickNameMessage;
  else if (type === 'password') message = PasswordMessage;
  else if (type === 'confirmPassword') message = ConfirmPasswordMessage;

  if (status === InputStatus.DEFAULT) {
    return message.DEFAULT;
  } else if (status === InputStatus.ERROR) {
    return message.ERROR;
  } else if (status === InputStatus.CHECK_REQUIRED) {
    return message.CHECK_REQUIRED;
  } else if (status === InputStatus.DUPLICATE) {
    return message.DUPLICATE;
  } else if (status === InputStatus.SUCCESS) {
    return message.SUCCESS;
  }
};
