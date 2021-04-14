import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import uuid from "react-uuid";

/* const { arrFoods, setArrFoods, foodNew, setFoodNew, columns, setColumns, inputProt, setInputProt, inputLip, setInputLip, inputCarb, setInputCarb} = useContext( UserContext ); */

function addFoodWeight(arrFoods) {
  for (let i = 0; i < nintCards(arrFoods).length; i++) {
    arrFoods[i].foodWeight =
      arrFoods[i].weight_int * addOuputsFoods(arrFoods)[i];
  }

  return;
}

function nintCards(arrFoods) {
  const nintCards = [];

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

function addOuputsFoods(arrFoods) {
  //insertamos los intercambios de starchyFoods
  const arrOuputsFoods = JSON.parse(JSON.stringify(nintCards(arrFoods)));
  /* const arrOuputsFoods = []; */

  for (let i = 0; i < nintCards(arrFoods).length; i++) {
    arrOuputsFoods[starchyFoodsIndex(arrFoods)[i]] =
      nintStarchyFoods() / starchyFoodsIndex(arrFoods).length;
  }

  //insertamos los intercambios de proteinFoods
  for (let i = 0; i < nintCards().length; i++) {
    arrOuputsFoods[proteinFoodIndex()[i]] =
      nintProtein() / proteinFoodIndex().length;
  }
  //insertamos los intercambios de fats
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

function nintStarchyFoods(inputCarb, arrFoods) {
  return (inputCarb - totalHc(arrFoods)) / 14;
}

function totalHc(arrFoods) {
  const arrAdd = [];

  let x = 0;
  if (nintCards(arrFoods).length < 1) {
    x = 1;
  } else {
    x = nintCards(arrFoods).length;
  }

  for (let i = 0; i < x; i++) {
    const add = nintCards(arrFoods)[i] * gHcIntCards()[i];
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

  const nintCards1 = JSON.parse(JSON.stringify(nintCards(arrFoods)));

  const indices = [];

  const element = "starchyFoods";

  let idx = arrFoods.map((e) => e.type).indexOf(element);
  while (idx !== -1) {
    indices.push(idx);

    idx = arrFoods.map((e) => e.type).indexOf(element, idx + 1);
  }

  for (let i = 0; i < indices.length; i++) {
    nintCards1[indices[i]] = nintStarchyFoods() / indices.length;
  }

  let x = 0;
  if (nintCards(arrFoods).length < 1) {
    x = 1;
  } else {
    x = nintCards(arrFoods).length;
  }

  for (let i = 0; i < x; i++) {
    const add = nintCards1[i] * gProtIntCards()[i];
    arrAdd.push(add);
  }

  return arrAdd.reduce((a, b) => a + b);
}

function totalLipids(arrFoods) {
  const arrAdd = [];

  const nintCards2 = JSON.parse(JSON.stringify(nintCards(arrFoods)));

  const indices = [];

  const element = "starchyFoods";

  let idx = arrFoods.map((e) => e.type).indexOf(element);
  while (idx !== -1) {
    indices.push(idx);

    idx = arrFoods.map((e) => e.type).indexOf(element, idx + 1);
  }

  for (let i = 0; i < indices.length; i++) {
    nintCards2[indices[i]] = nintStarchyFoods() / indices.length;
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
  if (nintCards(arrFoods).length < 1) {
    x = 1;
  } else {
    x = nintCards(arrFoods).length;
  }

  for (let i = 0; i < x; i++) {
    const add = nintCards2[i] * gLipIntCards()[i];
    arrAdd.push(add);
  }

  return arrAdd.reduce((a, b) => a + b);
}

function nintProtein(inputProt, arrFoods) {
  return (inputProt - totalProtein(arrFoods)) / 7;
}

function nintLipids(inputLip, arrFoods) {
  return (inputLip - totalLipids(arrFoods)) / 5;
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
  let gProtIntCards = [];

  return (gProtIntCards = arrFoods.map((item, i) => {
    return (item = arrFoods[i][macro]);
  }));
};
const addMacros = (nintCards, macroIntCards) => {
  let arrAdd = [];

  arrAdd = nintCards().map((item, i) => {
    return (item = nintCards()[i] * macroIntCards()[i]);
  });

  return arrAdd.reduce((a, b) => a + b);
};

export {
  addFoodWeight,
  nintCards,
  addOuputsFoods,
  starchyFoodsIndex,
  nintStarchyFoods,
  totalHc,
  proteinFoodIndex,
  lipidsIndex,
  totalProtein,
  totalLipids,
  nintProtein,
  nintLipids,
  gProtIntCards,
  gLipIntCards,
  gHcIntCards,
  macrosIndex,
  gMacrosIntCards,
  addMacros,
};
