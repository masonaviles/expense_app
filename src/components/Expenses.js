import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((expense, key) => (
        <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={key}
        />
      ))}
    </div>
  );
}

export default Expenses;
