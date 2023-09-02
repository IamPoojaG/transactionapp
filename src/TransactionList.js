import React from 'react';
import './TransactionList.css';
import Profile from './images/profile.jpg';

function TransactionList({ transactions }) {
  return (
    <div className='transaction-list'>
      <div className='list'>
        <h2> Last Transaction </h2>
        <h3>See All</h3>
      </div>
      <div className='transactions'>
        {transactions.map((transaction) => (
          <div key={transaction.id} className='transaction'>
            <img src={Profile} alt='Profile image' width='80' height='80' />
            <div>
              <p>{transaction.description}</p>
              <p>{transaction.time}</p>
            </div>

            <div>
              <p style={{ color: 'green' }}>
                <b>+${transaction.amount.toFixed(2)}</b>
              </p>
              <p>{transaction.task}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionList;
