import React, { useState, useEffect } from 'react';
import { Footer, Header } from '../../components';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Post,
  Comments,
  Category,
  Title,
  Content,
  Like,
  BTN,
  UnderContent,
  ContentButton,
  ContentInfo,
  ListContainer,
  PostComments,
} from './CommunityDetailPage.styles.js';

const CommunityDetailPage = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([
    {
      id: 1,
      category: 'free',
      title: '강아지 훈련',
      content: '강아지 훈련을 위해 훈련소를 방문했어요',
      user: '이은혜',
      userImg: '👮‍♀️',
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
      mainImg: './imges/img2.png',
    },
    {
      id: 2,
      category: 'free',
      title: '애견카페 방문',
      content: '예쁜 애견카페를 방문했어요',
      user: '이은혜',
      userImg: '👮‍♀️',
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
      mainImg: './imges/img1.png',
    },
    {
      id: 3,
      category: 'question',
      title: '강아지 미용실 추천해주실 수 있나요?',
      content: '미용 잘 하는 곳 추천해주세요.',
      user: '이은혜',
      userImg: '👮‍♀️',
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
      time: '2023-11-13 16:23:30',
      mainImg: './imges/img2.png',
    },
    {
      id: 4,
      category: 'question',
      title: '안양천 강아지 놀이터 어디가 좋은가요?',
      content:
        '서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요?',
      user: '이은혜',
      userImg: '👮‍♀️',
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
      like: 15,
      time: '2023-11-14 16:23:30',
      mainImg: './imges/img1.png',
    },
    {
      id: 5,
      category: 'info',
      title: '목동 강아지 놀이터 정보 공유',
      content:
        '목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요.',
      user: '이은혜',
      userImg: '👮‍♀️',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          userImg: '👮‍♀️',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '박은혜',
          userImg: '👮‍♀️',
          text: '여기 아주 마음에 드는 강아지 놀이터네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 0,
      time: '2023-11-15 16:23:30',
      mainImg: './imges/img2.png',
    },
  ]);

  // params를 통해 id 값만 가져옴
  const { id } = useParams();

  // 해당 게시글 정보 저장
  const [selectedPost, setSelectedPost] = useState(
    list.find((post) => post.id === parseInt(id, 10)),
  );

  useEffect(() => {
    // 좋아요 수가 변경될 때마다 해당 정보를 다시 받아옴
    setSelectedPost(list.find((post) => post.id === parseInt(id, 10)));

    // 확인용 console
    console.log(list, selectedPost);
  }, [id, list]);

  // id 값을 params로 넘겨줄 함수 - detail 페이지로 정보 넘겨주기
  const handlePostClick = (postId) => {
    setSelectedPost(list.find((post) => post.id === parseInt(postId, 10)));
    navigate(`/community/${postId}`);
    window.scrollTo(0, 0);
  };

  // 좋아요 눌렀을 때 실행되는 함수
  const handleLikeClick = (postId) => {
    const updateList = [...list];
    const selectedPostIndex = list.findIndex((post) => post.id === postId);
    updateList[selectedPostIndex] = {
      ...selectedPost,
      like: selectedPost.like + 1,
    };

    setList(updateList);
  };

  // 게시글 리스트 render
  const renderList = () => {
    // filteredList 로 뿌려줌
    return list.map((item) => (
      <div className="ListItem" key={item.id}>
        <div
          className="ContentAndImg"
          key={item.id}
          onClick={() => {
            handlePostClick(item.id);
          }}
          style={{ cursor: 'pointer' }}
        >
          <div>
            <h3>[ {item.category} ]</h3>
            <h4>{item.title}</h4>
            <p className="ellipsis">{item.content}</p>
          </div>
          <img
            src={item.mainImg}
            alt="메인이미지"
            style={{ maxWidth: '100%' }}
          />
        </div>
        <p>
          {item.userImg} {item.user} / 댓글 : {item.comment.length} / 좋아요 :
          {item.like} / 작성시간 : {item.time}
        </p>
      </div>
    ));
  };

  return (
    <Container>
      <Header />

      {selectedPost && (
        <>
          <Post>
            <Category>{selectedPost.category}</Category>
            <Title>{selectedPost.title}</Title>
            <div>{selectedPost.mainImg}</div>
            <Content>{selectedPost.content}</Content>
          </Post>

          <Like likeCount={selectedPost.like} onClick={handleLikeClick}>
            <div>👍</div>
            <p>{selectedPost.like}</p>
          </Like>

          <UnderContent>
            <ContentInfo>
              <div>{selectedPost.userImg}</div>
              <div>
                <p>{selectedPost.user}</p>
                <p>{selectedPost.time}</p>
              </div>
            </ContentInfo>
            <ContentButton>
              <BTN>수정</BTN>
              <BTN>삭제</BTN>
            </ContentButton>
          </UnderContent>

          <Comments>
            <p>댓글 {selectedPost.comment.length}</p>
            <div>
              <input
                style={{ width: '100%' }}
                placeholder="댓글을 입력해주세요."
              ></input>
              <BTN>등록</BTN>
            </div>
            <PostComments>
              {selectedPost.comment.map((com) => (
                <div key={com.id}>
                  <div className="CommentUser">
                    <p>{com.userImg}</p>
                    <p className="ComTitle">{com.writer}</p>
                  </div>
                  <p className="ComText">{com.text}</p>
                  <p className="ComTime">{com.time}</p>
                </div>
              ))}
            </PostComments>
          </Comments>
        </>
      )}

      <ListContainer>{renderList()}</ListContainer>

      <div> 페이지네이션 구현 </div>
      <Footer />
    </Container>
  );
};

export default CommunityDetailPage;
