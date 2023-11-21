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
} from './styles';
import { CommunityCategory } from '../../libs';
import { FaCircleUser } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';

const CommunityListItem = ({ item, handlePostClick }) => {
  console.log(item);
  return (
    <Container
      key={item.id}
      onClick={() => {
        handlePostClick(item.id);
      }}
    >
      <LeftContainer>
        <TopContainer>
          <Category>{item.category}</Category>
          <Title>{item.title}</Title>
          <Content>{item.content}</Content>
        </TopContainer>
        <BottomContainer>
          <Writer>
            {item.userImg ? (
              <img alt="유저프로필이미지" src={item.userImg} />
            ) : (
              <FaCircleUser size={'25px'} color="gray" />
            )}
            <span>{item.user}</span>
          </Writer>
          <Count>댓글 : {item.comment.length}</Count>
          <Count>
            <FaHeart color="red" size={'20px'} /> {item.like}
          </Count>
          <DateText>{item.time} 작성</DateText>
        </BottomContainer>
      </LeftContainer>
      <RightContainer>
        <PostImg src={item.mainImg} alt="메인이미지" />
      </RightContainer>
    </Container>
  );
};

export default CommunityListItem;
