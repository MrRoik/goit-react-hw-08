import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import filterContacts from '../../redux/filtersSlice';
import { selectFilters } from '../../redux/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilters);
  const handleFilterItem = evt => dispatch(filterContacts.filterContacts(evt.target.value.trim()));

  return (
    <input
      type="text"
      value={value}
      onChange={handleFilterItem}
      placeholder="search"
      className={css.inputSearch}
    />
  );
};

export default SearchBox;
