import "./ExpenseItem.css";

function ExpenseItem() {
    let expenseDate = new Date(2023,7,15).toISOString()
    let expenseTitle= "Book"
    let expensePrice =10
    let expenseLocation="Bangalore"
  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
        <div className="expense-item__location">{expenseLocation}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;