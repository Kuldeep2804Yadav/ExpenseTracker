import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2>No Expense Found</h2>;
  }

  return (
    <ul>
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            price={item.price}
          />
        );
      })}
    </ul>
  );
}
export default ExpensesList;
