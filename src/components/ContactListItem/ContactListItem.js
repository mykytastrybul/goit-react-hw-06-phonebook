import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

export default function ContactListItem({ id, name, number, onDeleteContact }) {
    return (
        <li className={s.item}>
            <div>
                <p>{name}</p>
                <p>{number}</p>
            </div>
            <button onClick={() => onDeleteContact(id)} className={s.deleteButton}>
                Delete
            </button>
        </li>
    );
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};