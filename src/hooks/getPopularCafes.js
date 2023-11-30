import { instance } from '.';
import { useQuery } from 'react-query';

const getPopularCafes = async () => {
  try {
    const response = await instance.get(`/cafes/rating`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch popular cafes: ${error.message}`);
  }
};

export function useGetPolularCafes() {
  return useQuery(['popularCafes'], getPopularCafes, {
    onError: (error) => {
      console.error('Failed to fetch popular cafes:', error.message);
    },
  });
}
