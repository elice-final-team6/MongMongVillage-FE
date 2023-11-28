import { useState } from 'react';
import {
  Container,
  TopContainer,
  BottomContainer,
  Content,
  Title,
  DateText,
} from './styles';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';

const MyLikeItem = ({ post }) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() =>
        navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${post?.board_id?._id}`)
      }
    >
      <TopContainer>
        <div>
          <Title>{post.board_id.title}</Title>
          <Content>{post.board_id.content}</Content>
        </div>
      </TopContainer>
      <BottomContainer>
        <DateText>
          {new Date(post.board_id.createdAt).toLocaleString() + ' 작성'}
        </DateText>
        <FaHeart color="red" size={'20px'} />
      </BottomContainer>
    </Container>
  );
};

export default MyLikeItem;
