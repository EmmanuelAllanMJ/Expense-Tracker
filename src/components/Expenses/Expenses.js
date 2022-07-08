import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState(new Date().getFullYear());

  function filterChangeHandler(seletedYear) {
    setFilterYear(seletedYear);
  }

  const filterExpenses = props.expenses.filter((expense) => {
    return filterYear.toString() === expense.date.getFullYear().toString();
  });

  // Clean approach
  // let expensesContent = <p>No response</p>;
  // if (filterExpenses.length > 0) {
  //   expensesContent = filterExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));

  return (
    <div>
      <Card className="expenses">
        {/* This component controls the value of ExpenseFilter.js so ExpenseFilter.js is called controlled component */}
        <div className="chart-grid">
          <ExpenseChart expenses={filterExpenses} />
        </div>
        <ExpenseFilter
          selectedYear={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filterExpenses} />
        {/* Writing using components */}

        {/* {expensesContent} */}
        {/* Writing neat code */}

        {/* But using this approach will be unefficient
        as all the items are updated instead adding only the new item
        and this can lead to bugs if we have states on these items
        So we add key */}
        {/* Other way to write if statement */}
        {/* {filterExpenses.length === 0 && <p>No responses</p>}
        {filterExpenses.length > 0 &&
          filterExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* This {} dont accept if else or for statements so we use ternary operator */}
        {/* {filterExpenses.length === 0 ? (
          <p>No responses</p>
        ) : (
          filterExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
      </Card>
    </div>
  );
}

export default Expenses;
