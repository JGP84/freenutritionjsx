import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import uuid from "react-uuid";

/* const { arrFoods, setArrFoods, foodNew, setFoodNew, columns, setColumns, inputProt, setInputProt, inputLip, setInputLip, inputCarb, setInputCarb} = useContext( UserContext ); */

function addFoodWeight() {
  for (let i = 0; i < nintCards().length; i++) {
    arrFoods[i].foodWeight = arrFoods[i].weight_int * addOuputsFoods()[i];
  }

  return;
}

function nintCards() {
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

function addOuputsFoods() {
  //insertamos los intercambios de starchyFoods
  const arrOuputsFoods = JSON.parse(JSON.stringify(nintCards()));

  for (let i = 0; i < nintCards().length; i++) {
    arrOuputsFoods[starchyFoodsIndex()[i]] =
      nintStarchyFoods() / starchyFoodsIndex().length;
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

function starchyFoodsIndex() {
  const indices1 = [];

  const element = "starchyFoods";

  let idx = arrFoods.map((e) => e.type).indexOf(element);
  while (idx !== -1) {
    indices1.push(idx);

    idx = arrFoods.map((e) => e.type).indexOf(element, idx + 1);
  }

  return indices1;
}

function nintStarchyFoods() {
  return (inputCarb - totalHc()) / 14;
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

function proteinFoodIndex() {
  const indices2 = [];

  const element2 = "proteinFoods";

  let idx2 = arrFoods.map((e) => e.type).indexOf(element2);
  while (idx2 !== -1) {
    indices2.push(idx2);

    idx2 = arrFoods.map((e) => e.type).indexOf(element2, idx2 + 1);
  }

  return indices2;
}

function lipidsIndex() {
  const indices3 = [];

  const element3 = "fats";

  let idx3 = arrFoods.map((e) => e.type).indexOf(element3);
  while (idx3 !== -1) {
    indices3.push(idx3);

    idx3 = arrFoods.map((e) => e.type).indexOf(element3, idx3 + 1);
  }

  return indices3;
}

function totalProtein() {
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
    nintCards1[indices[i]] = nintStarchyFoods() / indices.length;
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

function totalLipids() {
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

function nintProtein() {
  return (inputProt - totalProtein()) / 7;
}

function nintLipids() {
  return (inputLip - totalLipids()) / 5;
}

function gProtIntCards() {
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

function gLipIntCards() {
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

function gHcIntCards() {
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
};
