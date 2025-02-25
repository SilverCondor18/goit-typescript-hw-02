import css from './Feedback.module.css'

export default function Feedback({ feedback: {good, bad, neutral}, totalFeedback })
{
    return (
        <div className={css.feedback}>
            <p className={css.value}>Good: {good}</p>
            <p className={css.value}>Neutral: {neutral}</p>
            <p className={css.value}>Bad: {bad}</p>
            <p className={css.value}>Total: {totalFeedback}</p>
            <p className={css.value}>Positive: {Math.round((good / totalFeedback) * 100)}%</p>
        </div>
    )
}