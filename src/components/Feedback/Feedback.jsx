import css from './Feedback.module.css'

export default function Feedback({ feedback: {good, bad, neutral}, totalFeedback })
{
    return (
        <div class={css.feedback}>
            <p class={css.value}>Good: {good}</p>
            <p class={css.value}>Neutral: {neutral}</p>
            <p class={css.value}>Bad: {bad}</p>
            <p class={css.value}>Total: {totalFeedback}</p>
            <p class={css.value}>Positive: {Math.round((good / totalFeedback) * 100)}%</p>
        </div>
    )
}