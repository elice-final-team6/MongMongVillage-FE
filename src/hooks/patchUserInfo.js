import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation, useQueryClient } from 'react-query';
import { ROUTE } from '../routes/Routes';

const patchUserInfo = async (nickname, introduction, profilePicture) => {
  const formData = new FormData();

  formData.append('nickname', nickname);
  formData.append('introduction', introduction);
  formData.append('profilePicture', profilePicture);

  const response = await instance.patch(`/users/:userId`, formData);

  return response;
};

export function usePatchUserInfo(nickname, introduction, profilePicture) {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const queryClient = useQueryClient();

  return useMutation(
    () => patchUserInfo(nickname, introduction, profilePicture),
    {
      onSuccess: () => {
        alert('회원 정보가 수정되었습니다.');
        queryClient.invalidateQueries(['userInfo' + userId]);
        navigate(ROUTE.MY_PAGE.link);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      },

      onError: (error) => {
        alert(error.response.data.error + '회원정보 수정을 할 수 없습니다.');
      },
    },
  );
}
