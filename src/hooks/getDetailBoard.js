import { instance } from '.';
import { useMutation } from 'react-query';

const getDetailBoard = async (id) => {
  try {
    let url = '/boards';
    // category가 주어진 경우 카테고리에 따라 경로를 설정
    if (id) {
      url += `/${id}`;
    }

    const response = await instance.get(url);

    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch Detail Board: ${error.message}`);
  }
};

export function useGetDetailBoard(id) {
  return useMutation(() => getDetailBoard(id), {
    onError: (error) => {
      console.error('Failed to fetch Detail Board:', error.message);
    },
  });
}
