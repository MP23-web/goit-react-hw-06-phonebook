import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice/filterSlice';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  const handleChangeFilter = e => dispatch(filterContacts(e.target.value));

  return (
    <>
      <label htmlFor="findByName">Find contacts by name</label>
      <input
        id="findByName"
        className={s.filter}
        type="text"
        name="name"
        placeholder="Search contact"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={handleChangeFilter}
        value={filter}
      />
    </>
  );
};

export default Filter;