import React, { useState } from "react";
import "./ExpenseForm.css";

let ExpenseForm = (props) => {
  let [enteredTitle, setEnteredTitle] = useState("");
  let [enteredAmount, setEnteredAmount] = useState("");
  let [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  let formSubmitHandler = (event) => {
    event.preventDefault();
    let expenseData = {
      title: enteredTitle,
      price: enteredAmount,
      date: new Date(enteredDate),
     
    };
    props.onSaveDataExpenseData(expenseData)
    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredDate("")
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={enteredAmount}
            id="amount"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={enteredDate}
            min={2023 - 12 - 1}
            max={2024 - 12 - 30}
            id="date"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
      <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
