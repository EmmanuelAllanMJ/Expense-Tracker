import React from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  // props.onGetValue1((event) => event.target.value);
  // const event1 = (event) => {
  //   return event.target;
  // };
  // props.onGetValue1(event1);
  const dropDownChangeHandler = (event) => {
    // console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };
  // dropFunc();

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={dropDownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
