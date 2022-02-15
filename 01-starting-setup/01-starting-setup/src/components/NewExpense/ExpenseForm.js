import "./ExpenseForm.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ExpenseForm = (props) => {
  let min_date = props.options[0] + "-01-01";
  let max_date = props.options[props.options.length - 1] + "-12-31";
  if (props.options.length === 0) {
    min_date = new Date().getFullYear() + "-01-01";
    max_date = new Date().getFullYear() + 5 + "-12-31";
  }

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...userInput, enterdTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...userInput, enterdAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...userInput, enterdDate: event.target.value };
    });
  };

  const [userInput, setUserInput] = useState({
    enterdTitle: "",
    enterdAmount: "",
    enterdDate: "",
  });
  const { handleSubmit } = useForm();

  const [no_values, setNoValues] = useState({
    no_title: false,
    no_amount: false,
    no_date: false,
  });

  const submitHandler = (event) => {
    //event.prevetDefault();//prevents page reload
    if (
      userInput.enterdTitle.length > 0 &&
      userInput.enterdAmount.length > 0 &&
      userInput.enterdDate.length > 0
    ) {
      const expenseData = {
        title: userInput.enterdTitle,
        amount: userInput.enterdAmount,
        date: new Date(userInput.enterdDate),
      };

      props.onSaveExpenseData(expenseData);
      userInput.enterdTitle = "";
      userInput.enterdAmount = "";
      userInput.enterdDate = "";
      //setNoValues(false);
    } else {
      //setNoValues(true);
    }
  };
  const handleClick = (e) => {
    if (e.detail == 2) {
      props.changeOnShow();
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="new-expense__controls">
        <div
          className={`new-expense__control ${
            userInput.enterdTitle.length < 1 ? "invalid" : ""
          }`}
        >
          <label>Title</label>
          <input
            type="text"
            value={userInput.enterdTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div
          className={`new-expense__control ${
            userInput.enterdAmount.length < 1 ? "invalid" : ""
          }`}
        >
          <label>Amount</label>
          <input
            value={userInput.enterdAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div
          className={`new-expense__control ${
            userInput.enterdDate.length < 1 ? "invalid" : ""
          }`}
        >
          <label>Date</label>
          <input
            value={userInput.enterdDate}
            onChange={dateChangeHandler}
            type="date"
            min={min_date}
            max={max_date}
          ></input>
        </div>
      </div>
      <button type="submit" onClick={handleClick}>
        Add Expense
      </button>
      {/* {no_values ? (
        <small>Values Missing, Alert was not added!</small>
      ) : (
        <small> </small>
      )} */}
    </form>
  );
};

export default ExpenseForm;
