import { useMemo, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import Summary from './components/summary';
import TransactionForm from './components/transaction-form';
import TransactionList from './components/transaction-list';

function App() {
  const [filter, setFilter] = useState("all");
  const [transactions, setTransactions] = useState([{
    title: "salary",
    amount: 1500,
    type: "income",
    id: 1
  }, {
    title: "fuel",
    amount: 200,
    type: "expence",
    id: 2
  }]);

  const filteredTransactions = useMemo(() => {
    if (filter === "all") return transactions;
    return transactions.filter(item => item.type === filter)
  }, [filter, transactions]);

  const onDelete = (id) => {
    setTransactions(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className="App">
      <Header />
      <Summary transactions={transactions} />
      <Filter setFilter={setFilter} />
      <TransactionForm />
      <TransactionList transactions={filteredTransactions} onDelete={onDelete} />
    </div>
  );
}

export default App;
