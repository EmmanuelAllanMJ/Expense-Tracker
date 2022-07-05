//rfce
import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    //onAddExpense is in App.js
    //Here we are lifting data
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {/* This fetches and stores data 
      This data we are fetching from ExpenseForm we are lifting up
      Then we are lifting the data up even further to App.js  
      ExpenseForm -> NewExpense -> App -> Expenses
      As we have ExpenseForm component in NewExpense.js and NewExpense component in App.js */}

      {/* 
      ****Working principle****
      1. We are creating a prop in ExpenseForm which gets saveExpenseDataHandler as it's parameter
      2. saveExpenseDataHandler is a pointer which points to function which is in NewExpense.js which accepts a parameter
      3. So we are passing the parameter like this  "props.onSaveExpenseData(expenseData);" in ExpenseForm.js
      4. This parameter will be used by the function in NewExpense.js
      5. "<NewExpenses onAddExpense={addExpenseHandler} />" line from App.js will accept prop from NewExpense
      6. addExpenseHandler in App.js will accept a parameter. This will use the array accordingly
       */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
