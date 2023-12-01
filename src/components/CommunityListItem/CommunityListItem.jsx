import { useState, useEffect } from 'react';
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
import { getRelativeTime } from '../../libs/getRelativeTime.js';

const CommunityListItem = ({
  item,
  handlePostClick,
  totalPages,
  //  handleUserClick,
}) => {
  const formattedContent = item.content.replace(/\n/g, '<br>');
  const [categoryKor, setCategoryKor] = useState('');

  useEffect(() => {
    if (item.category === 'info') {
      setCategoryKor('정보글');
    } else if (item.category === 'general') {
      setCategoryKor('자유글');
    } else {
      setCategoryKor('질문글');
    }
  }, [item.category]);

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
            <Category>
              <span>{categoryKor}</span>
            </Category>
            <Title>{item.title}</Title>
          </div>
          <Content dangerouslySetInnerHTML={{ __html: formattedContent }} />
        </TopContainer>
        <BottomContainer>
          <Writer
          // onClick={() => {
          //   handleUserClick(item.user.id);
          // }}
          >
            {item.user_id.profilePicture ? (
              <img src={item.user_id.profilePicture} alt="UserImg" />
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
          <DateText>{getRelativeTime(item?.createdAt)} 작성</DateText>
        </BottomContainer>
      </LeftContainer>
      <RightContainer>
        {item.images[0] ? (
          <PostImg
            onClick={() => {
              handlePostClick(item._id);
            }}
            src={item.images[0]}
            alt="메인이미지"
          />
        ) : (
          <></>
        )}
      </RightContainer>
    </Container>
  );
};

export default CommunityListItem;
