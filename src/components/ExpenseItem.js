import "./ExpenseItem.css";

function ExpenseItem(props) {
    let expenseDate = props.date.toISOString()
    let expenseTitle=props.title
    let expensePrice =props.price
    let expenseLocation=props.location
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