import { instance } from '.';
import { useQuery } from 'react-query';

const getMyReviews = async () => {
  const response = await instance.get(`/reviews/mypage/user`);

  if (response?.data?.reviews) {
    return response.data?.reviews;
  }
};

export function useGetMyReviews() {
  return useQuery(['myReviews'], () => getMyReviews(), {
    onError: (error) => {
      alert(error, '내 리뷰 조회를 할 수 없습니다.');
    },
  });
}
