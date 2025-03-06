import css from './ContactList.module.css'
import Contact from '../Contact/Contact'

export default function ContactList({ contacts, deleteContact })
{
    return (
        <ul className={css.list}>
            {contacts.map(contact => (
                <li key={contact.id} className={css.item}>
                    <Contact item={contact} onDelete={deleteContact} />
                </li>
            ))}
        </ul>
    );
}