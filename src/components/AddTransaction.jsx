import React, { useState, useContext, useRef, useEffect } from 'react';
import { GlobaContext } from '../context/GlobaState';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobaContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income'); // default type
  const [category, setCategory] = useState('');

  const textInputRef = useRef(null);

  // Focus back on text input after submit
  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    if (!text || !amount) {
      alert('Please enter both text and amount');
      return;
    }

    const newTransaction = {
      id: Date.now(), // unique id
      text,
      amount: type === 'expense' ? -Math.abs(Number(amount)) : Math.abs(Number(amount)),
      category: category,
      date: new Date().toISOString()
    };

    addTransaction(newTransaction);

    // Clear inputs
    setText('');
    setAmount('');
    setType('income');
    setCategory('');
    textInputRef.current.focus();
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter description..."
            value={text}
            ref={textInputRef}
            onChange={e => setText(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>Type</label>
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="form-control">
          <label>Category (optional)</label>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">None</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Salary">Salary</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
