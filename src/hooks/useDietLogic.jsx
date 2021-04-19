import { useContext } from "react";
import { UserContext } from "./../UserContext";

const useDietLogic = () => {
  const { inputProt, inputLip, inputCarb, arrFoods } = useContext(UserContext);

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

    getArrOuputsFoods(arrOuputsFoods, starchyFoodsIndex, nintStarchyFoods);

    //insert the exchanges of proteinFoods

    getArrOuputsFoods(arrOuputsFoods, proteinFoodIndex, nintProtein);

    //insert the exchanges of fats

    getArrOuputsFoods(arrOuputsFoods, lipidsIndex, nintLipids);

    return arrOuputsFoods;
  }

  function starchyFoodsIndex() {
    return macrosIndex("starchyFoods", arrFoods);
  }

  function nintStarchyFoods() {
    return (inputCarb - totalHc()) / 14;
  }

  function totalHc() {
    const nintCards0 = nintCards();

    return addMacros(nintCards0, gHcIntCards);
  }

  function proteinFoodIndex() {
    return macrosIndex("proteinFoods", arrFoods);
  }

  function lipidsIndex() {
    return macrosIndex("fats", arrFoods);
  }

  function totalProtein() {
    const nintCards0 = nintCards();

    const indices = macrosIndex("starchyFoods", arrFoods);

    getNintFoodType(nintStarchyFoods, indices, nintCards0);

    /////

    return addMacros(nintCards0, gProtIntCards);
  }

  function totalLipids() {
    const nintCards0 = nintCards();

    const indices = macrosIndex("starchyFoods", arrFoods);

    getNintFoodType(nintStarchyFoods, indices, nintCards0);
    //////

    const indices2 = macrosIndex("proteinFoods", arrFoods);

    getNintFoodType(nintProtein, indices2, nintCards0);

    //////

    return addMacros(nintCards0, gLipIntCards);
  }

  function nintProtein() {
    return (inputProt - totalProtein()) / 7;
  }

  function nintLipids() {
    return (inputLip - totalLipids()) / 5;
  }

  function gProtIntCards() {
    return gMacrosIntCards("prot");
  }

  function gLipIntCards() {
    return gMacrosIntCards("lip");
  }

  function gHcIntCards() {
    return gMacrosIntCards("hc");
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

  const gMacrosIntCards = (macro) => {
    return arrFoods.map((item, i) => {
      return (item = arrFoods[i][macro]);
    });
  };

  const addMacros = (nintCards0, macroIntCards) => {
    let arrAdd = [];

    arrAdd = nintCards0.map((item, i) => {
      return (item = nintCards0[i] * macroIntCards()[i]);
    });

    return arrAdd.reduce((a, b) => a + b);
  };

  const getNintFoodType = (NintFoodType, indices, nintCards0) => {
    for (let i = 0; i < indices.length; i++) {
      nintCards0[indices[i]] = NintFoodType() / indices.length;
    }
  };

  const getArrOuputsFoods = (arr, foodIndex, nintFood) => {
    for (let i = 0; i < nintCards().length; i++) {
      arr[foodIndex()[i]] = nintFood() / foodIndex().length;
    }
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
    formatAddKcal,
  };
};

export default useDietLogic;
