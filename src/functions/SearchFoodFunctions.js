function addFood(
  foodDatabase,
  foodNew,
  arrFoods,
  uuid,
  addFoodWeight,
  columns,
  setColumns,
  setFoodNew
) {
  let index = foodDatabase.findIndex((item) => item.name === foodNew);

  if (index !== -1) {
    arrFoods.unshift({
      food_id: foodDatabase[index].food_id,
      name: foodNew,
      type: foodDatabase[index].type,
      weight_int: foodDatabase[index].weight_int,
      prot: foodDatabase[index].prot,
      lip: foodDatabase[index].lip,
      hc: foodDatabase[index].hc,
      img_link: foodDatabase[index].img_link,
      n_int_card: foodDatabase[index].n_int_card,
      foodWeight: 0,
      idUnique: uuid(),
    });

    addFoodWeight();

    /////
    const itemAdd = {
      idUnique: arrFoods[0].idUnique,
      name: arrFoods[0].name,
      foodWeight: arrFoods[0].foodWeight,
      type: arrFoods[0].type,
      img_link: arrFoods[0].img_link,
    };

    const requestColumnId = Object.entries(columns).find(
      (i) => i[1].name === "Breakfast"
    )[0];

    const column = columns[requestColumnId];

    setColumns({
      ...columns,
      [requestColumnId]: {
        ...column,
        items: [...column.items, itemAdd],
      },
    });

    setFoodNew("");
  } else {
  }
}

