import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { ROUTE } from '../routes/Routes';

const postReview = async (title, content, rating, images, cafe_id) => {
  const formData = new FormData();
  images.forEach((image) => {
    formData.append('images', image);
  });
  formData.append('title', title);
  formData.append('content', content);
  formData.append('rating', rating);
  formData.append('cafe_id', cafe_id);

  const response = await instance.post(`/reviews/`, formData);

  return response;
};

export function usePostReview(title, content, rating, images, cafe_id) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(
    () => postReview(title, content, rating, images, cafe_id),
    {
      onSuccess: () => {
        alert('리뷰가 정상적으로 등록되었습니다.');
        navigate(ROUTE.REVIEW_LIST_PAGE.link);
      },

      onError: (error) => {
        console.error(error);
        alert(error.response.data.message);
      },

      onSettled: () => {
        queryClient.invalidateQueries(['getReviews']);
      },
    },
  );
}
