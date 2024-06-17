import React from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpenses/NewExpense';
function App() {
  let expenses = [
    {
      id: 1,
      date: new Date(2023, 7, 8),
      title: "Insurance",
      price: "100"
    },
    {
      id: 2,
      date: new Date(2023, 9, 2),
      title: "Book",
      price: "50"
    },
    {
      id: 3,
      date: new Date(2023, 3, 24),
      title: "Pen",
      price: "1"
    },
    {
      id: 4,
      date: new Date(2023, 1, 14),
      title: "Laptop",
      price: "200"
    },
  ];
  return (
    <div className="App">
      <NewExpense/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
