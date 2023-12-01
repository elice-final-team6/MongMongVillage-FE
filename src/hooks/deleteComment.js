import { instance } from '.';
import { useMutation, useQueryClient } from 'react-query';
import { showAlert } from '../util/showAlert';

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
      showAlert('', '댓글이 삭제되었습니다.', 'success', () => {
        window.location.reload();
        queryClient.invalidateQueries(['myComments']);
      });
    },

    onError: (error) => {
      showAlert(
        '',
        error.response.data.error + '댓글을 삭제할 수 없습니다.',
        'error',
      );
    },
  });
}
