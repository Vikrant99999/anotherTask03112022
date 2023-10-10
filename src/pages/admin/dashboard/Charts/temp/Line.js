const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ],
  datasets: [
    {
      type: "line",
      label: "Bar Dataset",
      data: [1, 15, 24, 34, 24, 34, 35, 43, 24, 55, 23, 54],
      borderColor: "#ff5200",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      type: "line",
      label: "Line Dataset",
      data: [5, 20, 14, 33, 35, 34, 25, 40, 24, 54, 40, 22],
      fill: false,
      borderColor: "#077b8a",
    },
  ],
};
export default data;