function allDelete(setArrFoods, setColumns, uuid) {
  setArrFoods([]);

  setColumns({
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
}

//JSPDF functions
const getArrBreakfast = (columns, arrFoods) => {
  let arrBreakfast = [];

  const requestColumnId = Object.entries(columns).find(
    (i) => i[1].name === "Breakfast"
  )[0];

  const column = columns[requestColumnId];

  arrBreakfast = [...column.items];

  arrBreakfast.map(function updateFoodweight(element) {
    const index = arrFoods.findIndex(
      (ingredient) => ingredient.idUnique === element.idUnique
    );

    element.foodWeight = Math.round(arrFoods[index].foodWeight / 5) * 5 + "g";
  });

  return arrBreakfast;
};
const getArrLunch = (columns, arrFoods) => {
  let arrLunch = [];

  const requestColumnId = Object.entries(columns).find(
    (i) => i[1].name === "Lunch"
  )[0];

  const column = columns[requestColumnId];
  arrLunch = [...column.items];

  /* return column.items; */
  arrLunch.map(function updateFoodweight(element) {
    const index = arrFoods.findIndex(
      (ingredient) => ingredient.idUnique === element.idUnique
    );

    element.foodWeight = Math.round(arrFoods[index].foodWeight / 5) * 5 + "g";
  });

  return arrLunch;
};

const getArrDinner = (columns, arrFoods) => {
  let arrDinner = [];

  const requestColumnId = Object.entries(columns).find(
    (i) => i[1].name === "Dinner"
  )[0];

  const column = columns[requestColumnId];
  arrDinner = [...column.items];

  /* return column.items; */
  arrDinner.map(function updateFoodweight(element) {
    const index = arrFoods.findIndex(
      (ingredient) => ingredient.idUnique === element.idUnique
    );

    element.foodWeight = Math.round(arrFoods[index].foodWeight / 5) * 5 + "g";
  });

  return arrDinner;
};

const getArrSnack = (columns, arrFoods, showSnack) => {
  let arrSnack = [];

  if (showSnack) {
    const requestColumnId = Object.entries(columns).find(
      (i) => i[1].name === "Snack"
    )[0];

    if (requestColumnId !== undefined) {
      const column = columns[requestColumnId];

      /* return column.items; */
      arrSnack = [...column.items];
      arrSnack.map(function updateFoodweight(element) {
        const index = arrFoods.findIndex(
          (ingredient) => ingredient.idUnique === element.idUnique
        );

        element.foodWeight =
          Math.round(arrFoods[index].foodWeight / 5) * 5 + "g";
      });

      return arrSnack;
    }
  }
};
const getArrInformation = (
  percenProt,
  addProteins,
  percenLip,
  addLipids,
  percenCarb,
  addHc,
  addKcal,
  date,
  nintCards,
  arrFoods,
  addOuputsFoods
) => {
  let arrInformation = [
    {
      proteins:
        Math.round(percenProt(addProteins, addKcal)) +
        "%" +
        " / " +
        Math.round(addProteins(nintCards, arrFoods, addOuputsFoods)) +
        "g",
      fats:
        Math.round(percenLip(addLipids, addKcal)) +
        "%" +
        " / " +
        Math.round(addLipids()) +
        "g",
      carbohydrates:
        Math.round(percenCarb(addHc, addKcal)) +
        "%" +
        " / " +
        Math.round(addHc(nintCards, arrFoods, addOuputsFoods)) +
        "g",
      calories: Math.round(addKcal(addProteins, addLipids, addHc)) + " kcal",
      date: date,
    },
  ];

  return arrInformation;
};

function exportPDF(
  columns,
  arrFoods,
  showSnack,
  percenProt,
  addProteins,
  percenLip,
  addLipids,
  percenCarb,
  addHc,
  addKcal,
  date,
  jsPDF,
  nintCards,
  addOuputsFoods
) {
  const arrBreakfast = getArrBreakfast(columns, arrFoods);
  const arrLunch = getArrLunch(columns, arrFoods);
  const arrDinner = getArrDinner(columns, arrFoods);
  const arrSnack = getArrSnack(columns, arrFoods, showSnack);
  const arrInformation = getArrInformation(
    percenProt,
    addProteins,
    percenLip,
    addLipids,
    percenCarb,
    addHc,
    addKcal,
    date,
    nintCards,
    arrFoods,
    addOuputsFoods
  );

  let vm = this;
  let columnsBreakfast = [
    { title: "BREAKFAST" },
    { title: "Foods", dataKey: "name" },
    { title: "Grams", dataKey: "foodWeight" },
  ];
  let columnsLunch = [
    { title: "LUNCH         " },
    { title: "Foods", dataKey: "name" },
    { title: "Grams", dataKey: "foodWeight" },
  ];
  let columnsDinner = [
    { title: "DINNER        " },
    { title: "Foods", dataKey: "name" },
    { title: "Grams", dataKey: "foodWeight" },
  ];
  let columnsSnack = [
    { title: "SNACK         " },
    { title: "Foods", dataKey: "name" },
    { title: "Grams", dataKey: "foodWeight" },
  ];
  let columnsInformation = [
    { title: "RESULTS        " },
    { title: "Proteins", dataKey: "proteins" },
    { title: "Fats", dataKey: "fats" },
    { title: "Carbohydrates", dataKey: "carbohydrates" },
    { title: "Calories", dataKey: "calories" },
    { title: "Date", dataKey: "date" },
  ];

  const doc = new jsPDF("p", "pt");

  doc.text("F r e e   N u t r i t i o n   P l a n n e r  .  O R G", 40, 40);
  doc.autoTable(
    columnsBreakfast,
    arrBreakfast,

    {
      margin: { top: 60 },
    }
  );
  doc.autoTable(
    columnsLunch,
    arrLunch,

    {
      margin: { top: 120 },
    }
  );
  doc.autoTable(
    columnsDinner,
    arrDinner,

    {
      margin: { top: 120 },
    }
  );

  if (showSnack) {
    doc.autoTable(
      columnsSnack,
      arrSnack,

      {
        margin: { top: 120 },
      }
    );
  }

  doc.autoTable(
    columnsInformation,
    arrInformation,

    {
      margin: { top: 120 },
    }
  );

  doc.output("dataurlnewwindow");

  //add image in base64 https://parall.ax/products/jspdf
  /* let imgData = 

      doc.addImage(imgData, 'JPEG', 15, 40, 180, 160)

    doc.save("arrAlimentos.pdf"); */
}

export {
  addFood,
  allDelete,
  getArrBreakfast,
  getArrLunch,
  getArrDinner,
  getArrSnack,
  getArrInformation,
  exportPDF,
};
