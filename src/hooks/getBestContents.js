import { instance } from '.';
import { useQuery } from 'react-query';

const getBestContents = async () => {
  try {
    const response = await instance.get(`/boards/best`);

    if (response?.data?.boards) {
      return response?.data?.boards;
    }
  } catch (error) {
    throw new Error(`Failed to fetch best contents: ${error.message}`);
  }
};

export function useGetBestContents() {
  return useQuery(['bestContents'], () => getBestContents(), {
    onError: (error) => {
      console.error('Failed to fetch best contents:', error.message);
    },
  });
}
