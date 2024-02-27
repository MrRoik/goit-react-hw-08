import css from './App.module.css';

import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import TitlePhonebook from './Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsError, selectIsLoading } from '../redux/selectors';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import Loader from './Loader/Loader';
import { fetchContacts } from '../redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const loader = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <TitlePhonebook />
      <ContactForm />
      <SearchBox />
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <ContactList />
    </div>
  );
};
