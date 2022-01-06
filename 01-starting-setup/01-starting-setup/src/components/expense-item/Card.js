import "./ExpenseItem.css";

const Card=(props)=> {
 const classes = 'card '+props.className;
  return (
    <div  className={classes} key={props.id}>{props.children}</div>
  );
}

export default Card;
