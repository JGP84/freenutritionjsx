import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import uuid from "react-uuid";
import "./App.css";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

import { UserContext } from "./UserContext";

function App() {
  
  const [showSnack, setShowSnack] = useState(false);
  const [arrFoods, setArrFoods] = useState([]);
  const [inputProt, setInputProt] = useState("15");
  const [inputLip, setInputLip] = useState("30");
  const [inputCarb, setInputCarb] = useState("75");
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
        const response = await fetch("http://localhost:5000/admin");
        const jsonData = await response.json();
  
        setFoodDatabase(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };
  
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
        columns,
        setColumns,
        foodDatabase,setFoodDatabase,showSnack, setShowSnack
      }}
    >
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/admin" component={Admin}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
