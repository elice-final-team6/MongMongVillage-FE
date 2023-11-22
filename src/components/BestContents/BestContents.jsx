import {
  Container,
  Content,
  DogCafeList,
  DogCafeListItem,
  DogCafeListItemImg,
  DogCafeListItemTitle,
  DogCafeListItemWriter,
  DogCafeListItemDate,
  DogCafeItemInfo,
  LoadingContainer,
  ErrorContainer,
} from './styles';

import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';
import { useGetBestContents } from '../../hooks';
import { useEffect } from 'react';

const BestContents = () => {
  const navigate = useNavigate();

  const { mutate, data, isLoading, error } = useGetBestContents();
  useEffect(() => {
    mutate();
    // if (data) {
    //   console.log(data);
    // }
  }, []);

  const linkToCommunity = (postId) => {
    navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${postId}`);
  };

  const linkToUser = () => {
    navigate(ROUTE.MY_PAGE.link);
  };

  if (isLoading) {
    return <LoadingContainer></LoadingContainer>;
  }

  if (error) {
    return <ErrorContainer></ErrorContainer>;
  }

  return (
    <Container>
      <Content>인기글</Content>
      <DogCafeList>
        {data &&
          data.boards.map((content, index) => (
            <DogCafeListItem key={index}>
              <DogCafeListItemImg
                src={content.images.length > 0 ? content.images[0] : ''}
                alt={`Content ${index}`}
                onClick={() => linkToCommunity(content._id)}
              />
              <DogCafeItemInfo>
                <DogCafeListItemTitle
                  onClick={() => linkToCommunity(content._id)}
                >
                  {content.title}
                </DogCafeListItemTitle>
                <DogCafeListItemWriter onClick={linkToUser}>
                  {content.user_id.nickname}
                </DogCafeListItemWriter>
                <DogCafeListItemDate>{content.date}</DogCafeListItemDate>
              </DogCafeItemInfo>
            </DogCafeListItem>
          ))}
      </DogCafeList>
    </Container>
  );
};

export default BestContents;
