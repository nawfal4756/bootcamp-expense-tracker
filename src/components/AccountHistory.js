import React from 'react'

export const AccountHistory = () => {
    return (
        <div>
            <h3>Account History</h3>
            <ul className="transaction-list">
                <li className="plus">
                    Income
                    <span>$1,0000</span>
                    <button>x</button>                    
                </li>
                <li className="minus">
                    Salary
                    <span>-$200</span>
                    <button>x</button>
                </li>
            </ul>
        </div>
    )
}
