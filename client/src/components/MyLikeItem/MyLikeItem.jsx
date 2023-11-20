import { useState } from 'react';
import { MyEditAndRemoveButtons } from '../MyEditAndRemoveButtons';
import {
  Container,
  TopContainer,
  BottomContainer,
  Content,
  Title,
  DateText,
  Writer,
} from './styles';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6';

const MyLikeItem = ({ post }) => {
  const [isLike, setIsLike] = useState(true);

  const cancelLike = () => {
    setIsLike(false);
    alert('좋아요 목록에서 삭제합니다.');
    // 좋아요 삭제 기능 처리
  };

  return (
    <Container>
      <TopContainer>
        <div>
          <Title>{post.title}</Title>
          <Content>{post.content}</Content>
        </div>
        {post.isMine && <MyEditAndRemoveButtons />}
      </TopContainer>
      <BottomContainer>
        <div>
          <Writer>
            {post.writerProfileImg ? (
              <img src={post.writerProfileImg} alt="propfile" />
            ) : (
              <FaCircleUser size={'25px'} color="gray" />
            )}
            <span>{post.writer}</span>
          </Writer>
          <DateText>{post.date}</DateText>
        </div>
        {isLike ? (
          <FaHeart onClick={cancelLike} color="red" size={'20px'} />
        ) : (
          <FaRegHeart size={'20px'} color="red" />
        )}
      </BottomContainer>
    </Container>
  );
};

export default MyLikeItem;
