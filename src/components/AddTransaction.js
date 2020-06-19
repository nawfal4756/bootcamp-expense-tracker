import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

    const [transactionType, setTransactionType] = useState('income');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            transactionType,
            description,
            amount: parseFloat(amount)
        }

        addTransaction(newTransaction);

    }

    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control1">
                    Select Transaction Type
                    <br/>
                    <br/>
                    <input id="income" type="radio" name="trans-type" value={transactionType} defaultChecked="default"
                      onChange={(e) => setTransactionType("income")}  
                    />
                    <label htmlFor="income">
                        Income
                    </label>

                    <input id="expense" type="radio" name="trans-type" value={transactionType} 
                      onChange={(e) => setTransactionType("expense")}  
                    />
                    <label htmlFor="expense">
                        Expense
                    </label>
                </div>
                <div className="form-control">
                    <label htmlFor="des">
                        <p>
                            Description 
                        </p>
                    </label>
                    <br/>
                    <input id="des" type="text" name="des" required="required" value={description} placeholder="Enter Transaction Description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="trans-amount">
                        <p>
                            Transaction Amount
                        </p>
                    </label>
                    <br/>
                    <input id="trans-amount" type="number" name="trans-amount" required="required" value={amount} placeholder="Enter Transaction Amount" 
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
