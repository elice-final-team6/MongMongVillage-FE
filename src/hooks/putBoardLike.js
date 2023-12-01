import { instance } from '.';
import { useMutation, useQueryClient } from 'react-query';

const putBoardLike = async (boardId) => {
  const response = await instance.put(`/boards/${boardId}/liked`);

  if (response) {
    return response;
  }
};

export function usePutBoardLike(boardId) {
  const queryClient = useQueryClient();

  return useMutation(() => putBoardLike(boardId), {
    onError: (error) => {
      console.error(error);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(['myLike']);
    },
  });
}
