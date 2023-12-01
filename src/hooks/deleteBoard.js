import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation, useQueryClient } from 'react-query';
import { ROUTE } from '../routes/Routes';
import { showAlert } from '../util/showAlert';

const deleteBoard = async (boardId) => {
  const response = await instance.delete(`/boards/${boardId}`, {});

  return response;
};

export function useDeleteBoard(boardId) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(() => deleteBoard(boardId), {
    onSuccess: () => {
      showAlert('', '게시글이 삭제되었습니다.', 'success', () => {
        navigate(ROUTE.COMMUNITY_PAGE.link);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        queryClient.invalidateQueries(['myBoards']);
      });
    },

    onError: (error) => {
      showAlert(
        '',
        error.response.data.error + '게시글을 삭제할 수 없습니다.',
        'error',
        () => {},
      );
    },
  });
}
