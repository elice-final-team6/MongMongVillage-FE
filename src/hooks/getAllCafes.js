import { instance } from '.';
import { useMutation } from 'react-query';

const getAllCafes = async () => {
  try {
    const response = await instance.get('/cafes');
    if (response?.data) return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch All Cafes: ${error.message}`);
  }
};

export function useGetAllCafes() {
  return useMutation(() => getAllCafes(), {
    onError: (error) => {
      console.error(error);
    },
  });
}
