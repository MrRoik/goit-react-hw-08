import css from './Contact.module.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsFillPersonDashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ item }) => {
  const { id, name, number } = item;
  const dispatch = useDispatch();
  const handleDel = () => dispatch(deleteContact(id));

  return (
    <>
      <div>
        <p className={css.descList}>
          <BsFillPersonFill className={css.iconContactList} size="18" />
          {name}
        </p>
        <p className={css.descList}>
          <BsFillTelephoneFill className={css.iconContactList} size="16" /> {number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={handleDel}>
        Delete <BsFillPersonDashFill size="14" />
      </button>
    </>
  );
};

export default Contact;
