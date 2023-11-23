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
