import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/App.css";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

import getInitialData from "./components/kanban/get-initial-data";

import { UserContext } from "./UserContext";
import About from "./pages/About";

/* import foodsDatabase from "../src/components/foodDatabase.jsx" */

function App() {
  const [user, setUser] = useState(null);
  const [showSnack, setShowSnack] = useState(false);
  const [isReqGrams, setIsReqGrams] = useState(true);
  const [itemEdit, setItemEdit] = useState("stateItemEdit");

  const [arrFoods, setArrFoods] = useState([]);
  const [recipes, setRecipes] = useState([
    {
      id: 0,
      title: "Porridge",
      ingredients: ["soya drink", "oats", "almonds", "banana"],
    },
    {
      id: 1,
      title: "broccoli, rice, chicken",
      ingredients: ["broccoli", "rice", "chicken breast", "oil", "apple"],
    },
    {
      id: 2,
      title: "chips & fish",
      ingredients: ["tomato", "potato", "hake", "oil","orange"],
    },
  ]);

  const [intake, setIntake] = useState("Breakfast");

  const [inputProt, setInputProt] = useState(102);
  const [inputLip, setInputLip] = useState(76);
  const [inputCarb, setInputCarb] = useState(227);

  const [inputProtPerc, setInputProtPerc] = useState(20);
  const [inputLipPerc, setInputLipPerc] = useState(35);
  const [inputCarbPerc, setInputCarbPerc] = useState(45);

  const [kanban, setKanban] = useState(() => getInitialData());

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
        recipes,
        setRecipes,
        intake,
        setIntake,
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
        kanban,
        setKanban,
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
      <div className="container min-width-1200px" >
        <Router>
          <Switch>
            {user ? (
              <Route exact path="/" component={Home}></Route>
            ) : (
              <Route exact path="/" component={Login}></Route>
            )}

            <Route path="/admin" component={Admin}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
