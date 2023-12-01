import { instance } from '.';
import { useQuery } from 'react-query';
import { showAlert } from '../util/showAlert';

const getReviews = async (sortType = 'latest', page = 1) => {
  try {
    const response = await instance.get(
      `/reviews?sortBy=${sortType}&page=${page}`,
    );

    if (response?.data?.data) {
      return response.data.data;
    }
  } catch (error) {
    throw error;
  }
};

export function useGetReviews(sortType, page) {
  return useQuery(
    ['getReviews', sortType, page],
    () => getReviews(sortType, page),
    {
      keepPreviousData: true,
      retry: false,
      onError: (error) => {
        showAlert('', '리뷰 목록을 불러올 수 없습니다.', 'error', () => {
          window.history.back();
        });
      },
    },
  );
}
