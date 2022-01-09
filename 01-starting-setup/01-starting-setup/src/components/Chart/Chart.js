import React from "react";
import ChartBar from "./ChartBar";
import styles from "./Chart.module.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint=>dataPoint.value);

    const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className={styles.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar  
        value={dataPoint.value} 
        maxValue={totalMaximum}
        key = {dataPoint.label}
        label = {dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
