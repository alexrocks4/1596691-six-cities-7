import React from 'react';
import PropTypes from 'prop-types';
import { SortingType, SortingDescription } from '../../const';
import classNames from 'classnames';

const getSortingItemClass = (currentSortingType, sortingType) => classNames('places__option', {
  'places__option--active': currentSortingType === sortingType,
});

function Sorting({
  currentSortingType,
  onSortingItemClick,
  isSortingListOpened,
  onSortingTypeClick,
}) {

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={onSortingTypeClick}
      >
        {SortingDescription[currentSortingType]}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={classNames(
        'places__options places__options--custom',
        { 'places__options--opened': isSortingListOpened },
      )}
      >
        <li
          className={getSortingItemClass(currentSortingType, SortingType.POPULAR)}
          tabIndex={0}
          data-sorting={SortingType.POPULAR}
          onClick={onSortingItemClick}
        >
          Popular
        </li>
        <li
          className={getSortingItemClass(currentSortingType, SortingType.PRICE_ASCENDING)}
          tabIndex={0}
          data-sorting={SortingType.PRICE_ASCENDING}
          onClick={onSortingItemClick}
        >
          Price: low to high
        </li>
        <li
          className={getSortingItemClass(currentSortingType, SortingType.PRICE_DESCENDING)}
          tabIndex={0}
          data-sorting={SortingType.PRICE_DESCENDING}
          onClick={onSortingItemClick}
        >
          Price: high to low
        </li>
        <li
          className={getSortingItemClass(currentSortingType, SortingType.TOP_RATED)}
          tabIndex={0}
          data-sorting={SortingType.TOP_RATED}
          onClick={onSortingItemClick}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}

Sorting.propTypes = {
  currentSortingType: PropTypes.string.isRequired,
  onSortingItemClick: PropTypes.func.isRequired,
  isSortingListOpened: PropTypes.bool.isRequired,
  onSortingTypeClick: PropTypes.func.isRequired,
};

export default Sorting;
