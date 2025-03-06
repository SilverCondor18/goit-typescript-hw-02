import { RiContactsFill, RiPhoneFill } from "react-icons/ri"
import css from './Contact.module.css'

export default function Contact({ item: { id, name, number }, onDelete })
{
    return (
        <>
            <div className={css.wrapper}>
                <p className={css.description}>{RiContactsFill}{name}</p>
                <p className={css.description}>{RiPhoneFill}{number}</p>
            </div>
            <button type="button" onClick={() => onDelete(id)}>Delete</button>
        </>
    );
}