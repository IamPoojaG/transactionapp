import React from 'react';

import TransactionList from './TransactionList';

const transactionsData = [
  {
    id: 1,
    description: 'Akoji',
    time: '28 Feb 2023.06:23PM',
    amount: 13.0,
    task: 'Received',
    isAdded: true,
  },
  {
    id: 2,
    description: 'Kizaru',
    time: '28 Feb 2023.06:23PM',
    amount: 20.0,
    task: 'Received',
    isAdded: true,
  },
  {
    id: 3,
    description: 'Akainu',
    time: '28 Feb 2023.06:23PM',
    amount: 40.0,
    task: 'Outgoing',
    isAdded: false,
  },
  {
    id: 4,
    description: 'Akoji',
    time: '28 Feb 2023.06:23Pm',
    amount: 30.0,
    task: 'Received',
    isAdded: true,
  },
  {
    id: 5,
    description: 'Ajain',
    time: '28 Feb 2023.06:23Pm',
    amount: 35.0,
    task: 'Outgoing',
    isAdded: false,
  },
];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 style={{ textAlign: 'center' }}>TransactionsApp</h1>
      </header>
      <main>
        <TransactionList transactions={transactionsData} />
      </main>
    </div>
  );
}

export default App;
