import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { ROUTE } from '../routes/Routes';
import { showAlert } from '../util/showAlert';

const patchReview = async (id, title, content, rating, images) => {
  const formData = new FormData();
  images.forEach((image) => {
    formData.append('images', image);
  });
  formData.append('title', title);
  formData.append('content', content);
  formData.append('rating', rating);

  const response = await instance.patch(`/reviews/${id}`, formData, {});

  if (response) return response;
};

export function usePatchReview(id, title, content, rating, images) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(() => patchReview(id, title, content, rating, images), {
    onSuccess: () => {
      showAlert('', '리뷰가 수정되었습니다.', 'success', () => {
        navigate(ROUTE.REVIEW_DETAIL_PAGE.link + `/${id}`);
        window.scrollTo({ top: 0, left: 0 });
      });
    },

    onError: (error) => {
      alert(error.response.data.message);
      showAlert(
        '',
        error.response.data.message + '리뷰를 수정할 수 없습니다.',
        'error',
        () => {},
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries(['getReviews', 'latest', 1]);
      queryClient.invalidateQueries(['getReview' + id]);
      queryClient.invalidateQueries(['myReviews']);
    },
  });
}
