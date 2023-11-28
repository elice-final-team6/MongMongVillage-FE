import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const postSignUp = async (email, password, nickname) => {
  const response = await instance.post(`/users/signup`, {
    nickname,
    email,
    password,
  });

  return response;
};

export function usePostSignUp(email, password, nickname) {
  const navigate = useNavigate();
  return useMutation(() => postSignUp(email, password, nickname), {
    onSuccess: () => {
      alert('회원가입 성공');
      navigate(ROUTE.LOGIN_PAGE.link);
    },
    onError: (error) => {
      alert(error + '회원가입 실패');
    },
  });
}
