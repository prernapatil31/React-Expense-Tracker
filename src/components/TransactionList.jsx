import React, { useContext } from 'react';
import { GlobaContext } from '../context/GlobaState';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions } = useContext(GlobaContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
