import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //we need thw initial value to be empty. Multiple state approach
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //one state approach
  //   const [userInput, setUserInput] = useState({
  //     enterTitle: "",
  //     enterDate: "",
  //     enteredAmount: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //one state approach
    // setUserInput({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // });

    //this is good to use because React schedules state updates, it doesnt perform them instantly
    //So if u schedule lot of state updates at the same time you could be depending on an outdated or incorrect snapshot

    //The below approach, react will guaranty that the state is always the latest one. This is safe
    // setUserInput((prevState) => {
    //   return { ...prevState, enterTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    //we use this to update the value dynamically
    //this is to store in our state
    setEnteredAmount(event.target.value);

    //one state approach
    // setUserInput({
    //   ...userInput,
    //   enterAmount: event.target.value,
    // });
  };
  //should add today date

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    //one state approach
    // setUserInput({
    //   ...userInput,
    //   enterDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    //This is to prevent form to send request to the server
    //So we are preventing reloading of the page
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };
    // console.log(expenseData);

    //We are executing this function from another component
    //Here we are communicating from child to parent component
    //We cant communicate bw chid comp
    props.onSaveExpenseData(expenseData);

    //This is called two-way binding
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
