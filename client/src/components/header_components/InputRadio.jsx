import React, { useContext } from "react";
import { UserContext } from "../../UserContext.js";

const InputRadio = () => {

    const {
        isReqGrams, setIsReqGrams
        
      } = useContext(UserContext);

      /* const changeState = ()=> {
        setIsReqGrams(false)
      } */
      

  return (
    <>
      <div className="d-flex  align-items-center p-3">
        <label>
          {" "}
          <h2>Requirements</h2>
        </label>

        <div className="ms-5">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange ={()=>setIsReqGrams(true)}
            />
            <label className="form-check-label"         htmlFor="flexRadioDefault1">
              Percentage (%)
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onChange ={()=>setIsReqGrams(false)}
              /* checked */
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Grams (g)
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputRadio;
