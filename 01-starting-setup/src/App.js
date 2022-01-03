import Expenses from "./components/expenses/Expenses.js";
import { Helmet } from "react-helmet";
import NewExpense from "./components/NewExpense/NewExpense";

import React from "react";

class App extends React.Component {
  expenses = [];
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

  async addNewExpense(expense)
  {
    const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(expense)
      };
      fetch('http://localhost:5000/addNewExpense', requestOptions)
          .then(response => response.json())
          .then(data => this.setState({ totalReactPackages: data.total}));
          
  }
  async componentDidMount() {
    // GET request using fetch with async/await
    
      const response = await fetch("http://localhost:5000/getAllExpenses");
      const data = await response.json();
      this.setState({ totalReactPackages: data.total });
      this.expenses = data.data;
  
  }


  render() {
    const { totalReactPackages } = this.state;
    return (
      <div>
        <Helmet>
          <title>Expenses Manager</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <NewExpense onAddExpense={this.addExpenseHandler}></NewExpense>
        <Expenses
          expenses={this.expenses}
          
        ></Expenses>
      </div>
    );
  }
}

export default App;
