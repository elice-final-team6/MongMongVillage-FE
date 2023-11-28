import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

const postLogin = async (email, password) => {
  const response = await instance.post(`/users/login`, {
    email,
    password,
  });

  return response.data;
};

export function usePostLogin(email, password) {
  const navigate = useNavigate();
  return useMutation(() => postLogin(email, password), {
    onSuccess: (response) => {
      const token = response.data.token;
      const userId = response.data.userId;

      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);

      alert('로그인 성공');
      navigate('/');
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });
}
