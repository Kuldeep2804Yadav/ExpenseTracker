import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
let DummyExpense =[
    {id: 1,date: new Date(2023, 7, 8),title: "Insurance",price: "100",},
    {id: 2,date: new Date(2024, 9, 2),title: "Book",price: "50",},
    {id: 3,date: new Date(2025, 3, 24),title: "Pen",price: "1",},
    {id: 4,date: new Date(2024, 1, 14),title: "Laptop",price: "200"},
]
function App() {
  const [expense,setExpense]= useState(DummyExpense)
  
  let addExpenseHandler = (expense) => {
     setExpense((prevExpense)=>{
      return [ ...prevExpense , expense]
     })
  };

  

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expense} />
    </div>
  );
}

export default App;
