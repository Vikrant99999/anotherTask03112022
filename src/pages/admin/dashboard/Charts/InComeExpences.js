import React from "react";
import { Bar ,} from "react-chartjs-2";
import "./InComeExpences.css";
import data from "./temp/Line";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, PointElement,LineElement);
const InComeExpences = () => {
  return (
    <div className="kn-InComevsExpense-chart-container">
      <div className="kn-rbcc-header">
        <h3>Income and Expenses</h3>
      </div>
      <div className="kn-bar-char-income-expense">
        <Bar
          data={data}
          options={{
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default InComeExpences;
