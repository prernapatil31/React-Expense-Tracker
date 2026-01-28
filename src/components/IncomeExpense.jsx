import React, { useContext } from 'react';
import { GlobaContext } from '../context/GlobaState';

const IncomeExpense = () => {
  const { transactions } = useContext(GlobaContext);
  const amounts = transactions.map(t => t.amount);
  const income = amounts.filter(a => a > 0).reduce((acc, item) => acc + item, 0);
  const expense = amounts.filter(a => a < 0).reduce((acc, item) => acc + item, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+₹{Intl.NumberFormat('en-IN').format(income.toFixed(2))}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-₹{Intl.NumberFormat('en-IN').format(Math.abs(expense.toFixed(2)))}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
