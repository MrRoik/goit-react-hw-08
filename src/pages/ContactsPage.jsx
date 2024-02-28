import css from './Pages.module.css';

import { ErrorMessage } from 'formik';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import TitlePhonebook from '../components/Title/Title';
import Loader from '../components/Loader/Loader';
import ContactList from '../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';
import { selectIsError, selectIsLoading } from '../redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const loader = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.containerContacts}>
      <TitlePhonebook />
      <ContactForm />
      <SearchBox />
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <ContactList />
    </div>
  );
};

export default Contacts;
