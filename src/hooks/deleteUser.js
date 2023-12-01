import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const deleteUser = async () => {
  const response = await instance.delete(`/users/:userId`);

  if (response) return response;
};

export function useDeleteUser() {
  const navigate = useNavigate();

  return useMutation(() => deleteUser(), {
    onSuccess: () => {
      localStorage.clear();
      alert('회원 탈퇴 되었습니다.');
      navigate(ROUTE.MAIN_PAGE.link);
    },
    onError: (error) => {
      alert(error.message + '회원탈퇴 실패');
    },
  });
}
