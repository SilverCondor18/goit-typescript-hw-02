import css from './Description.module.css'

export default function Description({ title, content })
{
    return (
        <div className={css.description}>
            <h1 className={css.title}>{title}</h1>
            <p className={css.content}>{content}</p>
        </div>
    );
}