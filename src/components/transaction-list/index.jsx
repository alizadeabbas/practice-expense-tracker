import './index.css';
import TransactionItems from '../transaction-item';

const TransactionList = ({ transactions, onDelete }) => {

  if (transactions.length === 0) return <p>No items.....</p>

  return (
    <div className="transaction-list">
      {transactions.map(item => (
        <TransactionItems key={item.id} item={item} onDelete={onDelete} />
      ))}

    </div>
  )
}

export default TransactionList;