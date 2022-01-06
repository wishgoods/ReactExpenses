import "../expense-item/ExpenseItem.css";

const DateItem=(props)=> {
    let my_date = new Date(props.date);
    const month = my_date.toLocaleDateString('en-US',{month:'long'});
    const day = my_date.getDate();
    const year = my_date.getFullYear();
    
  if (!props) {
    return null;
  }
  return (
     <div className="date-item">
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
  );
}

export default DateItem;
