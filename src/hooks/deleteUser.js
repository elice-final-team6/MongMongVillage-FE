import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';
import { showAlert } from '../util/showAlert';

const deleteUser = async () => {
  const response = await instance.delete(`/users/:userId`);

  if (response) return response;
};

export function useDeleteUser() {
  const navigate = useNavigate();

  return useMutation(() => deleteUser(), {
    onSuccess: () => {
      showAlert('', '회원 탈퇴 되었습니다.', 'success', () => {
        localStorage.clear();
        navigate(ROUTE.MAIN_PAGE.link);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      });
    },
    onError: (error) => {
      showAlert('', error.message + +'회원탈퇴를 할 수 없습니다.', 'error');
    },
  });
}
