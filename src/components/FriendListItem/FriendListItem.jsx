import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ name, avatar, isOnline })
{
    const statusClsx = clsx(css.status, isOnline ? css.online : css.offline);
    return (
        <div className={css.wrapper}>
            <img className={css.avatar} src={avatar} alt={name} />
            <p className={css.name}>{name}</p>
            <p className={statusClsx}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
}