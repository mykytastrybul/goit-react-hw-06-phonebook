import ContactListItem from '../ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
    return (
        <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
                <ContactListItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact}
                />
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};