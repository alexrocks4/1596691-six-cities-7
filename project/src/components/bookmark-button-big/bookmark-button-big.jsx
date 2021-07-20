import React from 'react';
import BookmarkButton from '../bookmark-button/bookmark-button';

const WIDTH = 31;
const HEIGHT = 33;

function BookmarkButtonBig(props) {
  return (
    <BookmarkButton
      dimension={{ width: WIDTH, height: HEIGHT}}
      {...props}
    />
  );
}

export default BookmarkButtonBig;
