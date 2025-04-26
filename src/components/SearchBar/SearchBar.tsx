import toast from 'react-hot-toast';
import css from './SearchBar.module.css'
import { FaSearch } from "react-icons/fa"
import { FormEvent } from 'react';

type Props = {
    onSearch: (searchQuery: string) => void;
}

export default function SearchBar({ onSearch }: Props)
{
    const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formElements = (event.target as HTMLFormElement).elements as HTMLFormControlsCollection & {query: HTMLInputElement};
        const pureQuery = formElements.query.value.trim();
        if (pureQuery == '')
        {
            toast.error("Search field cannot be empty!");
            return;
        }
        onSearch(pureQuery);
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