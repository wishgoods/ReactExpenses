//import { useState } from "react/cjs/react.development";
import "./ExpenseFilter.css";

// function useForceUpdate(){
//   const[selectedvalue,setSelectedValue] = useState("");
//   return()=>setSelectedValue(prevState=>"All Expenses")
// }
const ExpenseFilter = (props) => {
  const yearChangeHandler = (event) => {
    try{
    props.getYearToFilter(event.target.value);}
    catch(ex){
      props.getYearToFilter(event);
    }
  };


  //yearChangeHandler("All Expenses");
  return (
    <div className="filter-cotainer">
      {/* <label>Filter By Year</label> */}
    
      <select defaultValue="Select Year To Filter" onChange={yearChangeHandler}>
      <option  disabled key={-1}>Select Year To Filter</option>
       {props.options.length>0 ? <option key={0}>{"("+props.options[0]+"-"+props.options[props.options.length-1]+")"}</option>:<option disabled></option>}
        {props.options.map((el) => {
          return <option key={el}>{el}</option>;
        })}
       
      </select>
      </div>
   
  );
};
export default ExpenseFilter;
