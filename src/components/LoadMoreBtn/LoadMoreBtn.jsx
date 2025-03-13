import css from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({ onClick, currentPage })
{
    return (
        <button className={css.more} type="button" onClick={onClick}>Load more {currentPage}</button>
    );
}