import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState(new Date().getFullYear());

  function filterChangeHandler(seletedYear) {
    setFilterYear(seletedYear);
  }
  return (
    <div>
      <Card className="expenses">
        {/* This component controls the value of ExpenseFilter.js so ExpenseFilter.js is called controlled component */}
        <ExpenseFilter
          selectedYear={filterYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
