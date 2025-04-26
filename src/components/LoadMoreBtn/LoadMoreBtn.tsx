import css from './LoadMoreBtn.module.css'
import { MouseEventHandler } from 'react';

type Props = {
    onClick: MouseEventHandler;
};

export default function LoadMoreBtn({ onClick }: Props)
{
    return (
        <button className={css.more} type="button" onClick={onClick}>Load more</button>
    );
}