import {
  UnderContentContainer,
  ContentInfo,
  ContentButton,
  BTN,
} from './CommunityUnderContent.styles';

const CommunityUnderContent = ({ onEdit, onDelete, post }) => {
  const userId = localStorage.getItem('userId');
  const role = localStorage.getItem('role');

  const handleEditClick = () => {
    // 수정 모달을 띄우거나 수정폼을 보여줄 수 있는 작업
    onEdit(post);
  };

  const handleDeleteClick = () => {
    // 삭제 확인 모달을 띄우고 사용자가 확인하면 삭제 진행
    onDelete(post._id);
  };

  return (
    <UnderContentContainer>
      <ContentInfo>
        <div>
          {post?.board?.user_id.profilePicture ? (
            <img src={post?.board?.user_id.profilePicture} alt="UserImg" />
          ) : (
            <img
              src={`${`${process.env.PUBLIC_URL}/imges/user.png`}`}
              alt="user_img"
            />
          )}
        </div>
        <div>
          <span className="nickname">{post?.board?.user_id?.nickname}</span>
          <span className="createAt">
            {new Date(post?.board?.createdAt).toLocaleString()} 작성
          </span>
        </div>
      </ContentInfo>
      <ContentButton>
        {userId === post?.board?.user_id?._id && (
          <BTN onClick={handleEditClick}>수정</BTN>
        )}
        {userId === post?.board?.user_id?._id || role === 'ADMIN' ? (
          <BTN onClick={handleDeleteClick}>삭제</BTN>
        ) : (
          <></>
        )}
      </ContentButton>
    </UnderContentContainer>
  );
};

export default CommunityUnderContent;
