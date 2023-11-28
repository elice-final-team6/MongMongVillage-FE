import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation, useQueryClient } from 'react-query';
import { ROUTE } from '../routes/Routes';

const deleteBoard = async (boardId) => {
  const response = await instance.delete(`/boards/${boardId}`, {});

  return response;
};

export function useDeleteBoard(boardId) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(() => deleteBoard(boardId), {
    onSuccess: () => {
      alert('게시글이 삭제되었습니다.');
      navigate(ROUTE.COMMUNITY_PAGE.link);
      window.scrollTo(0, 0);
    },
    onError: (error) => {
      alert(error.response.data.error + '게시글을 삭제할 수 없습니다.');
    },
    onSettled: () => {
      queryClient.invalidateQueries(['myBoards']);
    },
  });
}
