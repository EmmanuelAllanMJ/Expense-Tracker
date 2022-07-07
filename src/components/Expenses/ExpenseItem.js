import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // Using states
  //title - current state value, setTitle - updated value
  //here we are using const because we are not assigning values using =
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    //When this function is called, the state of this function will be executed again
    //This is state update function.
    setTitle("Update");
    //Calling the setTitle function does not right away changes the value but instead schedule this state update
    //we get the previous value
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">${props.amount}</p>
        {/* <button onClick={clickHandler}>Change title</button> */}
      </div>
    </Card>
  );
}

export default ExpenseItem;
