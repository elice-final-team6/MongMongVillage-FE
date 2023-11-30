import { instance } from '.';
import { useMutation } from 'react-query';

const getCommunitySearch = async (searchTerm, currentPage) => {
  try {
    let url = '/boards';

    // category가 주어진 경우 카테고리에 따라 경로를 설정
    if (searchTerm && currentPage) {
      url += `/search?content=${searchTerm}&currentPage=${currentPage}`;
    }

    const response = await instance.get(url);

    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch search Content: ${error.message}`);
  }
};

export function useGetCommunitySearch(searchTerm, currentPage) {
  return useMutation(() => getCommunitySearch(searchTerm, currentPage), {
    onError: (error) => {
      alert('검색된 게시글이 없습니다.');
      console.error('Failed to fetch search Content:', error.message);
    },
  });
}
