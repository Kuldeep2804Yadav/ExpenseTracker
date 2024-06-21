import React from "react";
import "./NewExpense.css"
import ExpensesForm from "./ExpenseForm";


const NewExpense =(props)=>{
    const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };
    return <div className="new-expense">
    <ExpensesForm  onSaveDataExpenseData={saveExpenseDataHandler}/>
   
    </div>
}
export default NewExpense;