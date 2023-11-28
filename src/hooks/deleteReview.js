import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const deleteReview = async (reviewId) => {
  const response = await instance.delete(`/reviews/${reviewId}`);

  return response;
};

export function useDeleteReview(reviewId) {
  const navigate = useNavigate();

  return useMutation(() => deleteReview(reviewId), {
    onSuccess: () => {
      alert('리뷰가 삭제되었습니다.');
      navigate(ROUTE.REVIEW_LIST_PAGE.link);
    },
    onError: (error) => {
      alert(error.message + '리뷰삭제 실패');
    },
  });
}
