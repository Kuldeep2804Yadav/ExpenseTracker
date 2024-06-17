// Write your code at the relevant places in the code below
import React from "react"; 
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";


function ExpenseItem(props) {
  const [title,setTitle] = useState(props.title);
  function buttonClickHandler(){
    setTitle("New Title")
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <button onClick={buttonClickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
