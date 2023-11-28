import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const postBoard = async (category, title, content, images) => {
  const token = localStorage.getItem('token');

  let formData = new FormData();
  formData.append('category', category);
  images.forEach((image) => {
    formData.append('images', image);
  });
  formData.append('title', title);
  formData.append('content', content);

  const response = await instance.post(`/boards/`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data', // FormData를 사용하는 경우
    },
  });

  return response;
};

export function usePostBoard(category, title, content, images) {
  // 여기까진 잘 나옴
  // console.log(category, title, content, images);
  const navigate = useNavigate();
  return useMutation(() => postBoard(category, title, content, images), {
    onSuccess: (response) => {
      navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${response.data.board_id}`);
      alert('게시글 작성 완료');
      window.scrollTo(0, 0);
    },

    onError: (error) => {
      console.log(error);
      alert('로그인 후 작성해주세요.');
      alert(error.response.data.message);
    },
  });
}
