import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// Initial State
const initialState = {
    transactions: [
        { id: 1, transactionType: 'income', description: 'Main Income', amount: 2000 },
        { id: 2, transactionType: 'expense', description: 'Flowers', amount: 300 },
        { id: 3, transactionType: 'income', description: 'Main Income 2', amount: 3000 },
        { id: 4, transactionType: 'expense', description: 'Dinner', amount: 200 }
    ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}