import React, { useState } from "react";
import "./NewExpense.css";
import ExpensesForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setopenForm(false);
  };
  const [openForm, setopenForm] = useState(false);
  const openFormHandler = () => {
    setopenForm(true);
  };
  const closeFormHandler = () => {
    setopenForm(false);
  };

  return (
    <div className="new-expense">
      {!openForm && <button onClick={openFormHandler}>Add Expense</button>}
      {openForm && (
        <ExpensesForm
          onSaveDataExpenseData={saveExpenseDataHandler}
          onCancel={closeFormHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
