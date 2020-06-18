import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    
    const sign = transaction.transactionType === 'income' ? '+' : '-';
    
    return (
        <li className={transaction.transactionType === 'income' ? 'plus' : 'minus'}>
            
            {transaction.description}
            <span>{sign}${transaction.amount}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="del-btn">x</button>
        </li>
    )
}
