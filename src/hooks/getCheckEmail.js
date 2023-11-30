import { instance } from '.';

export const getCheckEmail = async (email) => {
  try {
    const response = await instance.get(`/users/check-email/${email}`);
    if (response?.data?.data) return response.data.data.isDuplicate;
  } catch (error) {
    console.error('Error checking email:', error);
    // 에러 처리
  }
};
