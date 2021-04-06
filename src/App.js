import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import uuid from "react-uuid";
import "./App.css";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

import { UserContext } from "./UserContext";

/* import foodsDatabase from "../src/components/foodDatabase.jsx" */

function App() {
  const [user, setUser] = useState(null);
  const [showSnack, setShowSnack] = useState(false);
  const [isReqGrams, setIsReqGrams] = useState(true);
  const [itemEdit, setItemEdit] = useState("stateItemEdit");

  const [arrFoods, setArrFoods] = useState([]);

  const [inputProt, setInputProt] = useState(100);
  const [inputLip, setInputLip] = useState(78);
  const [inputCarb, setInputCarb] = useState(225);

  const [inputProtPerc, setInputProtPerc] = useState(20);
  const [inputLipPerc, setInputLipPerc] = useState(35);
  const [inputCarbPerc, setInputCarbPerc] = useState(45);

  const [columns, setColumns] = useState({
    [uuid()]: {
      name: "Breakfast",
      items: [],
    },
    [uuid()]: {
      name: "Lunch",
      items: [],
    },

    [uuid()]: {
      name: "Dinner",
      items: [],
    },
  });

  /* my server food */
  const [foodDatabase, setFoodDatabase] = useState([]);

  const getFoods = async () => {
    try {
      const response = await fetch(
        "https://backend-challenge-ts.herokuapp.com/"
      );
      const jsonData = await response.json();

      setFoodDatabase(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  /* const getFoods =  () => {
      setFoodDatabase(foodsDatabase)
    } */

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <UserContext.Provider
      value={{
        arrFoods,
        setArrFoods,
        inputProt,
        setInputProt,
        inputLip,
        setInputLip,
        inputCarb,
        setInputCarb,
        inputProtPerc,
        setInputProtPerc,
        inputLipPerc,
        setInputLipPerc,
        inputCarbPerc,
        setInputCarbPerc,
        columns,
        setColumns,
        foodDatabase,
        setFoodDatabase,
        showSnack,
        setShowSnack,
        isReqGrams,
        setIsReqGrams,
        itemEdit,
        setItemEdit,
        user,
        setUser,
      }}
    >
      <div className="container">
        <Router>
          <Switch>
            {user ? (
              <Route exact path="/" component={Home}></Route>
            ) : (
              <Route exact path="/" component={Login}></Route>
            )}

            <Route path="/admin" component={Admin}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
