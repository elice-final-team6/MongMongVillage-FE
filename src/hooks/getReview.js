import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useQuery } from 'react-query';
import { ROUTE } from '../routes/Routes';

const getReview = async (id) => {
  const response = await instance.get(`/reviews/${id}`);
  if (response?.data?.data?.review) return response.data.data.review;
};

export function useGetReview(id) {
  const navigate = useNavigate();

  return useQuery(['getReview' + id], () => getReview(id), {
    onError: (error) => {
      alert('해당 리뷰 데이터가 존재하지 않습니다.');
      navigate(ROUTE.REVIEW_LIST_PAGE.link);
    },
  });
}
