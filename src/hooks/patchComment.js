import { instance } from '.';
import { useMutation, useQueryClient } from 'react-query';

const patchComment = async (commentId, BoardId, content) => {
  const response = await instance.patch(
    `/comments/${commentId}/boards/${BoardId}`,
    { content },
  );

  if (response) return response;
};

export function usePatchComment(commentId, BoardId, content) {
  const queryClient = useQueryClient();

  return useMutation(() => patchComment(commentId, BoardId, content), {
    onSuccess: () => {
      alert('댓글이 수정되었습니다.');
      queryClient.invalidateQueries(['myComments']);
    },

    onError: (error) => {
      alert(error.response + '댓글 수정을 할 수 없습니다.');
    },
  });
}
