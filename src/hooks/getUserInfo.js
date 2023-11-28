import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useQuery } from 'react-query';
import { ROUTE } from '../routes/Routes';

const getUserInfo = async (user_id) => {
  if (user_id) {
    const response = await instance.get(`/users/${user_id}`);

    if (response?.data?.data) return response.data.data;
  }
};

export function useGetUserInfo(user_id) {
  const navigate = useNavigate();

  return useQuery(['userInfo' + user_id], () => getUserInfo(user_id), {
    onError: (error) => {
      alert(error.response.data.error + '회원조회를 할 수 없습니다.');
      navigate(ROUTE.MAIN_PAGE.link);
    },
  });
}
