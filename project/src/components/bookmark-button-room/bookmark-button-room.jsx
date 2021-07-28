import React from 'react';
import BookmarkButton from '../bookmark-button/bookmark-button';

const WIDTH = 31;
const HEIGHT = 33;

function BookmarkButtonRoom(props) {
  return (
    <BookmarkButton
      dimension={{ width: WIDTH, height: HEIGHT}}
      classConfig={{
        button: 'property__bookmark-button',
        icon: 'property__bookmark-icon',
        active: 'property__bookmark-button--active',
      }}
      {...props}
    />
  );
}

export default BookmarkButtonRoom;
