import { instance } from '.';
import { useMutation } from 'react-query';

const getBestContents = async () => {
  try {
    const response = await instance.get(`/boards/best`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch best contents: ${error.message}`);
  }
};

export function useGetBestContents() {
  return useMutation(getBestContents, {
    onSuccess: (data) => {
      console.log('Best contents fetched successfully:', data);
    },
    onError: (error) => {
      console.error('Failed to fetch best contents:', error.message);
    },
  });
}
