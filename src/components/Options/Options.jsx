import css from './Options.module.css'

export default function Options({feedbackHandler, resetHandler})
{
    return (
        <div class={css.options}>
            <button type="button" class={css.button} onClick={() => feedbackHandler("good")}>Good</button>
            <button type="button" class={css.button} onClick={() => feedbackHandler("neutral")}>Neutral</button>
            <button type="button" class={css.button} onClick={() => feedbackHandler("bad")}>Bad</button>
            <button type="button" class={css.button} onClick={resetHandler}>Reset</button>
        </div>
    );
}