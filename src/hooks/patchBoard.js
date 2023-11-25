import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const patchBoard = async (category, content, title, boardId) => {
  const token = sessionStorage.getItem('token');

  const response = await instance.patch(
    `/boards/${boardId}`,
    {
      category: category,
      content: content,
      title: title,
      // _id: boardId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response;
};

export function usePatchBoard(category, content, title, boardId) {
  const navigate = useNavigate();

  return useMutation(() => patchBoard(category, content, title, boardId), {
    onSuccess: (response) => {
      alert('수정이 완료되었습니다.');
      navigate(`${ROUTE.EDIT_POST_PAGE.link}/${boardId}`);
    },
    onError: (error) => {
      console.log(
        `아이디 : ${boardId}, 타이틀 : ${title}, 콘텐츠 : ${content}, 카테고리 : ${category}`,
      );
      alert(error.response.data.error + '게시글을 수정 할 수 없습니다.');
    },
  });
}
