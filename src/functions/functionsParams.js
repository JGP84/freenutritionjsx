function addProteins(
  nintCards,
  arrFoods,
  addOuputsFoods,
  inputCarb,
  inputProt,
  inputLip
) {
  if (nintCards(arrFoods).length < 1) {
    return 0;
  } else {
    const arrAdd = [];

    for (let i = 0; i < nintCards(arrFoods).length; i++) {
      const add =
        arrFoods[i].prot *
        addOuputsFoods(arrFoods, inputCarb, inputProt, inputLip)[i];

      arrAdd.push(add);
    }

    return arrAdd.reduce((a, b) => a + b);
  }
}

function addLipids(
  nintCards,
  arrFoods,
  addOuputsFoods,
  inputCarb,
  inputProt,
  inputLip
) {
  if (nintCards(arrFoods).length < 1) {
    return 0;
  } else {
    const arrAdd = [];

    for (let i = 0; i < nintCards(arrFoods).length; i++) {
      const add =
        arrFoods[i].lip *
        addOuputsFoods(arrFoods, inputCarb, inputProt, inputLip)[i];

      arrAdd.push(add);
    }

    return arrAdd.reduce((a, b) => a + b);
  }
}

function addHc(
  nintCards,
  arrFoods,
  addOuputsFoods,
  inputCarb,
  inputProt,
  inputLip
) {
  if (nintCards(arrFoods).length < 1) {
    return 0;
  } else {
    const arrAdd = [];

    for (let i = 0; i < nintCards(arrFoods).length; i++) {
      const add =
        arrFoods[i].hc *
        addOuputsFoods(arrFoods, inputCarb, inputProt, inputLip)[i];

      arrAdd.push(add);
    }

    return arrAdd.reduce((a, b) => a + b);
  }
}

function addKcal(
  addProteins,
  addLipids,
  addHc,
  nintCards,
  arrFoods,
  addOuputsFoods,
  inputCarb,
  inputProt,
  inputLip
) {
  return (
    addProteins(
      nintCards,
      arrFoods,
      addOuputsFoods,
      inputCarb,
      inputProt,
      inputLip
    ) *
      4 +
    addLipids(
      nintCards,
      arrFoods,
      addOuputsFoods,
      inputCarb,
      inputProt,
      inputLip
    ) *
      9 +
    addHc(nintCards, arrFoods, addOuputsFoods, inputCarb, inputProt, inputLip) *
      4
  );
}

const percenProt = (addProteins, addKcal, addLipids, addHc, arrFoods, nintCards, addOuputsFoods) => {
  if (addProteins(nintCards, arrFoods, addOuputsFoods) == 0) {
    return 0;
  } else {
    return (
      (100 * addProteins(nintCards, arrFoods, addOuputsFoods) * 4) /
      addKcal(addProteins, addLipids, addHc)
    );
  }
};
const percenLip = (addLipids, addKcal, addHc, addProteins) => {
  if (addLipids() == 0) {
    return 0;
  } else {
    return (100 * addLipids() * 9) / addKcal(addProteins, addLipids, addHc);
  }
};
const percenCarb = (addHc, addKcal, addLipids, addProteins) => {
  if (addHc() == 0) {
    return 0;
  } else {
    return (100 * addHc() * 4) / addKcal(addProteins, addLipids, addHc);
  }
};



export {
  addKcal,
  percenProt,
  percenLip,
  percenCarb,
  addProteins,
  addLipids,
  addHc,
};
