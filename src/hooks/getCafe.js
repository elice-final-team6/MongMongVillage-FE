import { instance } from '.';
import { useQuery } from 'react-query';

const getCafe = async (id) => {
  const response = await instance.get(`/cafes/${id}`);
  if (response?.data) return response.data;
};

export function useGetCafe(id) {
  return useQuery(['getCafe' + id], () => getCafe(id), {
    onError: (error) => {
      console.error(error);
    },
  });
}
