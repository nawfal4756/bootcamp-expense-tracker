import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.transactionType === 'income' ? transaction.amount : - + transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h2>Balance</h2>
            <p className="balance">${total}</p>
        </div>
    )
}
