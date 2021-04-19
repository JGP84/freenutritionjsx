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