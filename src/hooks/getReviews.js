import { instance } from '.';
import { useQuery } from 'react-query';

const getReviews = async () => {
  const response = await instance.get(`/reviews`);
  if (response?.data?.data) return response.data.data;
};

export function useGetReviews() {
  return useQuery(['getReviews'], () => getReviews(), {
    onError: (error) => {
      alert(error);
    },
  });
}
