import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: Number(0) },
    { label: "Feb", value: Number(0) },
    { label: "Mar", value: Number(0) },
    { label: "Apr", value: Number(0) },
    { label: "May", value: Number(0) },
    { label: "Jun", value: Number(0) },
    { label: "Jul", value: Number(0) },
    { label: "Aug", value: Number(0) },
    { label: "Sep", value: Number(0) },
    { label: "Oct", value: Number(0) },
    { label: "Nov", value: Number(0) },
    { label: "Dec", value: Number(0) },
  ];
  for (const expense of props.expenses) {
    const expenseMonth = new Date(expense.date).getMonth();
   //console.log( parseInt(expense.amount, 10))
    chartDataPoints[expenseMonth].value += parseInt(expense.amount, 10)
  }
 //console.log(chartDataPoints);
  return <Chart dataPoints={chartDataPoints} />;
};
export default ExpensesChart;
