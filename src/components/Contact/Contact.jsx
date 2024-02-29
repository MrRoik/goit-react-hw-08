import css from './Contact.module.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsFillPersonDashFill } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import { ModalVerification } from '../ModalVerification/ModalVerification';
import { useState } from 'react';

const Contact = ({ item }) => {
  const { id, name, number } = item;
  const [winModalIsOpen, setWinModalIsOpen] = useState(false);

  return (
    <>
      <div className={css.blockContacts}>
        <div className={css.blockContact}>
          <p className={css.descList}>
            <BsFillPersonFill className={css.iconContactList} size="18" />
            {name}
          </p>
          <CiEdit className={css.changeText} size="20" />
        </div>
        <div className={css.blockContact}>
          <p className={css.descList}>
            <BsFillTelephoneFill className={css.iconContactList} size="16" /> {number}
          </p>
          <CiEdit className={css.changeText} size="20" />
        </div>
      </div>
      <button className={css.button} type="button" onClick={() => setWinModalIsOpen(true)}>
        Delete <BsFillPersonDashFill size="14" />
      </button>
      <ModalVerification isOpen={winModalIsOpen} id={id} onClose={() => setWinModalIsOpen(false)} />
    </>
  );
};

export default Contact;
