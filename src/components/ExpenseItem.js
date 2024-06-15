import "./ExpenseItem.css";
let Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function ExpenseItem(props) {
  let month = Months[props.date.getMonth()]
  let year = props.date.getFullYear();
  let date = props.date.getDate();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{date}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <div className="expense-item__location">{props.location}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
