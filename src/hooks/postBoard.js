import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const postBoard = async (category, title, content, imageFile) => {
  const token = sessionStorage.getItem('token');

  const formData = new FormData();
  formData.append('image', imageFile);
  formData.append('title', title);
  formData.append('content', content);
  formData.append('category', category);

  const response = await instance.post(`/boards/`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data', // FormData를 사용하는 경우
    },
  });

  return response;
};

export function usePostBoard() {
  const navigate = useNavigate();
  return useMutation(() => postBoard(), {
    onSuccess: (response) => {
      console.log('response data : ', response.data);
      navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${response.data.board_id}`);
      alert('게시글 작성 완료');
    },

    onError: (error) => {
      console.log(error);
      alert(error.response.data.message);
    },
  });
}
