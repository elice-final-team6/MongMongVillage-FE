import React from 'react';
import { ListContainer } from './CommunityList.styles';

const CommunityList = ({ filteredListBySearch, handlePostClick }) => {
  return (
    <ListContainer>
      {filteredListBySearch.map((item) => (
        <div className="ListItem" key={item.id}>
          <div
            className="ContentAndImg"
            onClick={() => {
              handlePostClick(item.id);
            }}
            style={{ cursor: 'pointer' }}
          >
            <div>
              <p className="Category">[ {item.category} ]</p>
              <p className="Title">{item.title}</p>
              <p className="ellipsis">{item.content}</p>
            </div>
            <img
              src={item.mainImg}
              alt="메인이미지"
              style={{ maxWidth: '100%' }}
            />
          </div>
          <p>
            {item.userImg} {item.user} / 댓글 : {item.comment.length} / 좋아요 :{' '}
            {item.like} / 작성시간 : {item.time}
          </p>
        </div>
      ))}
    </ListContainer>
  );
};

export default CommunityList;
