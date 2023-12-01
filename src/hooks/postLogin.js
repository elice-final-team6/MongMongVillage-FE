import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { showAlert } from '../util/showAlert';

const postLogin = async (email, password) => {
  const response = await instance.post(`/users/login`, {
    email,
    password,
  });
  if (response?.data) {
    return response.data;
  }
};

export function usePostLogin(email, password) {
  const navigate = useNavigate();

  return useMutation(() => postLogin(email, password), {
    onSuccess: (response) => {
      const token = response.data.token;
      const userId = response.data.userId;
      const role = response.data.role;

      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('role', role);

      showAlert('', '로그인에 성공했습니다.', 'success', () => {
        navigate('/');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      });
    },

    onError: (error) => {
      showAlert('Error', error.response.data.message, 'error', () => {});
    },
  });
}
