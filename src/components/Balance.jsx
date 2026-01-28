import React, { useContext } from 'react';
import { GlobaContext } from '../context/GlobaState';

const Balance = () => {
  const { transactions } = useContext(GlobaContext);
  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>₹{Intl.NumberFormat('en-IN').format(total.toFixed(2))}</h1>
    </>
  );
};

export default Balance;
