import React, { useState } from 'react';
import { SortingType, SortingDescription } from '../../const';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectSortingType } from '../../store/app/selectors';
import { sortingTypeUpdated } from '../../store/action';

const getSortingItemClass = (currentSortingType, sortingType) => classNames('places__option', {
  'places__option--active': currentSortingType === sortingType,
});

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
        <li
          className={getSortingItemClass(currentSortingType, SortingType.POPULAR)}
          tabIndex={0}
          data-sorting={SortingType.POPULAR}
          onClick={handleSortingItemClick}
        >
          Popular
        </li>
        <li
          className={getSortingItemClass(currentSortingType, SortingType.PRICE_ASCENDING)}
          tabIndex={0}
          data-sorting={SortingType.PRICE_ASCENDING}
          onClick={handleSortingItemClick}
        >
          Price: low to high
        </li>
        <li
          className={getSortingItemClass(currentSortingType, SortingType.PRICE_DESCENDING)}
          tabIndex={0}
          data-sorting={SortingType.PRICE_DESCENDING}
          onClick={handleSortingItemClick}
        >
          Price: high to low
        </li>
        <li
          className={getSortingItemClass(currentSortingType, SortingType.TOP_RATED)}
          tabIndex={0}
          data-sorting={SortingType.TOP_RATED}
          onClick={handleSortingItemClick}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}

export default Sorting;
