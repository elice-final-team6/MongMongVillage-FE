import { instance } from '.';
import { useMutation, useQueryClient } from 'react-query';

const postComment = async (content, boardId) => {
  const response = await instance.post(`/comments/boards/${boardId}`, {
    content,
  });

  return response;
};

export function usePostComment(content, boardId) {
  const queryClient = useQueryClient();

  return useMutation(() => postComment(content, boardId), {
    onSuccess: () => {
      alert('댓글이 등록되었습니다.');
    },

    onError: (error) => {
      console.error(error);
      alert('로그인 후 댓글을 작성해주세요.');
    },

    onSettled: () => {
      queryClient.invalidateQueries(['myLike']);
    },
  });
}
