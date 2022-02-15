import Expenses from "./components/expenses/Expenses.js";
import { Helmet, HelmetProvider } from 'react-helmet-async';

//import NewExpense from "./components/NewExpense/NewExpense";
//import Header from "./components/Header/Header";
import React from "react";
//import Footer from "./components/Footer/Footer.js";
import './index'

class App extends React.Component {
  expenses = [];
  renders = 0;
  
  constructor(props) {
    super(props);
  }
  addExpenseHandler = (expense) => {
    this.expenses.push(expense);
    
    this.addNewExpense(expense);
    this.setState({ expenses: this.expenses });
  };

  async addNewExpense(expense) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expense),
    };
    fetch("http://localhost:5000/addNewExpense", requestOptions)
      .then((response) => response.json())
   
    this.componentDidMount();
    
  }

  async componentDidMount() {
    // GET request using fetch with async/await

    const response = await fetch("http://localhost:5000/getAllExpenses");
    const data = await response.json();
    
    this.expenses = data.data;
    this.setState({ expenses: this.expenses });
  }

  render() {
    //const { totalReactPackages } = this.state;

    return (
        <HelmetProvider>
        <div className="content-cotntainer">
      <Helmet>
            <title>Expenses Manager</title>
            <meta name="description" content="App Description" />
            <meta name="theme-color" content="#008f68" />
        
          {/* <Header title="Expenses List Manager"></Header> */}
          </Helmet>
          <Expenses  expenses={this.expenses} addExpenseHandler={this.addExpenseHandler}></Expenses>
        </div>
        </HelmetProvider>
        
    
    );
  }
}

export default App;
