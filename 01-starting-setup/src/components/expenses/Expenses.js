import ExpenseItem from "../expense-item/ExpenseItem";
import "./Expenses.css";
import Card from "../expense-item/Card.js";
import ExpenseFilter from "../expenses-filter/ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  let options = [];
  const [filtered_expenses, setFiltered] = useState(props.expenses);

  props.expenses.forEach((element) => {
    let year = new Date(element.date).getFullYear();

    if (!options.includes(year)) {
      options.push(year);
    }
  });
  options = options.sort();
  
  const FilterYearHandler = (year) => {
    
    
    setFiltered(
      props.expenses.filter((el) => {
        let el_year = new Date(el.date).getFullYear();
        return el_year == year;
      }).sort((a,b)=>{
        var x = a["date"];
        var y = b["date"];
        return x < y ? -1 : x > y ? 1 : 0;
      })
    );

    if (year === "All Expenses") {
      setFiltered(props.expenses.sort((a,b)=>{
        var x = a["date"];
        var y = b["date"];
        return x < y ? -1 : x > y ? 1 : 0;
      }));
    }
    return filtered_expenses;
    
  };

  
  return (
    <div>
      <ExpenseFilter
        options={options}
        getYearToFilter={FilterYearHandler}
      ></ExpenseFilter>
      <Card className="expenses-container">
        <ol>
          {filtered_expenses.map((el) => {
            return (
              <li key={el.id}>
                <ExpenseItem
                  date={el.date}
                  title={String(el.title).toLowerCase()}
                  amount={el.amount}
                ></ExpenseItem>
              </li>
            );
          })}
        </ol>
      </Card>
    </div>
  );
};

export default Expenses;
