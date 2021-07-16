import React, { useState } from 'react';
import { SortingType, SortingDescription } from '../../const';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectSortingType } from '../../store/app/selectors';
import { sortingTypeUpdated } from '../../store/action';
import SortingListItem from '../sorting-list-item/sorting-list-item';

function Sorting() {
  const dispatch = useDispatch();
  const currentSortingType = useSelector(selectSortingType);
  const [isSortingListOpened, setIsSortingListOpened] = useState(false);

  const handleSortingItemClick = ({ target }) => {
    dispatch(sortingTypeUpdated(target.dataset.sorting));
    setIsSortingListOpened(false);
  };

  const handleSortingTypeClick = () => {
    setIsSortingListOpened(true);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortingTypeClick}
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
        <SortingListItem
          sortingType={SortingType.POPULAR}
          onSortingItemClick={handleSortingItemClick}
        />

        <SortingListItem
          sortingType={SortingType.PRICE_ASCENDING}
          onSortingItemClick={handleSortingItemClick}
        />

        <SortingListItem
          sortingType={SortingType.PRICE_DESCENDING}
          onSortingItemClick={handleSortingItemClick}
        />

        <SortingListItem
          sortingType={SortingType.TOP_RATED}
          onSortingItemClick={handleSortingItemClick}
        />
      </ul>
    </form>
  );
}

export default Sorting;
