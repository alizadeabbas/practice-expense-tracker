import { useState } from 'react';
import './index.css';

const TransactionForm = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !amount) return;   // don't send empty

        const newTransaction = {
            id: Date.now(),
            title,
            amount: Number(amount),
            type,
        };

        onAdd(newTransaction);         //send to App.jsx

        // to clear inputs
        setTitle("");
        setAmount("");
        setType("");
    };

    return (
        <div >
            <form className='taransaction-form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <input
                    type='number'
                    placeholder='Amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} />
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>

                <button type='submit'>Add</button>
            </form>



        </div>
    )
}

export default TransactionForm;