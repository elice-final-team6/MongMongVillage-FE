import {
  SignUpPage,
  CommunityPage,
  MainPage,
  LoginPage,
  MyPage,
  MyActivityPage,
  MyInfoEditPage,
  NewPostPage,
  CafeDetailPage,
  CafeMapPage,
  ReviewListPage,
  ReviewDetail,
  CommunityDetailPage,
  ReviewWritePage,
} from '../pages';

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
    link: '/cafedetail',
    element: <CafeDetailPage />,
  },

  COMMUNITY_PAGE: {
    path: '/community',
    link: '/community',
    element: <CommunityPage />,
  },

  COMMUNITY_DETAIL_PAGE: {
    path: '/community/:id',
    link: '/community',
    element: <CommunityDetailPage />,
  },

  NEW_POST_PAGE: {
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
  },

  REVIEW_LIST_PAGE: {
    path: '/review',
    link: '/review',
    element: <ReviewListPage />,
  },

  REVIEW_WRITE_PAGE: {
    path: '/review/write',
    link: '/review/write',
    element: <ReviewWritePage />,
  },

  REVIEW_DETAIL_PAGE: {
    path: '/review/detail/:id',
    link: '/review/detail',
    element: <ReviewDetail />,
  },

  MY_INFO_EDIT_PAGE: {
    path: '/mypage/info-edit',
    link: '/mypage/info-edit',
    element: <MyInfoEditPage />,
  },

  MY_ACTIVITY_PAGE: {
    path: '/mypage/activity',
    link: '/mypage/activity',
    element: <MyActivityPage />,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
