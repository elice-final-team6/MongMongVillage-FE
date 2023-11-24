import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const deleteBoard = async (boardId) => {
  const token = sessionStorage.getItem('token');

  const response = await instance.delete(`/boards/${boardId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export function useDeleteBoard(boardId) {
  const navigate = useNavigate();

  return useMutation(() => deleteBoard(boardId), {
    onSuccess: (response) => {
      // 삭제 성공 시 실행되는 로직
      alert('게시글이 삭제되었습니다.');
      navigate(ROUTE.COMMUNITY_PAGE.link);
      window.scrollTo(0, 0);
    },
    onError: (error) => {
      // 삭제 실패 시 실행되는 로직
      // 예: 에러 메시지를 알림창으로 표시
      alert(error.response.data.error + '게시글을 삭제할 수 없습니다.');
    },
  });
}
