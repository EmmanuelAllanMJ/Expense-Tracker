import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Grocery",
    amount: 750.0,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 40000.0, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 5000.0,
    date: new Date(2021, 5, 28),
  },
  {
    id: "e4",
    title: "New couch",
    amount: 9500.0,
    date: new Date(2021, 1, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //This is how we use React to display the content
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement(
  //     "h2",
  //     {},
  //     "Let's get started!",
  //     React.createElement(Expenses, { expenses: expenses })
  //   )
  // );

  //THis is how JSX works
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => [expense, ...prevExpense]);
    console.log(expenses);
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
