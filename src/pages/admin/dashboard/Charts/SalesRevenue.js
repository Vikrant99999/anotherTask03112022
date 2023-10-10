import React, { Fragment } from "react";
import "./SalesRevenue.css";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// importing temporary data
import data from "./temp/tempData";

// include after all imports
ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement);


const SalesRevenue = () => {
  return (
    <Fragment>
      <div className="kn-sales-revenue-container">
        <div className="kn-src-header">
          <h3>Sales and Revenue</h3>
          <p>In last 30 days revenue from rent.</p>
        </div>
        <div className="kn-sales-com-data">
          <div className="kn-sales-com-data-col">
            <p>Monthly</p>
            <h3>9.23K</h3>
            <p>23</p>
          </div>
          <div className="kn-sales-com-data-col">
            <p>Weakly</p>
            <h3>9.23K</h3>
            <p>23</p>
          </div>
          <div className="kn-sales-com-data-col">
            <p>Daily (Avg)</p>
            <h3>9.23K</h3>
            <p>23</p>
          </div>
        </div>
        <div className="kn-salesr-com-bar">
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
    </Fragment>
  );
};

export default SalesRevenue;
