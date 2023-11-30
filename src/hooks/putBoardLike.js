import { instance } from '.';
import { useMutation, useQueryClient } from 'react-query';

const putBoardLike = async (boardId) => {
  const response = await instance.put(`/boards/${boardId}/liked`, { boardId });

  if (response) {
    return response;
  }
};

export function usePutBoardLike(boardId) {
  const queryClient = useQueryClient();

  return useMutation(() => putBoardLike(boardId), {
    onError: () => {
      alert('로그인 후 좋아요 기능을 이용해주세요.');
    },

    onSuccess: (response) => {
      console.log(response);
      queryClient.invalidateQueries(['myLike']);
    },
  });
}
