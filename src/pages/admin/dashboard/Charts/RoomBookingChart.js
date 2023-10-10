import React, { useState, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./RoomBookingChart.css";

// importing temporary data
import data from "./temp/tempDrb";

// include after all imports
ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement);

const RoomBookingChart = () => {
  const [lastDays, setLastDays] = useState(30);

  const [showflop, setShowflop] = useState(false);
  const shofloptions = () => {
    setShowflop(!showflop);
  };

  return (
    <div className="kn-roombooking-chart-container">
      <div className="kn-rbcc-header">
        <h3>Room booking</h3>
        <div className="kn-rbcc-header-actions" onClick={shofloptions}>
          {lastDays} days
          <BsChevronDown />
          <div
            className={
              showflop
                ? "kn-rbcc-filter-option open"
                : "kn-rbcc-filter-option"
            }
            onClick={(e) => setLastDays(e.target.value)}
          >
            <input type="radio" id="7daysroom" name="lastdays" value={7} />
            <label htmlFor="7daysroom">7 days</label>
            <input type="radio" id="15daysroom" name="lastdays" value={15} />
            <label htmlFor="15daysroom">15 days</label>
            <input type="radio" id="30daysroom" name="lastdays" value={30} />
            <label htmlFor="30daysroom">30 days</label>
          </div>
        </div>
      </div>
      <div className="rb-doughnut-chart">
        <Doughnut
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

export default RoomBookingChart;
