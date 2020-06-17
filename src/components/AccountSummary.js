import React from 'react'

export const AccountSummary = () => {
    return (
        <div className="acc-sum-container">
            <div className="plus">
                <h3>Income</h3>
                <p>+$0.00</p>
            </div>
            <div className="minus">
                <h3>Expense</h3>
                <p>-$0.00</p>
            </div>
        </div>
    )
}
