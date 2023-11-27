import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_DB_API_ENDPOINT,
});

export * from './postSignUp';
export * from './getBoards';
export * from './getDetailBoard';
export * from './getCommunitySearch';
export * from './getBestContents';
export * from './postLogin';
export * from './getUserInfo';
export * from './deleteUser';
export * from './patchUserInfo';
export * from './getReviews';
export * from './getReview';
export * from './postReview';
export * from './putReview';
export * from './patchBoard';
export * from './deleteBoard';
export * from './postComment';
export * from './postBoard';
export * from './putBoardLike';
