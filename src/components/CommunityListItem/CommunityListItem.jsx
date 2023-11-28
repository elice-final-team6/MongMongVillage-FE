import { CommunityCategory } from '../../libs/CommunityCategory.js';
import { FaCircleUser } from 'react-icons/fa6';
import { useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import {
  Container,
  PostImg,
  TopContainer,
  Writer,
  BottomContainer,
  Title,
  DateText,
  LeftContainer,
  RightContainer,
  Count,
  Category,
  Content,
} from './CommunityListItem.styles.js';

const CommunityListItem = ({
  item,
  handlePostClick,
  totalPages,
  //  handleUserClick,
}) => {
  return (
    <Container
      key={item._id}
      onClick={() => {
        handlePostClick(item._id);
      }}
    >
      <LeftContainer>
        <TopContainer
          onClick={() => {
            handlePostClick(item._id);
          }}
        >
          <div className="TitleAndCategory">
            <Category>{item.category}</Category>
            <Title>{item.title}</Title>
          </div>
          <Content>{item.content}</Content>
        </TopContainer>
        <BottomContainer>
          <Writer
          // onClick={() => {
          //   handleUserClick(item.user.id);
          // }}
          >
            {item.profilePicture ? (
              <img alt="유저프로필이미지" src={item.profilePicture} />
            ) : (
              <img
                src={`${`${process.env.PUBLIC_URL}/imges/user.png`}`}
                alt="user_img"
              />
            )}
            <span>{item.user_id.nickname}</span>
          </Writer>
          <Count>댓글 : {item.comment_id.length}</Count>
          <Count>
            <FaHeart color="red" size={'20px'} /> {item.like_count}
          </Count>
          <DateText>{new Date(item.createdAt).toLocaleString()} 작성</DateText>
        </BottomContainer>
      </LeftContainer>
      <RightContainer>
        <PostImg
          onClick={() => {
            handlePostClick(item._id);
          }}
          src={item.images[0] ? item.images[0] : '../imges/default.png'}
          alt="메인이미지"
        />
      </RightContainer>
    </Container>
  );
};

export default CommunityListItem;
