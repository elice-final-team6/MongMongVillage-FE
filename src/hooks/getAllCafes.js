import { instance } from '.';
import { useMutation } from 'react-query';

const getAllCafes = async () => {
  try {
    const response = await instance.get('/cafes');
    console.log(response.data);
    if (response?.data) return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch All Cafes: ${error.message}`);
  }
};

export function useGetAllCafes() {
  return useMutation(() => getAllCafes(), {
    onSuccess: (data) => {
      console.log('AllCafes fetched successfully:', data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
}
