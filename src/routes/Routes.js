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
  ReviewDetailPage,
  CommunityDetailPage,
  ReviewWritePage,
  EditPostPage,
  NotFoundPage,
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
    path: '/cafedetail/:id',
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
    path: '/review/write/:cafe_id',
    link: '/review/write',
    element: <ReviewWritePage />,
  },

  REVIEW_DETAIL_PAGE: {
    path: '/review/detail/:id',
    link: '/review/detail',
    element: <ReviewDetailPage />,
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

  EDIT_POST_PAGE: {
    path: '/community/edit/:id',
    link: '/community/edit',
    element: <EditPostPage />,
  },
  NOT_FOUND_PAGE: {
    path: '/*',
    element: <NotFoundPage />,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
