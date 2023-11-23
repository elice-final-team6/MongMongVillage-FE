import { instance } from '.';
import { useMutation } from 'react-query';

const getDetailBoard = async (id) => {
  try {
    let url = '/boards';
    // console.log('board id : ', id);

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

export function useGetDetailBoards(id) {
  // console.log(id);
  return useMutation(() => getDetailBoard(id), {
    onSuccess: (data) => {
      console.log('Detail Boards fetched successfully:', data);
    },
    onError: (error) => {
      console.error('Failed to fetch Detail Board:', error.message);
    },
  });
}
