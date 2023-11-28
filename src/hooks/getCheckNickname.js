import { instance } from '.';

export const useGetCheckNickname = async (nickname) => {
  try {
    const response = await instance.get(`/users/check-nickname/${nickname}`);
    if (response?.data?.data) return response.data.data.isDuplicate;
  } catch (error) {
    console.error('Error checking nickname:', error);
    // 에러 처리
  }
};
