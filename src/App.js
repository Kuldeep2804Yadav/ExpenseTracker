import ExpanseItem from "./components/ExpenseItem";

function App() {
  let Expense = [
    {
      id: 1,
      date: new Date(2023, 7, 8),
      title: "Insurance",
      price: "100",
      location: "Bangalore",
    },
    {
      id: 2,
      date: new Date(2023, 9, 2),
      title: "Book",
      price: "50",
      location: "Delhi",
    },
    {
      id: 3,
      date: new Date(2023, 3, 24),
      title: "Pen",
      price: "1",
      location: "Hyderabad",
    },
    {
      id: 4,
      date: new Date(2023, 1, 14),
      title: "Laptop",
      price: "200",
      location: "Mumbai",
    },
  ];
  return (
    <div className="App">
      <h1>lets get started</h1>
      <p>I am learning react</p>
      {Expense.map((expense, index) => {
        return (
          <ExpanseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
            location={expense.location}
          ></ExpanseItem>
        );
      })}
    </div>
  );
}

export default App;
