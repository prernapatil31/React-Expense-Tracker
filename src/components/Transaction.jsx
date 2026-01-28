import React, { useContext } from 'react';
import { GlobaContext } from '../context/GlobaState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobaContext);
  const sign = transaction.amount < 0 ? '-' : '+';

  // Format date nicely
  const formattedDate = new Date(transaction.date).toLocaleString();

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      <div>
        <strong>{transaction.text}</strong>
        {transaction.category && ` (${transaction.category})`}
        <br />
        <small>{formattedDate}</small>
      </div>
      <div>
        <span>{sign}₹{Math.abs(transaction.amount)}</span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </div>
    </li>
  );
};

export default Transaction;
