import { instance } from '.';
import { useQuery } from 'react-query';

const getReviews = async (sortType = 'latest', page = 1) => {
  const response = await instance.get(
    `/reviews?sortBy=${sortType}&page=${page}`,
  );

  if (response?.data?.data) {
    return response.data.data;
  }
};

export function useGetReviews(sortType, page) {
  return useQuery(
    ['getReviews', sortType, page],
    () => getReviews(sortType, page),
    { keepPreviousData: true },
    {
      onError: (error) => {
        alert(error);
      },
    },
  );
}
