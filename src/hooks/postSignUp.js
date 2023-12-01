import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';
import { showAlert } from '../util/showAlert';

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
      showAlert('', '회원가입에 성공했습니다.', 'success', () => {
        navigate(ROUTE.LOGIN_PAGE.link);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      });
    },
    onError: (error) => {
      showAlert('', '회원가입에 실패했습니다.' + error, 'error', () => {});
    },
  });
}
