import { Doughnut } from "react-chartjs-2";
import { percenProt, percenLip, percenCarb} from "./../functions/functionsParams";
import useDietLogic from "../hooks/useDietLogic";

const DoughnutChart = () => {
    const {
        addProteins,
        addLipids,
        addHc,
        addKcal,
      } = useDietLogic();

  const data = {
    /* labels: ["% Proteins", "% Lipids", "% Carbohydrates"] , */
    datasets: [
      {
        label: "Macronutrients",
        data: [
          percenProt(addProteins, addKcal),
          percenLip(addLipids, addKcal),
          percenCarb(addHc, addKcal),
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",

          "#b65c03",
        ],
      },
    ],
  };

  const options = {
    title: {
      display: false,
      text: "Macronutrients",
    },
  };

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
};

export default DoughnutChart;
