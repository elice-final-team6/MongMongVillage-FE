import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import {
  CommunityList,
  CommunityPost,
  CommunityPostLike,
  CommunityUnderContent,
  CommunityComments,
  CommunityPagination,
  EditCommunityPostModal,
} from '../../components/index.js';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Container } from './CommunityDetailPage.styles.js';
import { ROUTE } from '../../routes/Routes.js';

const CommunityDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
  // params를 통해 id 값만 가져옴
  const { id } = useParams();
  // 해당 게시글 정보 저장
  const [selectedPost, setSelectedPost] = useState(
    list.find((post) => post.id === parseInt(id, 10)),
  );

  // id 값을 params로 넘겨줄 함수 - detail 페이지로 정보 넘겨주기
  const handlePostClick = (postId) => {
    setSelectedPost(list.find((post) => post.id === parseInt(postId, 10)));
    navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${postId}`, {
      state: { filteredList: filteredList },
    });
    // navigate(`/community/${postId}`);
    window.scrollTo(0, 0);
  };

  // 좋아요 눌렸는지 확인 state
  const [likeclick, setlikeclick] = useState(false);
  // 좋아요 눌렀을 때 실행되는 함수
  const handleLikeclick = (postId) => {
    const updateList = [...list];
    const selectedPostIndex = list.findIndex((post) => post.id === postId);

    console.log(likeclick);

    if (likeclick === false) {
      // 해당 게시글의 좋아요 + 1
      updateList[selectedPostIndex] = {
        ...selectedPost,
        like: selectedPost.like + 1,
      };
      setlikeclick(true);
      // 여기서 api 를 통해 내가 누른 좋아요 목록에 글을 추가해줘야 함
    } else {
      updateList[selectedPostIndex] = {
        ...selectedPost,
        like: selectedPost.like - 1,
      };
      setlikeclick(false);
    }

    setList(updateList);
  };

  // 페이지네이션 관련 기능 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  // 페이지네이션 페이지 당 아이템 수
  const ITEMS_PER_PAGE = 4;
  // 현재 페이지 상태
  const [currentPage, setCurrentPage] = useState(1);
  const { state } = location;
  const filteredList = state ? state.filteredList : [];

  // 현재 페이지에 표시될 아이템들
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
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
  };

  // 게시글 수정 함수
  const handleEdit = (post) => {
    navigate(`${ROUTE.EDIT_POST_PAGE.link}/${post.id}`);
    window.scrollTo(0, 0);
  };
  // 게시글 삭제 함수
  const handleDelete = (postId) => {
    // 삭제 관련 작업 수행
    alert('게시글이 삭제되었습니다.');
    navigate(ROUTE.COMMUNITY_PAGE.link);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // 좋아요 수가 변경될 때마다 해당 정보를 다시 받아옴
    const post = list.find((post) => post.id === parseInt(id, 10));
    if (post) {
      setSelectedPost(post);
    }
  }, [id, list]);

  return (
    <Container>
      {selectedPost && (
        <>
          <CommunityPost selectedPost={selectedPost} />
          <CommunityPostLike
            like={selectedPost.like}
            likeclick={likeclick}
            onClick={handleLikeclick}
          ></CommunityPostLike>
          <CommunityUnderContent
            /* 수정, 삭제 함수 만들어 props로 넘겨주고 기능 구현 필요*/
            selectedPost={selectedPost}
            onEdit={handleEdit}
            onDelete={handleDelete}
          ></CommunityUnderContent>
          <CommunityComments selectedPost={selectedPost}></CommunityComments>
        </>
      )}
      <CommunityList
        currentPageItems={currentPageItems}
        handlePostClick={handlePostClick}
      ></CommunityList>

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

export default CommunityDetailPage;
