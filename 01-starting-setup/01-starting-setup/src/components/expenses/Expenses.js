import ExpenseItem from "../expense-item/ExpenseItem";
import "./Expenses.css";
import Card from "../expense-item/Card.js";
import ExpenseFilter from "../expenses-filter/ExpenseFilter";
import { useState } from "react";
import Footer from "../Footer/Footer";
import ExpensesChart from "./ExpensesChart";
import NewExpense from "../NewExpense/NewExpense";

const Expenses = (props) => {
  let options = [];
  const [filtered_expenses, setFiltered] = useState(props.expenses);
  let min_year ="10000000000"
  let max_year = "0";
  const [show_form, setShowForm] = useState(false);

  
  props.expenses.forEach((element) => {
  
    let year = new Date(element.date).getFullYear();

    // if (!options.includes(year)) {
    //   options.push(year);
    // }
    if(year<min_year)
    {
      min_year=year;
    }
    if(year>max_year)
    {
      max_year=year;
    }
  });
  

for (let index = min_year; index <= max_year; index++) {
  options.push(index);
  
}
  options = options.sort();

  const FilterYearHandler = (year) => {
    
    
    if (String(year).includes('-')) {
      setFiltered(
        props.expenses.sort((a, b) => {
          var x = a["date"];
          var y = b["date"];
          return x < y ? -1 : x > y ? 1 : 0;
        })
      );
    }
    else
    {
      setFiltered(
      props.expenses
        .filter((el) => {
          let el_year = new Date(el.date).getFullYear();
          return String(el_year)=== String(year);
        })
        .sort((a, b) => {
          var x = a["date"];
          var y = b["date"];
          return x < y ? -1 : x > y ? 1 : 0;
        })
    );
    }
    return filtered_expenses;
  };
  const addExpenseHandler=(expense)=>{
    
    props.addExpenseHandler(expense);
   
  }
  const changeOnShow=()=>{
    setShowForm(
      !show_form);
  }
 

  return (
    
    <div className="card_and_filter">
  
      {show_form?<NewExpense className="new-expense" onAddExpense={addExpenseHandler} options ={options} changeOnShow={changeOnShow}></NewExpense>:<div className="new-expense"><button  onClick={changeOnShow}>Add Expense</button></div>}
          
      <ExpenseFilter
      options={options}
       
        getYearToFilter={FilterYearHandler}
      ></ExpenseFilter>
     {} <ExpensesChart expenses = {filtered_expenses}/>
      <Card className="expenses-container">
        <ol>
          <div className="scroller">
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
          </div>
        </ol>
      </Card>
    <Footer title="Total Expenses Count : " expenses_count={filtered_expenses.length}></Footer>

    </div>
  );
};

export default Expenses;
