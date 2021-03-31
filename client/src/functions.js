import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import uuid from "react-uuid";

/* const { arrFoods, setArrFoods, foodNew, setFoodNew, columns, setColumns, inputProt, setInputProt, inputLip, setInputLip, inputCarb, setInputCarb} = useContext( UserContext ); */

function addFoodWeight(arrFoods) {
  //cambia el valor de la propiedad foodWeight

  for (let i = 0; i < nintCards().length; i++) {
    arrFoods[i].foodWeight = Math.round(
      arrFoods[i].weight_int * addOuputsFoods()[i]
    );
  }

  return;
}

function nintCards(arrFoods) {
  const nintCards = [];

  if (arrFoods) {
    if (arrFoods.length < 1) {
      return [];
    } else {
      for (let i = 0; i < arrFoods.length; i++) {
        let x = arrFoods[i].n_int_card;

        nintCards.push(x);
      }

      return nintCards;
    }
  }
  return [];
}

function addOuputsFoods() {
  //insertamos los intercambios de starchyFoods
  const arrOuputsFoods = JSON.parse(JSON.stringify(nintCards()));

  for (let i = 0; i < nintCards().length; i++) {
    arrOuputsFoods[starchyFoodsIndex()[i]] =
      n_int_starchyFoods() / starchyFoodsIndex().length;
  }

  //insertamos los intercambios de proteinFoods
  for (let i = 0; i < nintCards().length; i++) {
    arrOuputsFoods[proteinFoodIndex()[i]] =
      nintProtein() / proteinFoodIndex().length;
  }
  //insertamos los intercambios de lipidos
  for (let i = 0; i < nintCards().length; i++) {
    arrOuputsFoods[lipidsIndex()[i]] = nintLipids() / lipidsIndex().length;
  }

  return arrOuputsFoods;
}

function starchyFoodsIndex(arrFoods) {
  const indices1 = [];

  const element = "starchyFoods";

  let idx = arrFoods.map((e) => e.type).indexOf(element);
  while (idx !== -1) {
    indices1.push(idx);

    idx = arrFoods.map((e) => e.type).indexOf(element, idx + 1);
  }

  return indices1;
}

function n_int_starchyFoods(inputCarb) {
  return (inputCarb - totalHc()) / 15.2;
}

function totalHc() {
  const arrAdd = [];

  let x = 0;
  if (nintCards().length < 1) {
    x = 1;
  } else {
    x = nintCards().length;
  }

  for (let i = 0; i < x; i++) {
    const add = nintCards()[i] * gHcIntCards()[i];
    arrAdd.push(add);
  }

  return arrAdd.reduce((a, b) => a + b);
}

function proteinFoodIndex(arrFoods) {
  const indices2 = [];

  const element2 = "proteinFoods";

  let idx2 = arrFoods.map((e) => e.type).indexOf(element2);
  while (idx2 !== -1) {
    indices2.push(idx2);

    idx2 = arrFoods.map((e) => e.type).indexOf(element2, idx2 + 1);
  }

  return indices2;
}

function lipidsIndex(arrFoods) {
  const indices3 = [];

  const element3 = "fats";

  let idx3 = arrFoods.map((e) => e.type).indexOf(element3);
  while (idx3 !== -1) {
    indices3.push(idx3);

    idx3 = arrFoods.map((e) => e.type).indexOf(element3, idx3 + 1);
  }

  return indices3;
}

function totalProtein(arrFoods) {
  const arrAdd = [];

  const nintCards1 = JSON.parse(JSON.stringify(nintCards()));

  const indices = [];

  const element = "starchyFoods";

  let idx = arrFoods.map((e) => e.type).indexOf(element);
  while (idx !== -1) {
    indices.push(idx);

    idx = arrFoods.map((e) => e.type).indexOf(element, idx + 1);
  }

  for (let i = 0; i < indices.length; i++) {
    nintCards1[indices[i]] = n_int_starchyFoods() / indices.length;
  }

  let x = 0;
  if (nintCards().length < 1) {
    x = 1;
  } else {
    x = nintCards().length;
  }

  for (let i = 0; i < x; i++) {
    const add = nintCards1[i] * gProtIntCards()[i];
    arrAdd.push(add);
  }

  return arrAdd.reduce((a, b) => a + b);
}

