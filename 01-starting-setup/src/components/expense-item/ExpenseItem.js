import "./ExpenseItem.css";
import DateItem from  "../date-item/DateItem.js"
import Card  from  "./Card.js"
import React,{ useState} from 'react';

const ExpenseItem=(props) =>{
  const [title,setTitle] =useState(props.title);

  
  const clickHandler=()=>{
    setTitle("updated");
  }
  if (!props) {
    return null;
  }
  return (
    <Card >
      <DateItem  date={props.date}></DateItem>
      <div className="expense-item__description" >
        
        <h2>{title}</h2>
       
        <div className="expense-item__price">{props.amount}</div>
      
      </div>
      <button onClick ={clickHandler} >Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
