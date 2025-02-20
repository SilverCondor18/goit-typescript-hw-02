import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items })
{
    return (
        <table border="1" className={css.table}>
            <thead className={css.head}>
                <tr><td>Type</td><td>Amount</td><td>Currency</td></tr>
            </thead>
            <tbody className={css.body}>
                {items.map(({ id, type, amount, currency }) => 
                    (
                        <tr key={id}>
                            <td>{type}</td><td>{amount}</td><td>{currency}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    );
}