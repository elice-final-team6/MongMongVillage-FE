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
  const originalDate =
    item.createdAt instanceof Date ? item.createdAt : new Date(item.createdAt);

  const year = originalDate.getFullYear();
  const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
  const day = originalDate.getDate().toString().padStart(2, '0');
  const hours = originalDate.getHours().toString().padStart(2, '0');
  const minutes = originalDate.getMinutes().toString().padStart(2, '0');
  const seconds = originalDate.getSeconds().toString().padStart(2, '0');
  const ampm = originalDate.getHours() >= 12 ? '오후' : '오전';

  const formattedDate = `${year}. ${month}. ${day}. ${ampm} ${hours}:${minutes}:${seconds}`;

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
          <DateText>{formattedDate} 작성</DateText>
        </BottomContainer>
      </LeftContainer>
      <RightContainer>
        <PostImg
          onClick={() => {
            handlePostClick(item._id);
          }}
          src={item.images[0]}
          alt="메인이미지"
        />
      </RightContainer>
    </Container>
  );
};

export default CommunityListItem;
