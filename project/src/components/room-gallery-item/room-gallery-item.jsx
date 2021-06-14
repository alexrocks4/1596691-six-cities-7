import React from 'react';
import PropTypes from 'prop-types';

function RoomGalleryItem({ imageSrc }) {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={imageSrc} alt="Studio" />
    </div>
  );
}

RoomGalleryItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default RoomGalleryItem;
