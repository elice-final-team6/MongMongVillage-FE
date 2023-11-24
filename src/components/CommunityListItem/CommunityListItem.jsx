import { CommunityCategory } from '../../libs/index.js';
import { FaCircleUser } from 'react-icons/fa6';
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
  console.log('item : ', item);
  return (
    <Container key={item._id}>
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
            {item.userImg ? (
              <img alt="유저프로필이미지" src={item.userImg} />
            ) : (
              <FaCircleUser size={'25px'} color="gray" />
            )}
            <span>{item.user_id.nickname}</span>
          </Writer>
          <Count>댓글 : {item.comment_id.length}</Count>
          <Count>
            <FaHeart color="red" size={'20px'} /> {item.like_count}
          </Count>
          <DateText>{item.createdAt} 작성</DateText>
        </BottomContainer>
      </LeftContainer>
      <RightContainer>
        <PostImg src={item.images[0]} alt="메인이미지" />
      </RightContainer>
    </Container>
  );
};

export default CommunityListItem;
