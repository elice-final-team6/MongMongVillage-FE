import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { ROUTE } from '../routes/Routes';
import { showAlert } from '../util/showAlert';

const postBoard = async (category, title, content, images) => {
  const formData = new FormData();
  images.forEach((image) => {
    formData.append('images', image);
  });
  formData.append('category', category);
  formData.append('title', title);
  formData.append('content', content);

  const response = await instance.post(`/boards/`, formData, {});

  return response;
};

export function usePostBoard(category, title, content, images) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(() => postBoard(category, title, content, images), {
    onSuccess: (response) => {
      showAlert('', '게시글이 성공적으로 작성되었습니다.', 'success', () => {
        navigate(
          `${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${response.data.board_id}`,
        );

        window.scrollTo(0, 0);
      });
    },

    onError: (error) => {
      console.error(error);
      showAlert(
        '',
        error.response.data.message + '로그인이 필요합니다.',
        'error',
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries(['myBoards']);
    },
  });
}
