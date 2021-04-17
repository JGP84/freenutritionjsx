import { useContext } from "react";
import { UserContext } from "./../UserContext";




const useDietLogic = () => {
    
  const {
    inputProt,
    inputLip,
    inputCarb,
    arrFoods,
  } = useContext(UserContext);

  function addFoodWeight() {
    arrFoods.forEach((item, i) => {
      item.foodWeight = item.weight_int * addOuputsFoods()[i];
    });
  }

  function nintCards() {
    // return array

    return arrFoods.map((item) => {
      return item.n_int_card;
    });
  }

  function addOuputsFoods() {
    //insert the exchanges of starchyFoods
    const arrOuputsFoods = nintCards();

    arrOuputsFoods.forEach((i) => {
      arrOuputsFoods[starchyFoodsIndex()[i]] =
        nintStarchyFoods() / starchyFoodsIndex().length;
    });

    //insert the exchanges of proteinFoods
    arrOuputsFoods.forEach((i) => {
      arrOuputsFoods[proteinFoodIndex()[i]] =
        nintProtein() / proteinFoodIndex().length;
    });
    //insert the exchanges of fats
    arrOuputsFoods.forEach((i) => {
      arrOuputsFoods[lipidsIndex()[i]] = nintLipids() / lipidsIndex().length;
    });

    return arrOuputsFoods;
  }

  function starchyFoodsIndex() {
    return macrosIndex("starchyFoods", arrFoods);
  }

  function nintStarchyFoods() {
    return (inputCarb - totalHc()) / 14;
  }

  function totalHc() {
    return addMacros(nintCards, gHcIntCards);
  }

  function proteinFoodIndex() {
    return macrosIndex("proteinFoods", arrFoods);
  }

  function lipidsIndex() {
    return macrosIndex("fats", arrFoods);
  }

  function totalProtein() {
    starchyFoodsIndex();

    return addMacros(nintCards, gProtIntCards);
  }

  function totalLipids() {
    starchyFoodsIndex();

    proteinFoodIndex();

    return addMacros(nintCards, gLipIntCards);
  }

  function nintProtein() {
    return (inputProt - totalProtein()) / 7;
  }

  function nintLipids() {
    return (inputLip - totalLipids()) / 5;
  }

  function gProtIntCards() {
    return gMacrosIntCards("prot", arrFoods);
  }

  function gLipIntCards() {
    return gMacrosIntCards("lip", arrFoods);
  }

  function gHcIntCards() {
    return gMacrosIntCards("hc", arrFoods);
  }

/* Refactoring functions */

const macrosIndex = (foodType, arrFoods) => {
    const indices = [];
  
    let idx = arrFoods.map((e) => e.type).indexOf(foodType);
    while (idx !== -1) {
      indices.push(idx);
  
      idx = arrFoods.map((e) => e.type).indexOf(foodType, idx + 1);
    }
  
    return indices;
  };
  
  const gMacrosIntCards = (macro, arrFoods) => {
    
    return arrFoods.map((item, i) => {
     return item = arrFoods[i][macro]
     });
   
  };
  const addMacros = (nintCards, macroIntCards, arrFoods) => {
    let arrAdd = [];
  
    arrAdd = nintCards(arrFoods).map((item, i) => {
      return (item = nintCards(arrFoods)[i] * macroIntCards()[i]);
    });
  
    return arrAdd.reduce((a, b) => a + b);
  };

  /* Results */

  function addProteins() {
    if (nintCards().length < 1) {
      return 0;
    } else {
      const arrAdd = [];

      for (let i = 0; i < nintCards().length; i++) {
        const add = arrFoods[i].prot * addOuputsFoods()[i];

        arrAdd.push(add);
      }

      return arrAdd.reduce((a, b) => a + b);
    }
  }

  function addLipids() {
    if (nintCards().length < 1) {
      return 0;
    } else {
      const arrAdd = [];

      for (let i = 0; i < nintCards().length; i++) {
        const add = arrFoods[i].lip * addOuputsFoods()[i];

        arrAdd.push(add);
      }

      return arrAdd.reduce((a, b) => a + b);
    }
  }

  function addHc() {
    if (nintCards().length < 1) {
      return 0;
    } else {
      const arrAdd = [];

      for (let i = 0; i < nintCards().length; i++) {
        const add = arrFoods[i].hc * addOuputsFoods()[i];

        arrAdd.push(add);
      }

      return arrAdd.reduce((a, b) => a + b);
    }
  }

  function addKcal() {
    return addProteins() * 4 + addLipids() * 9 + addHc() * 4;
  }

  const formatAddProteins = () => {
    return Math.round(addProteins());
  };
  const formatAddLipids = () => {
    return Math.round(addLipids());
  };
  const formatAddHc = () => {
    return Math.round(addHc());
  };

  const formatAddKcal = () => {
    return Math.round(addKcal());
  };

  return {
    addFoodWeight,
    nintCards,
    addOuputsFoods,
    addProteins,
    addLipids,
    addHc,
    formatAddProteins,
    formatAddLipids,
    formatAddHc,
    addKcal,
    formatAddKcal
  };
};

export default useDietLogic;
