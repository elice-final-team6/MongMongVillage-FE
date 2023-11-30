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

  if (response?.data?.data) {
    return response?.data?.data;
  }
};

export function usePostReview(title, content, rating, images, cafe_id) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(
    () => postReview(title, content, rating, images, cafe_id),
    {
      onSuccess: (response) => {
        alert('리뷰가 정상적으로 등록되었습니다.');
        queryClient.invalidateQueries(
          ['getReviews', 'latest', 1],
          ['myReviews'],
        );
        navigate(ROUTE.REVIEW_DETAIL_PAGE.link + `/${response?._id}`);
        window.scrollTo({ top: 0, left: 0 });
      },

      onError: (error) => {
        console.error(error);
        alert(error.response.data.message);
      },
    },
  );
}
