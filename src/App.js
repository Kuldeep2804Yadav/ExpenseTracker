import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const [expense,setExpense]= useState([
    {id: 1,date: new Date(2023, 7, 8),title: "Insurance",price: "100",},
    {id: 2,date: new Date(2023, 9, 2),title: "Book",price: "50",},
    {id: 3,date: new Date(2023, 3, 24),title: "Pen",price: "1",},
    {id: 4,date: new Date(2023, 1, 14),title: "Laptop",price: "200"},

  ])
  
  let addExpenseHandler = (expense) => {
     setExpense((prevExpense)=>{
      return [
        ...prevExpense,{...expense}
      ]
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
