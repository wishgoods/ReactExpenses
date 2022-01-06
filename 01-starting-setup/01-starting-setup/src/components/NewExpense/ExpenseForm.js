import "./ExpenseForm.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ExpenseForm = (props) => {
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
  const [no_values,setNoValues] = useState(false);
  const [userInput, setUserInput] = useState({
    enterdTitle: "",
    enterdAmount: "",
    enterdDate: "",
  });
  const { handleSubmit} = useForm();
  const submitHandler = (event) => {
    
    //event.prevetDefault();//prevents page reload
   if(userInput.enterdTitle.length>0 && userInput.enterdAmount.length>0 && userInput.enterdDate.length>0 ){
    const expenseData={
      title:userInput.enterdTitle,
      amount: userInput.enterdAmount,
      date:new Date(userInput.enterdDate)
    }
    
    props.onSaveExpenseData(expenseData);
    userInput.enterdTitle =""
    userInput.enterdAmount=""
    userInput.enterdDate= ""
    setNoValues(false)
  }
  else{
    setNoValues(true)
  }
 
  };
  
 
  return (
    <form onSubmit={handleSubmit(submitHandler)} >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.enterdTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input value={userInput.enterdAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input value={userInput.enterdDate}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2025-12-31"
          ></input>
        </div>
      </div>
      <button type="submit" >Add Expense</button>
      {no_values?<small>Values Missing, Alert was not added!</small>:<small> </small>}
    </form>
  );
};

export default ExpenseForm;
