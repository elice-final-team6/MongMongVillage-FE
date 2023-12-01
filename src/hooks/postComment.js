import { instance } from '.';
import { useMutation, useQueryClient } from 'react-query';
import { showAlert } from '../util/showAlert';

const postComment = async (content, boardId) => {
  const response = await instance.post(`/comments/boards/${boardId}`, {
    content,
  });

  return response;
};

export function usePostComment(content, boardId) {
  const queryClient = useQueryClient();

  return useMutation(() => postComment(content, boardId), {
    onError: (error) => {
      console.error(error);
      showAlert('', '로그인 후 댓글을 작성해주세요.', 'success');
    },

    onSettled: () => {
      queryClient.invalidateQueries(['myLike']);
    },
  });
}
