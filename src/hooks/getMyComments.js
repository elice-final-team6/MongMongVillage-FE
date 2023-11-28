import { instance } from '.';
import { useQuery } from 'react-query';

const getMyComments = async () => {
  const response = await instance.get(`/comments/mypage/user`);

  if (response.data?.comments) {
    return response.data.comments;
  } else {
    return [];
  }
};

export function useGetMyComments() {
  return useQuery(['myComments'], () => getMyComments(), {});
}
