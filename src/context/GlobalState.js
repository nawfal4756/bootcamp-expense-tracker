import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const intialState = {
    transacions: [
        { id: 1, transactionType: 'income', description: 'Main Income', transactionAmount: 2000 },
        { id: 2, transactionType: 'expense', description: 'Flowers', transactionAmount: 300 },
        { id: 3, transactionType: 'income', description: 'Main Income 2', transactionAmount: 3000 },
        { id: 4, transactionType: 'expense', description: 'Dinner', transactionAmount: 200 }
    ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transacions: state.transacions
    }}>
        {children}
    </GlobalContext.Provider>)
}