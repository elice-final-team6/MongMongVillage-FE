import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const patchBoard = async (category, content, title, boardId, images) => {
  const token = localStorage.getItem('token');
  // console.log(
  //   `이미지들 : ${images}, 아이디 : ${boardId}, 타이틀 : ${title}, 콘텐츠 : ${content}, 카테고리 : ${category}`,
  // );

  const formData = new FormData();
  formData.append('category', category);
  images.forEach((image) => {
    formData.append('images', image);
  });
  formData.append('title', title);
  formData.append('content', content);
  formData.append('_id', boardId);

  const response = await instance.patch(`/boards/${boardId}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });

  return response;
};

export function usePatchBoard(category, content, title, boardId, images) {
  const navigate = useNavigate();

  return useMutation(
    () => patchBoard(category, content, title, boardId, images),
    {
      onSuccess: (response) => {
        alert('수정이 완료되었습니다.');
        navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${boardId}`);
        window.scrollTo(0, 0);
      },
      onError: (error) => {
        console.log(
          `이미지들 : ${images}, 아이디 : ${boardId}, 타이틀 : ${title}, 콘텐츠 : ${content}, 카테고리 : ${category}`,
        );
        alert(error.response.data.error + '게시글을 수정 할 수 없습니다.');
      },
    },
  );
}
