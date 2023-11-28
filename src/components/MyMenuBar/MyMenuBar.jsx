import { Container, Line, MenuButton, MenuContainer } from './styles';
import { MyActivityMenus } from '../../libs/MyActivityMenuBar';

const MyMenuBar = ({ setMenu, menu }) => {
  return (
    <Container>
      <MenuContainer>
        <MenuButton
          onClick={() => setMenu(MyActivityMenus.post)}
          selected={menu === MyActivityMenus.post ? true : false}
        >
          <span>{MyActivityMenus.post}</span>
        </MenuButton>
        <MenuButton
          onClick={() => setMenu(MyActivityMenus.comment)}
          selected={menu === MyActivityMenus.comment ? true : false}
        >
          <span>{MyActivityMenus.comment}</span>
        </MenuButton>
        <MenuButton
          onClick={() => setMenu(MyActivityMenus.like)}
          selected={menu === MyActivityMenus.like ? true : false}
        >
          <span>{MyActivityMenus.like}</span>
        </MenuButton>
        <MenuButton
          onClick={() => setMenu(MyActivityMenus.review)}
          selected={menu === MyActivityMenus.review ? true : false}
        >
          <span>{MyActivityMenus.review}</span>
        </MenuButton>
      </MenuContainer>
      <Line />
    </Container>
  );
};

export default MyMenuBar;
