import css from './Description.module.css'

export default function Description({ title, content })
{
    return (
        <div class={css.description}>
            <h1 class={css.title}>{title}</h1>
            <p class={css.content}>{content}</p>
        </div>
    );
}