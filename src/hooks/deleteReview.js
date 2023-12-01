import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation, useQueryClient } from 'react-query';
import { ROUTE } from '../routes/Routes';
import { showAlert } from '../util/showAlert';

const deleteReview = async (reviewId) => {
  const response = await instance.delete(`/reviews/${reviewId}`);

  return response;
};

export function useDeleteReview(reviewId) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(() => deleteReview(reviewId), {
    onSuccess: () => {
      showAlert('', '리뷰가 삭제되었습니다.', 'success', () => {
        queryClient.invalidateQueries(
          ['getReviews', 'latest', 1],
          ['myReviews'],
        );
        navigate(ROUTE.REVIEW_LIST_PAGE.link);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      });
    },

    onError: (error) => {
      showAlert('', error.message + +'리뷰를 삭제할 수 없습니다.', 'error');
    },
  });
}
