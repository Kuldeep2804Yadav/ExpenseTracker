import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpensesForm = () => {
   const [enteredTitle,setEnteredTitle]=useState("");
   const  titleChangeHandler =(event)=>{
      setEnteredTitle(event.target.value)
   }

   const [enteredAmount,setEnteredAmount]=useState("");
   const amountChangeHandler =(event)=>{
      setEnteredAmount(event.target.value)
   }

   const [enteredDate,setEnteredDate]=useState("");
   const dateChangeHandler =(event)=>{
      setEnteredDate(event.target.value)
   }
  
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label for="title">Title</label>
          <input type="text" id="title" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label for="amount">Amount</label>
          <input type="number" id="amount" onChange={amountChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label for="date">Date</label>
          <input type="date" min={2023 - 12 - 1} max={2024 - 12 - 30} id="date" onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpensesForm;
