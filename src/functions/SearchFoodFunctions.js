function addFood(
  foodDatabase,
  foodNew,
  arrFoods,
  uuid,
  addFoodWeight,
  kanban,
  setKanban,
  setFoodNew,intake
) {
  let index = foodDatabase.findIndex((item) => item.name === foodNew);

  if (index !== -1 && intake !== undefined) {
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

    const columnTitle = intake;

    const columnsState = Object.entries(kanban)[0][1];

    const arrItems = columnsState[columnTitle].items;
    const columnOrderState = Object.entries(kanban)[1][1];

    const newStateColumns = {
      columns: {
        ...columnsState,
        [columnTitle]: {
          name: columnTitle,
          items: [...arrItems, itemAdd],
        },
      },
      columnOrder: [...columnOrderState],
    };

    setKanban(newStateColumns);

    setFoodNew("");
  } else {
  }
  return;
}

function allDelete(setArrFoods, setKanban) {

  const initial = {
    columns: {
      Breakfast: {
        name: "Breakfast",
        items: [],
      },
      Lunch: {
        name: "Lunch",
        items:[],
      },
      Dinner: {
        name: "Dinner",
        items:[],
      },
    },
    columnOrder: ["Breakfast", "Lunch", "Dinner"],
  };

  setKanban(initial); 

  setArrFoods([])

}

//JSPDF functions
const getArrBreakfast = (columns, arrFoods) => {
  let arrBreakfast = [];


  arrBreakfast = Object.entries(columns)[0][1].Breakfast.items;

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

  
  arrLunch = Object.entries(columns)[0][1].Lunch.items;
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

  
  arrDinner = Object.entries(columns)[0][1].Dinner.items;

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

  if (showSnack === true) {
    const requestColumnId = Object.entries(columns)[0].find(
      (column) => column.name === "Snack"
    );

    arrSnack = Object.entries(columns)[0][1].Snack.items;
    arrSnack.map(function updateFoodweight(element) {
      const index = arrFoods.findIndex(
        (ingredient) => ingredient.idUnique === element.idUnique
      );

      element.foodWeight = Math.round(arrFoods[index].foodWeight / 5) * 5 + "g";
    });

    return arrSnack;
    /*  } */
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
      /* theme: 'plain' */
    }
  );
  doc.autoTable(
    columnsLunch,
    arrLunch,

    {
      margin: { top: 120 },
      /* theme: 'plain' */
    }
  );
  doc.autoTable(
    columnsDinner,
    arrDinner,

    {
      margin: { top: 120 },
      /* theme: 'plain' */
    }
  );

  if (showSnack) {
    doc.autoTable(
      columnsSnack,
      arrSnack,

      {
        margin: { top: 120 },
        /* theme: 'plain' */
      }
    );
  }

  doc.autoTable(
    columnsInformation,
    arrInformation,

    {
      margin: { top: 120 },
      /* theme: 'plain' */
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
