import './index.css';

const TransactionForm = () => {
    return (
        <div >
            <form className='taransaction-form'>
                <input />
                <input />
                <select>
                    <option value="income">Income</option>
                    <option value="expence">Expence</option>
                </select>

                <button>Add</button>
            </form>



        </div>
    )
}

export default TransactionForm;