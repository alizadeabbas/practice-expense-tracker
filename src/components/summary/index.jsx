import './index.css'
const Summary = ({ transactions }) => {

    const totalExpense = transactions.filter(item => item.type === "expence").reduce((sum, item) => sum + item.amount, 0);
    const balance = transactions.reduce((sum, item) => sum + (item.type === "income" ? item.amount : -item.amount), 0);
    const income = transactions.filter(item => item.type === "income").reduce((sum, item) => sum + item.amount, 0);

    return (
        <div className="summary">
            <p><strong> Income: <span>{income}</span> AZN</strong> -
                <strong> Expense: <span>{totalExpense}</span> AZN</strong> -
                <strong> Balance: <span>{balance}</span>  AZN</strong></p>
        </div>
    )
}

export default Summary;