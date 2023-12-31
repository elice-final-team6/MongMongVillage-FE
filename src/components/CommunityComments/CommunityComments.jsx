import { useState } from 'react';
import { usePostComment } from '../../hooks/postComment';
import {
  CommentsContainer,
  PostCommentsContainer,
  SubmitButton,
  CommentInputContainer,
  CommentInput,
} from './CommunityComments.styles';
import { CommentItem } from '../CommentItem';
import { showAlert } from '../../util/showAlert';

const CommunityComments = ({ post, id, onCommentPosted }) => {
  const [content, setContent] = useState(''); // 입력한 댓글 내용

  // 댓글 작성
  const { mutate: postComment } = usePostComment(content, id);

  const handlePostComment = (e) => {
    e.preventDefault();
    if (content === '') {
      showAlert('', '내용을 입력 후 작성해주세요.', 'warning');
    } else if (content.length > 200) {
      showAlert('', '댓글은 200자를 초과할 수 없습니다.', 'warning', () => {});
    } else {
      postComment();
      onCommentPosted();
      setContent('');
    }
  };

  // 댓글 새로 작성되면 페이지 다시 띄워주도록
  return (
    post && (
      <CommentsContainer>
        <p>
          댓글 <span>{post.comments.length}</span>
        </p>
        <CommentInputContainer onSubmit={handlePostComment}>
          <CommentInput
            placeholder="댓글을 입력해주세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <SubmitButton onClick={handlePostComment}>등록</SubmitButton>
        </CommentInputContainer>
        <PostCommentsContainer>
          {post.comments.map((item) => (
            <CommentItem item={item} key={item._id} postId={id} />
          ))}
        </PostCommentsContainer>
      </CommentsContainer>
    )
  );
};

export default CommunityComments;
