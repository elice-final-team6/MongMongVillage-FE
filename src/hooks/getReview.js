import { instance } from '.';
import { useQuery } from 'react-query';
import { showAlert } from '../util/showAlert';

const getReview = async (id) => {
  try {
    const response = await instance.get(`/reviews/${id}`);
    if (response?.data?.data?.review) {
      return response.data.data.review;
    } else {
      throw new Error('No review data found');
    }
  } catch (error) {
    throw error;
  }
};

export function useGetReview(id) {
  return useQuery(['getReview' + id], () => getReview(id), {
    retry: false,
    onError: () => {
      showAlert('', '존재하지 않는 데이터입니다.', 'warning', () =>
        window.history.back(),
      );
    },
  });
}
