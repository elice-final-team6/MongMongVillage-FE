import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { ROUTE } from '../routes/Routes';

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
      navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${response.data.board_id}`);
      alert('게시글 작성 완료');
      window.scrollTo(0, 0);
    },

    onError: (error) => {
      console.error(error);
      alert(error.response.data.message, '로그인이 필요합니다.');
    },

    onSettled: () => {
      queryClient.invalidateQueries(['myBoards']);
    },
  });
}
