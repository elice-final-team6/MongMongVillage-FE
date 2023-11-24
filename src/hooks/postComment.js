import { instance } from '.';
// import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
// import { ROUTE } from '../routes/Routes';

const postComment = async (content, boardId) => {
  const token = sessionStorage.getItem('token');

  const response = await instance.post(
    `/comments/boards/${boardId}`,
    { content },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response;
};

export function usePostComment(content, boardId) {
  //   const navigate = useNavigate();

  return useMutation(() => postComment(content, boardId), {
    onSuccess: (response) => {
      alert('댓글 작성 완료');
    },

    onError: (error) => {
      console.log(error);
      alert(error);
    },
  });
}
