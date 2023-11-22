import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CommunityNav,
  CommunitySelectSort,
  CommunitySearchAndPost,
  CommunityList,
  CommunityPagination,
} from '../../components';
import { ROUTE } from '../../routes/Routes';
import { Container } from './CommunityPage.styles';
import { CommunityCategory } from '../../libs';

// 카테고리 객체
const CATEGORY_DIC = CommunityCategory;
// 페이지네이션 페이지 당 아이템 수
const ITEMS_PER_PAGE = 4;

const CommunityPage = () => {
  // navigate 객체 생성
  const navigate = useNavigate();
  // 목 데이터
  const [list, setList] = useState([
    {
      id: 1,
      category: 'free',
      title: '강아지 훈련',
      content: '강아지 훈련을 위해 훈련소를 방문했어요',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '김은혜',
          text: '여기 최고네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 10,
      time: '2023-11-11 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 2,
      category: 'free',
      title: '애견카페 방문',
      content: '예쁜 애견카페를 방문했어요',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '김은혜',
          text: '여기 최고네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 6,
      time: '2023-11-12 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 3,
      category: 'question',
      title: '강아지 미용실 추천해주실 수 있나요?',
      content: '미용 잘 하는 곳 추천해주세요.',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '김은혜',
          text: '여기 최고네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 12,
      time: '2023-11-17 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 4,
      category: 'question',
      title: '안양천 강아지 놀이터 어디가 좋은가요?',
      content:
        '서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요?',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '김은혜',
          text: '여기 최고네요.',
          time: '2023-11-10 12:20:30',
        },
      ],
      like: 15,
      time: '2023-11-14 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 5,
      category: 'info',
      title: '목동 강아지 놀이터 정보 공유',
      content:
        '목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요.목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요.목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요.',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          userImg:
            'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '박은혜',
          userImg:
            'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
          text: '여기 아주 마음에 드는 강아지 놀이터네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 0,
      time: '2023-11-15 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 6,
      category: 'free',
      title: '강아지 훈련',
      content: '강아지 훈련을 위해 훈련소를 방문했어요',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '김은혜',
          text: '여기 최고네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 10,
      time: '2023-11-11 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 7,
      category: 'free',
      title: '애견카페 방문',
      content: '예쁜 애견카페를 방문했어요',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '김은혜',
          text: '여기 최고네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 6,
      time: '2023-11-12 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 8,
      category: 'question',
      title: '강아지 미용실 추천해주실 수 있나요?',
      content: '미용 잘 하는 곳 추천해주세요.',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '김은혜',
          text: '여기 최고네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 12,
      time: '2023-11-17 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 9,
      category: 'question',
      title: '안양천 강아지 놀이터 어디가 좋은가요?',
      content:
        '서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요?',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '김은혜',
          text: '여기 최고네요.',
          time: '2023-11-10 12:20:30',
        },
      ],
      like: 15,
      time: '2023-11-14 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 10,
      category: 'info',
      title: '목동 강아지 놀이터 정보 공유',
      content:
        '목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요.목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요.목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요.',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          userImg:
            'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '박은혜',
          userImg:
            'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
          text: '여기 아주 마음에 드는 강아지 놀이터네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 0,
      time: '2023-11-15 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 11,
      category: 'free',
      title: '강아지 훈련',
      content: '강아지 훈련을 위해 훈련소를 방문했어요',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '김은혜',
          text: '여기 최고네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 10,
      time: '2023-11-11 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 12,
      category: 'free',
      title: '애견카페 방문',
      content: '예쁜 애견카페를 방문했어요',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '김은혜',
          text: '여기 최고네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 6,
      time: '2023-11-12 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 13,
      category: 'question',
      title: '강아지 미용실 추천해주실 수 있나요?',
      content: '미용 잘 하는 곳 추천해주세요.',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '김은혜',
          text: '여기 최고네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 12,
      time: '2023-11-17 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 14,
      category: 'question',
      title: '안양천 강아지 놀이터 어디가 좋은가요?',
      content:
        '서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요?',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '김은혜',
          text: '여기 최고네요.',
          time: '2023-11-10 12:20:30',
        },
      ],
      like: 15,
      time: '2023-11-14 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 15,
      category: 'info',
      title: '목동 강아지 놀이터 정보 공유',
      content:
        '목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요.목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요.목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요.',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          userImg:
            'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '박은혜',
          userImg:
            'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
          text: '여기 아주 마음에 드는 강아지 놀이터네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 0,
      time: '2023-11-15 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 16,
      category: 'free',
      title: '강아지 훈련',
      content: '강아지 훈련을 위해 훈련소를 방문했어요',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '김은혜',
          text: '여기 최고네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 10,
      time: '2023-11-11 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 17,
      category: 'free',
      title: '애견카페 방문',
      content: '예쁜 애견카페를 방문했어요',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '김은혜',
          text: '여기 최고네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 6,
      time: '2023-11-12 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 18,
      category: 'question',
      title: '강아지 미용실 추천해주실 수 있나요?',
      content: '미용 잘 하는 곳 추천해주세요.',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '김은혜',
          text: '여기 최고네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 12,
      time: '2023-11-17 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 19,
      category: 'question',
      title: '안양천 강아지 놀이터 어디가 좋은가요?',
      content:
        '서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요?',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '김은혜',
          text: '여기 최고네요.',
          time: '2023-11-10 12:20:30',
        },
      ],
      like: 15,
      time: '2023-11-14 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 20,
      category: 'info',
      title: '목동 강아지 놀이터 정보 공유',
      content:
        '목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요.목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요.목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요.',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          userImg:
            'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '박은혜',
          userImg:
            'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
          text: '여기 아주 마음에 드는 강아지 놀이터네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 0,
      time: '2023-11-15 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
  ]);

  // 정렬을 위해 list 복사한 state
  // !!! 초기값으로 서버로부터 받아온 리스트 넣어줘야함
  const [filteredList, setFilteredList] = useState(list);

  // 최신순, 인기순 정렬 옵션 state
  const [sortOption, setSortOption] = useState('latest');

  // 카테고리 filtered state
  const [filteredCategory, setFilteredCategory] = useState(CATEGORY_DIC.all);

  // 검색 기능을 위한 state
  const [searchTerm, setSearchTerm] = useState('');

  // 페이지네이션 관련 기능 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  // 현재 페이지 상태
  const [currentPage, setCurrentPage] = useState(1);
  // 시작 인덱스와 끝 인덱스 계산
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // 정렬 함수
  const sortedList = () => {
    // window.scrollTo(0, 0);
    // 받아온 글 목록 list 복제
    let filteredListCopy = [...list];

    // 카테고리 먼저 정렬
    if (filteredCategory === CATEGORY_DIC.all) {
      filteredListCopy = list;
    } else if (filteredCategory === CATEGORY_DIC.free) {
      filteredListCopy = filteredListCopy.filter(
        (item) => item.category === filteredCategory,
      );
    } else if (filteredCategory === CATEGORY_DIC.info) {
      filteredListCopy = filteredListCopy.filter(
        (item) => item.category === filteredCategory,
      );
    } else if (filteredCategory === CATEGORY_DIC.question) {
      filteredListCopy = filteredListCopy.filter(
        (item) => item.category === filteredCategory,
      );
    }

    // 인기순, 최신순 정렬
    if (sortOption === 'popular') {
      setFilteredList([...filteredListCopy].sort((a, b) => b.like - a.like));
    } else {
      setFilteredList(
        [...filteredListCopy].sort(
          (a, b) => new Date(b.time) - new Date(a.time),
        ),
      );
    }

    // 검색어에 따라 set
    if (searchTerm) {
      const searchTermLowerCase = searchTerm.toLowerCase();
      setFilteredList((prevList) =>
        prevList.filter((item) =>
          item.title.toLowerCase().includes(searchTermLowerCase),
        ),
      );
    }
  };

  // 컴포넌트가 마운트될 때와 sortOption, filteredCategory, searchTerm 변경될 때마다 정렬 수행
  useEffect(() => {
    sortedList();
  }, [sortOption, filteredCategory, searchTerm]);

  // 검색창 input을 입력받는 onChange 핸들러
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // 카테고리 선택 onChange 핸들러
  const handleNavClick = (category) => {
    setFilteredCategory(category);
    // 카테고리 변경 시 1페이지로 전환해줌
    setCurrentPage(1);
  };

  // 정렬 onChange 핸들러
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    sortedList();
  };

  // id 값을 params로 넘겨줄 함수 - detail 페이지로 정보 넘겨주기
  // 글작성 클릭시 실행 함수
  const handleNewPostClick = () => {
    navigate(ROUTE.NEW_POST_PAGE.link);
    // navigate('/community/newpost');
    window.scrollTo(0, 0);
  };

  // 현재 페이지에 표시될 아이템들
  const currentPageItems = filteredList.slice(startIndex, endIndex);
  // 전체 페이지 수 계산
  const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);

  // 이전 페이지로 이동하는 함수
  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  // 다음 페이지로 이동하는 함수
  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  // 해당 페이지로 설정 함수
  const goToPage = (page) => {
    setCurrentPage(page);
    sortedList();
    // !!! 서버로부터 현재 CurrentPage 와 일치하는 페이지 요청해서 받아오도록 해야함
  };

  // 각 게시글 클릭시 실행 함수
  const handlePostClick = (postId) => {
    navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${postId}`, {
      state: { filteredList: filteredList },
    });
    window.scrollTo(0, 0);
  };

  // 리스트의 작성자 사진을 누르면 해당 유저의 페이지로 이동
  // const handleUserClick = (userId) => {
  //   navigate(`${ROUTE.ㅡㅡㅡㅡ.link}/${userId}`);
  // }

  return (
    <Container>
      <CommunityNav
        category={filteredCategory}
        handleNavClick={handleNavClick}
      ></CommunityNav>

      <CommunitySelectSort
        sortOption={sortOption}
        handleSortChange={handleSortChange}
      ></CommunitySelectSort>

      <CommunityList
        currentPageItems={currentPageItems}
        handlePostClick={handlePostClick}
        // handleUserClick={handleUserClick}
      ></CommunityList>

      <CommunitySearchAndPost
        handleSearchInputChange={handleSearchInputChange}
        handleNewPostClick={handleNewPostClick}
      ></CommunitySearchAndPost>

      <CommunityPagination
        currentPage={currentPage}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        currentPageItems={currentPageItems}
        totalPages={totalPages}
        startIndex={startIndex}
        endIndex={endIndex}
        goToPage={goToPage}
      ></CommunityPagination>
    </Container>
  );
};

export default CommunityPage;
