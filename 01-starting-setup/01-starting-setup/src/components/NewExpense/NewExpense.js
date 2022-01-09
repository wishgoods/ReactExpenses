import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {

    const SaveExpenseDataHandler =(enteredExpenseData)=>{
        
        const expenseData={
           
            id:Math.random().toString(),
            ...enteredExpenseData
        }
        props.onAddExpense(expenseData)
    }
    
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} options={props.options} changeOnShow={props.changeOnShow}/>

    </div>
  );
};

export default NewExpense;
