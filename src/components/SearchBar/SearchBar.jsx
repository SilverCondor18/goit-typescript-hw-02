import toast from 'react-hot-toast';
import css from './SearchBar.module.css'
import { FaSearch } from "react-icons/fa"

export default function SearchBar({ onSearch })
{
    const onFormSubmit = event => {
        event.preventDefault();
        const pureQuery = event.target.elements.query.value.trim();
        if (pureQuery == '')
        {
            toast.error("Search field cannot be empty!");
            return;
        }
        onSearch(event.target.elements.query.value);
    }
    return (
        <form className={css.form} onSubmit={onFormSubmit}>
            <div className={css.wrapper}>
                <button className={css.button} type="submit"><FaSearch className={css.icon} /></button>
                <input placeholder="Search images and photos" type="text" className={css.query} name="query" />
            </div>
        </form>
    )
}