import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';


export const AccountHistory = () => {
    const {transactions} = useContext(GlobalContext)

    return (
        <div>
            <h3>Account History</h3>
            <ul className="transaction-list">
            {transactions.map( transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </div>
    )
}
