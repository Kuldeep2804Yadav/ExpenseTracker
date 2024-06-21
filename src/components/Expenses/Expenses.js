import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [FilterExpense, setFilterExpense] = useState(2023);
  const changeFilterHandler = (SelectedYear) => {
    setFilterExpense(SelectedYear);
   
  };
  let Year = props.expenses.filter((expense) =>{
    return new Date(expense.date).getFullYear() === parseInt(FilterExpense);
  })

  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={FilterExpense}
        onChangeFilter={changeFilterHandler}
      />
      {Year.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        );
      })}
    </Card>
  );
}
export default Expenses;
