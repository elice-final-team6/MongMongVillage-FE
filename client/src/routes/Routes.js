import { SignUpPage, CommunityPage, MainPage, LoginPage } from '../pages';
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
