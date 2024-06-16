
import Expenses from "./components/Expenses";
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
      <h1>Let's get started</h1>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
