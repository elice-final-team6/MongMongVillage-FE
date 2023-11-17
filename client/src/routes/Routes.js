import {
  SignUpPage,
  CommunityPage,
  MainPage,
  LoginPage,
  CommunityDetailPage,
  NewPostPage,
} from '../pages';
import { MyPage } from '../pages/MyPage';

export const ROUTE = {
  MAIN_PAGE: {
    path: '/',
    link: '/',
    element: <MainPage />,
  },
  LOGIN_PAGE: {
    path: '/login',
    link: '/login',
    element: <LoginPage />,
  },
  COMMUNITY_PAGE: {
    path: '/community',
    link: '/community',
    element: <CommunityPage />,
  },
  COMMUNITY_DETAIL_PAGE: {
    path: '/community/:id',
    link: '/community/:id',
    element: <CommunityDetailPage />,
  },
  New_Post_Page: {
    path: '/newpost',
    link: '/newpost',
    element: <NewPostPage />,
  },
  SIGNUP_PAGE: {
    path: '/signUp',
    link: '/signUp',
    element: <SignUpPage />,
  },
  MY_PAGE: {
    path: '/mypage',
    link: '/mypage',
    element: <MyPage />,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
