import useDietLogic from "../../hooks/useDietLogic.jsx";

import { Doughnut } from "react-chartjs-2";

/* Functions in OutputMacros:

percenProt
percenLip
percenCarb

*******
addFoodWeight

*****

addProteins
addLipids
addHc
addKcal

formatAddProteins
formatAddLipids
formatAddHc
formatAddKcal

*/


const OutputMacros = () => {
  const {
    addFoodWeight,
    addProteins,
    addLipids,
    addHc,
    formatAddProteins,
    formatAddLipids,
    formatAddHc,
    addKcal,
    formatAddKcal,
  } = useDietLogic();

  /* DoughnutChart */

  const percenProt = () => {
    if (addProteins() === 0) {
      return 0;
    } else {
      return Math.round((100 * addProteins() * 4) / addKcal());
    }
  };

  const percenLip = () => {
    if (addLipids() === 0) {
      return 0;
    } else {
      return Math.round((100 * addLipids() * 9) / addKcal());
    }
  };
  const percenCarb = () => {
    if (addHc() === 0) {
      return 0;
    } else {
      return Math.round((100 * addHc() * 4) / addKcal());
    }
  };

  const data = {
    /* labels: ["% Proteins", "% Lipids", "% Carbohydrates"] , */
    datasets: [
      {
        label: "Macronutrients",
        data: [percenProt(), percenLip(), percenCarb()],
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
  /* End DoughnutChart  */

  return (
    <>
      <div className="form-row d-flex p-3">
        <form>
          <label>
            <h2>Results</h2>
          </label>

          <hr />
          <div className="form-row d-flex flex-row">
            <div className="col-md-4 mb-4">
              <label>
                <h4>Proteins</h4>
              </label>
              <input
                className="form-control w-75 text-center mt-1 ouputMacros"
                placeholder="Protein in g"
                value={percenProt() + "%" + " / " + formatAddProteins() + "g"}
                onChange={addFoodWeight}
                style={{ backgroundColor: "rgba(255, 99, 132, 1)" }}
              ></input>
            </div>
            <div className="col-md-4 mb-4">
              <label>
                <h4>Fats</h4>
              </label>
              <input
                className="form-control w-75 text-center mt-1 ouputMacros"
                placeholder="Lipids in g"
                value={percenLip() + "%" + " / " + formatAddLipids() + "g"}
                onChange={addFoodWeight}
                style={{ backgroundColor: "rgba(255, 205, 86, 1)" }}
              ></input>
            </div>
            <div className="col-md-4 mb-4">
              <label>
                <h4>Carbohydrates</h4>
              </label>
              <input
                className="form-control w-75 text-center mt-1 ouputMacros"
                placeholder="Carbohydrates in g"
                value={percenCarb() + "%" + " / " + formatAddHc() + "g"}
                onChange={addFoodWeight}
                style={{ backgroundColor: "#b65c03" }}
              ></input>
            </div>
          </div>
        </form>
        {/*  */}
        <div className="form-row d-flex">
          <div className="container mt-3 ">
            <Doughnut data={data} options={options} />
          </div>

          <div className="divMacros ">
            <label>
              <h4>CALORIES</h4>
            </label>
            <input
              className="form-control col-auto kcalOuput"
              placeholder="Carbohydrates in g"
              value={formatAddKcal() + "Kcal"}
              onChange={addFoodWeight}
            ></input>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default OutputMacros;
