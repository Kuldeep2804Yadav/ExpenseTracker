import ExpanseItem from "./components/ExpenseItem";


function App() {
  return (
    <div className="App">
        <h1>lets get started</h1>
        <p>I am learning react</p>
        <ExpanseItem date={new Date(2023,7,24)} title="Insurance" price="15" location="Bangalore"></ExpanseItem>
        <ExpanseItem date={new Date(2023,7,24)} title="Book" price="15" location="Delhi"></ExpanseItem>
        <ExpanseItem date={new Date(2023,7,24)} title="Pen" price="15" location="Hyderabad"></ExpanseItem>
        <ExpanseItem date={new Date(2023,7,24)} title="Laptop" price="15" location="Mumbai"></ExpanseItem>
      
    </div>
  );
}

export default App;
