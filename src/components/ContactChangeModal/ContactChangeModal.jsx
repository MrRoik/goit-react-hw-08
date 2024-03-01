import Modal from 'react-modal';
import { updateContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import css from '../ContactForm/ContactForm.module.css';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId, useState } from 'react';
import { BsFillPersonPlusFill } from 'react-icons/bs';

const customStyles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '350px',
    width: '350px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: 'none',
    marginRight: '-50%',
    backgroundSize: 'cover',
    backgroundColor: 'transparent',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    background: 'rgba(22, 22, 22, 0.8)',
  },
};

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string().min(9, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const ContactChangeModal = ({ isOpen, onClose }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({});

  const handleOnSubmit = (values, action) => {
    const newFormValues = { ...formValues, ...values };
    setFormValues(newFormValues);
    dispatch(updateContact(newFormValues));
    action.resetForm();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles} ariaHideApp={false}>
      <div className={css.modalBox}>
        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          validationSchema={contactSchema}
          onSubmit={handleOnSubmit}
        >
          <Form className={css.form} autoComplete="off">
            <div className={css.inputForm}>
              <label htmlFor={nameFieldId} className={css.labelInput}>
                Name
              </label>
              <Field type="text" name="name" id={nameFieldId} className={css.inputField} />
              <ErrorMessage className={css.error} name="name" component="span" />
            </div>
            <div className={css.inputForm}>
              <label htmlFor={numberFieldId} className={css.labelInput}>
                Number
              </label>
              <Field type="tel" name="number" id={numberFieldId} className={css.inputField} />
              <ErrorMessage className={css.error} name="number" component="span" />
            </div>
            <button type="submit" className={css.btn}>
              Update <BsFillPersonPlusFill size="18" />
            </button>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};

export default ContactChangeModal;
