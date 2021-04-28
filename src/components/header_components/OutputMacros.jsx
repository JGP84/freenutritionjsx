import useDietLogic from "../../hooks/useDietLogic.jsx";
import { percenProt, percenLip, percenCarb } from "../../functions/functions";
import DoughnutChart from "../DoughnutChart.jsx";

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

  return (
    <>
      <div className="form-row d-flex p-3">
        <form>
          <label>
            <h2>Results</h2>
          </label>
          <div className="form-row d-flex flex-row mt-3">
            <div className="col-md-4 mb-4">
              <label>
                <h4>Proteins</h4>
              </label>
              <input
                className="form-control w-75 text-center mt-1 ouputMacros"
                placeholder="Protein in g"
                value={
                  percenProt(addProteins, addKcal) +
                  "%" +
                  "/ " +
                  formatAddProteins() +
                  "g"
                }
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
                value={
                  percenLip(addLipids, addKcal) +
                  "%" +
                  "/ " +
                  formatAddLipids() +
                  "g"
                }
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
                value={
                  percenCarb(addHc, addKcal) + "%" + "/ " + formatAddHc() + "g"
                }
                onChange={addFoodWeight}
                style={{ backgroundColor: "#b65c03" }}
              ></input>
            </div>
          </div>
        </form>
        {/*  */}
        <div className="form-row d-flex">
          <div className="container mt-3 ">
            <DoughnutChart />
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
