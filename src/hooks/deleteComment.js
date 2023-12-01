import { instance } from '.';
import { useMutation, useQueryClient } from 'react-query';

const deleteComment = async (commentId, boardId) => {
  const response = await instance.delete(
    `/comments/${commentId}/boards/${boardId}`,
  );

  if (response) return response;
};

export function useDeleteComment(commentId, boardId) {
  const queryClient = useQueryClient();

  return useMutation(() => deleteComment(commentId, boardId), {
    onSuccess: () => {
      alert('댓글이 삭제되었습니다.');
      window.location.reload();
      queryClient.invalidateQueries(['myComments']);
    },

    onError: (error) => {
      alert(error.response + '댓글을 삭제할 수 없습니다.');
    },
  });
}
