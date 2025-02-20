import css from './Profile.module.css';

export default function Profile({ profile: { username, tag, location, avatar, stats: { followers, likes, views } } })
{
    return (
        <div className={css.wrapper}>
            <div className={css.info}>
                <img className={css.avatar} src={avatar} alt={name} />
                <p className={css.name}>{username}</p>
                <p className={css.text}>@{tag}</p>
                <p className={css.text}>{location}</p>
            </div>
            <ul className={css.stats}>
                <li className={css.statsentry}>
                    <span className={css.stat}>Followers</span>
                    <span className={css.statvalue}>{followers}</span>
                </li>
                <li className={css.statsentry}>
                    <span className={css.stat}>Views</span>
                    <span className={css.statvalue}>{views}</span>
                </li>
                <li className={css.statsentry}>
                    <span className={css.stat}>Likes</span>
                    <span className={css.statvalue}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}