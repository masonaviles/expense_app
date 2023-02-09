import "./Expenses.css";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense, key) => (
        <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={key}
        />
      ))}
    </Card>
  );
}

export default Expenses;
