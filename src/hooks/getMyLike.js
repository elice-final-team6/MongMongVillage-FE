import { instance } from '.';
import { useQuery } from 'react-query';

const getMyLike = async () => {
  const response = await instance.get(`/boards/mypage/user/liked`);
  if (response.data?.liked) return response.data.liked;
};

export function useGetMyLike() {
  const userId = localStorage.getItem('userId');

  return useQuery(['myLike'], () => getMyLike(), {
    enabled: !!userId,
    onError: (error) => {
      alert(error, '내 좋아요 조회를 할 수 없습니다.');
    },
  });
}
