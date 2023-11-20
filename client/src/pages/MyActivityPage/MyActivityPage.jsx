import { useState } from 'react';
import {
  Footer,
  Header,
  MyMenuBar,
  MyPost,
  MyProfileImg,
  MyLike,
  MyComment,
} from '../../components';
import { Container, NameContainer } from './styles';
import { MyActivityMenus } from '../../libs';
import { MyReview } from '../../components/MyReview';

const MyActivityPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(MyActivityMenus.post);
  const name = '엘리스';

  return (
    <>
      <Header />
      <Container>
        <MyProfileImg />
        <NameContainer>
          <span>{name}</span>님의 활동
        </NameContainer>
        <MyMenuBar setMenu={setSelectedMenu} menu={selectedMenu} />
        {selectedMenu === MyActivityMenus.post ? (
          <MyPost />
        ) : selectedMenu === MyActivityMenus.comment ? (
          <MyComment />
        ) : selectedMenu === MyActivityMenus.like ? (
          <MyLike />
        ) : selectedMenu === MyActivityMenus.review ? (
          <MyReview />
        ) : (
          <></>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default MyActivityPage;
