import "./ExpenseItem.css";

const ExpenseItem=(props)=> {
 const classes = 'card '+props.className;
  return (
    <div  className={classes} key={props.id}>{props.children}</div>
  );
}

export default ExpenseItem;
