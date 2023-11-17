import { MainPage, LoginPage, CafeMapPage, CafeDetailPage, SignUpPage, CommunityPage, CommunityDetailPage, NewPostPage } from '../pages';
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
  
  CAFE_MAP_PAGE: {
    path: '/cafemap',
    link: '/cafemap',
    element: <CafeMapPage />,
  },
  CAFE_DETAIL_PAGE: {
    path: '/cafedetail',
    link: '/catedetail',
    element: <CafeDetailPage />,
    
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
    path: '/community/newpost',
    link: '/community/newpost',
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
  }
};

export const ROUTE_ARR = Object.values(ROUTE);