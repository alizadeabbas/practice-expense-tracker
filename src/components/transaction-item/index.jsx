import './index.css';

const TransactionItems = ({ item, onDelete }) => {
    return (
        <div className='transaction-item'>
            <p className="transaction-item-title">{item.title}</p>
            <p className="transaction-item-amount">{item.amount}</p>
            <p className="transaction-item-type">{item.type}</p>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
    )
}

export default TransactionItems;