function totalLipids(arrFoods) {
  const arrAdd = [];

  const nintCards2 = JSON.parse(JSON.stringify(nintCards()));

  const indices = [];

  const element = "starchyFoods";

  let idx = arrFoods.map((e) => e.type).indexOf(element);
  while (idx !== -1) {
    indices.push(idx);

    idx = arrFoods.map((e) => e.type).indexOf(element, idx + 1);
  }

  for (let i = 0; i < indices.length; i++) {
    nintCards2[indices[i]] = n_int_starchyFoods() / indices.length;
  }
  //calculo lo mismo para los indices proteinas
  const indices1 = [];

  const element1 = "proteinFoods";

  let idx1 = arrFoods.map((e) => e.type).indexOf(element1);
  while (idx1 !== -1) {
    indices1.push(idx1);

    idx1 = arrFoods.map((e) => e.type).indexOf(element1, idx1 + 1);
  }

  for (let i = 0; i < indices.length; i++) {
    nintCards2[indices1[i]] = nintProtein() / indices1.length;
  }

  let x = 0;
  if (nintCards().length < 1) {
    x = 1;
  } else {
    x = nintCards().length;
  }

  for (let i = 0; i < x; i++) {
    const add = nintCards2[i] * gLipIntCards()[i];
    arrAdd.push(add);
  }

  return arrAdd.reduce((a, b) => a + b);
}

function nintProtein(inputProt) {
  return (inputProt - totalProtein()) / 7.2;
}

function nintLipids(inputLip) {
  return (inputLip - totalLipids()) / 5;
}

function gProtIntCards(arrFoods) {
  const gProtIntCards = [];

  if (arrFoods.length < 1) {
    return [];
  } else {
    for (let i = 0; i < arrFoods.length; i++) {
      let x = arrFoods[i].prot;

      gProtIntCards.push(x);
    }

    return gProtIntCards;
  }
}

function gLipIntCards(arrFoods) {
  const gLipIntCards = [];

  if (arrFoods.length < 1) {
    return [];
  } else {
    for (let i = 0; i < arrFoods.length; i++) {
      let x = arrFoods[i].lip;

      gLipIntCards.push(x);
    }

    return gLipIntCards;
  }
}

function gHcIntCards(arrFoods) {
  const gHcIntCards = [];

  if (arrFoods.length < 1) {
    return [];
  } else {
    for (let i = 0; i < arrFoods.length; i++) {
      let x = arrFoods[i].hc;

      gHcIntCards.push(x);
    }

    return gHcIntCards;
  }
}

function addProteins(arrFoods) {
  if (nintCards()) {
    if (nintCards().length < 1) {
      return 0;
    } else {
      const arrAdd = [];

      for (let i = 0; i < nintCards().length; i++) {
        const add = arrFoods[i].prot * addOuputsFoods()[i];

        arrAdd.push(add);
      }

      return Math.round(arrAdd.reduce((a, b) => a + b));
    }
  }
  return 0;
}

function addLipids(arrFoods) {
  if (nintCards()) {
    if (nintCards().length < 1) {
      return 0;
    } else {
      const arrAdd = [];

      for (let i = 0; i < nintCards().length; i++) {
        const add = arrFoods[i].lip * addOuputsFoods()[i];

        arrAdd.push(add);
      }

      return Math.round(arrAdd.reduce((a, b) => a + b));
    }
  }
  return 0;
}

function addHc(arrFoods) {
  if (nintCards()) {
    if (nintCards().length < 1) {
      return 0;
    } else {
      const arrAdd = [];

      for (let i = 0; i < nintCards().length; i++) {
        const add = arrFoods[i].hc * addOuputsFoods()[i];

        arrAdd.push(add);
      }

      return Math.round(arrAdd.reduce((a, b) => a + b));
    }
  }
  return 0;
}

function addKcal() {
  return addProteins() * 4 + addLipids() * 9 + addHc() * 4;
}

export {
  addFoodWeight,
  nintCards,
  addOuputsFoods,
  starchyFoodsIndex,
  n_int_starchyFoods,
  totalHc,
  proteinFoodIndex,
  lipidsIndex,
  totalProtein,
  totalLipids,
  nintProtein,
  nintLipids,
  addProteins,
  addLipids,
  addHc,
  addKcal,
  gProtIntCards,
  gLipIntCards,
  gHcIntCards,
};
