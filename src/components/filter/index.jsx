import TransactionItems from '../transaction-item';
import './index.css';

const Filter = ({setFilter}) => {


    return (
        <div className='filter'>
            <button onClick={()=>(setFilter("all"))}>All</button>
            <button onClick={()=>(setFilter("expence"))}>Expense</button>
            <button onClick={()=>(setFilter("income"))}>Income</button>
        </div>
    )
}

export default Filter;