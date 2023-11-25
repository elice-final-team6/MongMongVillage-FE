import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const postBoard = async (category, title, content, imageFile) => {
  const token = localStorage.getItem('token');

  const formData = new FormData();
  formData.append('category', category);
  formData.append('title', title);
  formData.append('content', content);
  if (imageFile) {
    formData.append('image', imageFile);
  }

  const response = await instance.post(`/boards/`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data', // FormData를 사용하는 경우
    },
  });

  return response;
};

export function usePostBoard(category, title, content, imageFile) {
  const navigate = useNavigate();
  return useMutation(() => postBoard(category, title, content, imageFile), {
    onSuccess: (response) => {
      console.log(category, title, content, imageFile);
      navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${response.data.board_id}`);
      alert('게시글 작성 완료');
      window.scrollTo(0, 0);
    },

    onError: (error) => {
      console.log(error);
      alert('로그인 후 작성해주세요.');
      // alert(error.response.data.message);
    },
  });
}
