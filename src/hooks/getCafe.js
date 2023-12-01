import { instance } from '.';
import { useQuery } from 'react-query';
import { showAlert } from '../util/showAlert';

const getCafe = async (id) => {
  const response = await instance.get(`/cafes/${id}`);
  if (response?.data) return response.data;
};

export function useGetCafe(id) {
  return useQuery(['getCafe' + id], () => getCafe(id), {
    onError: (error) => {
      showAlert('', '카페 데이터를 불러올 수 없습니다.', 'error', () => {
        window.history.back();
      });
    },
  });
}
