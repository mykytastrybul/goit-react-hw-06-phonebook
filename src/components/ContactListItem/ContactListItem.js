import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/store';
import s from './ContactListItem.module.css';

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  const deletingContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li className={s.item}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => deletingContact(id)} className={s.deleteButton}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
