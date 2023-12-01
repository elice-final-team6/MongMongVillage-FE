import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation, useQueryClient } from 'react-query';
import { ROUTE } from '../routes/Routes';

const patchBoard = async (category, content, title, boardId, images) => {
  const formData = new FormData();
  formData.append('category', category);
  images.forEach((image) => {
    formData.append('images', image);
  });
  formData.append('title', title);
  formData.append('content', content);
  formData.append('_id', boardId);

  const response = await instance.patch(`/boards/${boardId}`, formData);

  return response;
};

export function usePatchBoard(category, content, title, boardId, images) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(
    () => patchBoard(category, content, title, boardId, images),
    {
      onSuccess: () => {
        alert('수정이 완료되었습니다.');
        navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${boardId}`);

        queryClient.invalidateQueries(['myBoards']);
        window.scrollTo(0, 0);
      },
      onError: (error) => {
        console.error(error);
        alert(error.response.data.error + '게시글을 수정 할 수 없습니다.');
      },
    },
  );
}
