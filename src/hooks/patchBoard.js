import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const patchBoard = async (boardId, title, content, category) => {
  const token = sessionStorage.getItem('token');

  const response = await instance.patch(
    `/boards/${boardId}`,
    {
      category: category,
      title: title,
      content: content,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response;
};

export function usePatchBoard(boardId, title, content, category) {
  const navigate = useNavigate();
  console.log(boardId);

  return useMutation(() => patchBoard(boardId, title, content, category), {
    onSuccess: (response) => {
      console.log(`게시글 수정 성공 : ${response}`);
      alert('수정이 완료되었습니다.');
      navigate(`${ROUTE.EDIT_POST_PAGE.link}/${boardId}`);
    },
    onError: (error) => {
      alert(error.response.data.error + '게시글을 수정 할 수 없습니다.');
    },
  });
}
