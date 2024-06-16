import React from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
function Expenses(props) {
  
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
            location={expense.location}
          />
        );
      })}
    </Card>
  );
}
export default Expenses;
