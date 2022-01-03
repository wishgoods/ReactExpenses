import "./ExpenseFilter.css";
import React from "react";

const ExpenseFilter = (props) => {
  
  const yearChangeHandler = (event) => {
    
    props.getYearToFilter(event.target.value);
  };

  return (
    <div className="filter-cotainer">
      <label>Filter By Year</label>
      <select  onChange={yearChangeHandler} >
      <option key={0}>All Expenses</option>
        {props.options.map((el) => {
          return <option key={el}   >{el}</option>;
        })}
      </select>
    </div>
  );
};
export default ExpenseFilter;
