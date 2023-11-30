import { Container } from './styles';

const ReviewListSort = ({ handleSorting }) => {
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
        <span>별점높은순</span>
      </label>
    </Container>
  );
};
export default ReviewListSort;
