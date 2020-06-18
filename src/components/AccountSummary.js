import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const AccountSummary = () => {
    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.transactionType === 'income' ? transaction.amount : - + transaction.amount)

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1.00
    .toFixed(2);

    return (
        <div className="acc-sum-container">
            <div className="plus">
                <h3>Income</h3>
                <p>+${income}</p>
            </div>
            <div className="minus">
                <h3>Expense</h3>
                <p>-${expense}</p>
            </div>
        </div>
    )
}
