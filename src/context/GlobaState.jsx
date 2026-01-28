import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// Load transactions from localStorage
const localData = JSON.parse(localStorage.getItem('transactions'));

const initialState = {
  transactions: localData || []
};

// Create context
export const GlobaContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  }, [state.transactions]);

  // Actions
  const deleteTransaction = id => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = transaction => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  return (
    <GlobaContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobaContext.Provider>
  );
};
