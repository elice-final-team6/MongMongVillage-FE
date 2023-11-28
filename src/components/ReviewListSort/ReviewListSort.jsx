import { Container } from './styles';

const ReviewListSort = ({ sortType, handleSorting }) => {
  return (
    <Container>
      <label>
        <input
          type="radio"
          name="contact"
          value="latest"
          defaultChecked
          onChange={() => handleSorting('latest')}
        />
        <span>최신순</span>
      </label>
      <label>
        <input
          type="radio"
          name="contact"
          value="popular"
          onChange={() => handleSorting('popular')}
        />
        <span>인기순</span>
      </label>
    </Container>
  );
};
export default ReviewListSort;
