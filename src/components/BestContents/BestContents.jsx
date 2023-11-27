import {
  Container,
  Content,
  DogCafeList,
  DogCafeListItem,
  DogCafeListItemImg,
  DogCafeListItemTitle,
  DogCafeListItemWriter,
  DogCafeItemInfo,
  LoadingContainer,
  ErrorContainer,
} from './styles';

import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';
import { useGetBestContents } from '../../hooks';
import { GiCurlyWing } from 'react-icons/gi';

const BestContents = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetBestContents();

  const linkToCommunity = (postId) => {
    navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${postId}`);
  };

  const linkToUser = () => {
    navigate(ROUTE.MY_PAGE.link);
  };

  if (isLoading) {
    return <LoadingContainer>Loading...</LoadingContainer>;
  }

  if (error) {
    return (
      <ErrorContainer>인기글을 불러오는 도중 에러가 생겼습니다.</ErrorContainer>
    );
  }

  const scollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <Content>
        <GiCurlyWing size={'43px'} color="rgba(136, 200, 247, 0.94)" />
        &nbsp;인기글&nbsp;
        <GiCurlyWing
          size={'43px'}
          color="rgba(136, 200, 247, 0.94)"
          style={{ transform: 'scaleX(-1)' }}
        />
      </Content>
      <DogCafeList>
        {data &&
          data.boards.map((content, index) => (
            <DogCafeListItem key={index}>
              <DogCafeListItemImg
                style={{
                  backgroundImage: `url('${
                    content.images.length > 0
                      ? content.images[0]
                      : '/imges/default.png'
                  }')`,
                }}
                alt={`Content ${index}`}
                onClick={() => {
                  linkToCommunity(content._id);
                  scollTop();
                }}
              />
              <DogCafeItemInfo>
                <DogCafeListItemTitle
                  onClick={() => {
                    linkToCommunity(content._id);
                    scollTop();
                  }}
                >
                  {content.title}
                </DogCafeListItemTitle>
                <DogCafeListItemWriter onClick={linkToUser}>
                  {content.userImg ? (
                    <img alt="유저프로필이미지" src={content.userImg} />
                  ) : (
                    <img src={'/imges/user.png'} alt="user_img" />
                  )}
                  <span>{content.user_id.nickname}</span>
                </DogCafeListItemWriter>
              </DogCafeItemInfo>
            </DogCafeListItem>
          ))}
      </DogCafeList>
    </Container>
  );
};

export default BestContents;
