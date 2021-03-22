import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart() {
  const data = {
    labels: ["Protein", "Lipids", "Carbohydrates"],
    datasets: [
      {
        label: "Macronutrients",
        data: [14, 30, 71],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",

          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Macronutrients",
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
