import css from './SearchBox.module.css'
import { useId } from 'react'

export default function SearchBox({ onFilter })
{
    const id = useId();
    return (
        <div className={css.wrapper}>
            <label htmlFor={id}>Find contacts by name</label>
            <input type="text" name="filter" id={id} onChange={event => onFilter(event.target.value)} />
        </div>
    )
}