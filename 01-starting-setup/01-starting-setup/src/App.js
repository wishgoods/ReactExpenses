import Expenses from "./components/expenses/Expenses.js";
import { Helmet } from "react-helmet";
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

    this.state = {
      totalReactPackages: null,
    };
    this.componentDidMount();
  }
  addExpenseHandler = (expense) => {
    this.expenses.push(expense);
    this.setState({ totalReactPackages: this.expenses });
    this.addNewExpense(expense);
  };

  async addNewExpense(expense) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expense),
    };
    fetch("http://localhost:5000/addNewExpense", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ totalReactPackages: data.total }));
    this.componentDidMount();
    
  }

  async componentDidMount() {
    // GET request using fetch with async/await

    const response = await fetch("http://localhost:5000/getAllExpenses");
    const data = await response.json();
    this.setState({ totalReactPackages: data.total });
    this.expenses = data.data;
  }

  render() {
    //const { totalReactPackages } = this.state;

    return (
      <div className="app-container">
        <div className="content-cotntainer">
          <Helmet>
            <title>Expenses Manager</title>
            <meta name="description" content="App Description" />
            <meta name="theme-color" content="#008f68" />
          </Helmet>
          {/* <Header title="Expenses List Manager"></Header> */}
          
          <Expenses  expenses={this.expenses} addExpenseHandler={this.addExpenseHandler}></Expenses>
        </div>
        
        
      </div>
    );
  }
}

export default App;
