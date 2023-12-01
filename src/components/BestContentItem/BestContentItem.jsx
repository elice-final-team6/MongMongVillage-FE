import { useNavigate } from 'react-router-dom';
import { BestInfo, BestImg, Container, BestWriter, BestTitle } from './styles';
import { ROUTE } from '../../routes/Routes';
import { useGetUserInfo } from '../../hooks/getUserInfo';
const BestContentItem = ({ item }) => {
  const navigate = useNavigate();

  const { data: userData } = useGetUserInfo(item?.user_id?._id);

  const linkToCommunity = (postId) => {
    navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${postId}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Container
      onClick={() => {
        linkToCommunity(item._id);
      }}
    >
      <BestImg
        src={item?.images?.length > 0 ? item?.images[0] : '/imges/default.png'}
        alt={`bestImg`}
      />
      <BestInfo>
        <BestTitle>{item.title}</BestTitle>
        <BestWriter>
          <img
            alt="userImg"
            src={userData?.profilePicture ?? '/imges/user.png'}
          />
          <span>{item?.user_id?.nickname}</span>
        </BestWriter>
      </BestInfo>
    </Container>
  );
};

export default BestContentItem;
