import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
// import { ROUTE } from '../routes/Routes';

const putBoardLike = async (boardId) => {
  const token = localStorage.getItem('token');

  console.log(boardId);

  const response = await instance.put(
    `/boards/${boardId}/liked`,
    { boardId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response;
};

export function usePutBoardLike(boardId) {
  const navigate = useNavigate();
  console.log(boardId);

  console.log(boardId);
  return useMutation(() => putBoardLike(boardId), {
    onSuccess: (response) => {
      console.log('좋아요 변경 완료 - ', boardId);
    },

    onError: (error) => {
      alert(error.response.data.message);
    },
  });
}
