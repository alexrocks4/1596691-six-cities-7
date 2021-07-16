import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { SortingDescription } from '../../const';
import { selectSortingType } from '../../store/app/selectors';

const getSortingItemClass = (currentSortingType, sortingType) => classNames('places__option', {
  'places__option--active': currentSortingType === sortingType,
});

function SortingListItem({ sortingType, onSortingItemClick }) {
  const currentSortingType = useSelector(selectSortingType);

  return (
    <li
      className={getSortingItemClass(currentSortingType, sortingType)}
      tabIndex={0}
      data-sorting={sortingType}
      onClick={onSortingItemClick}
    >
      {SortingDescription[sortingType]}
    </li>
  );
}

SortingListItem.propTypes = {
  sortingType: PropTypes.string.isRequired,
  onSortingItemClick: PropTypes.func.isRequired,
};

export default SortingListItem;
