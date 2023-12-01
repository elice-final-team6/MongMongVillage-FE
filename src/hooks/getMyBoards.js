import { instance } from '.';
import { useQuery } from 'react-query';
import { showAlert } from '../util/showAlert';

const getMyBoards = async () => {
  const response = await instance.get(`/boards/mypage/user`);
  return response.data.board;
};

export function useGetMyBoards() {
  return useQuery(['myBoards'], () => getMyBoards(), {
    onError: (error) => {
      showAlert(
        '',
        error + '내 게시물 조회를 할 수 없습니다.',
        'error',
        () => {},
      );
    },
  });
}
