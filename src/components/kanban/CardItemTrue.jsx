import React from 'react'

const CardItemTrue = ({index,arrFoods,item, BsTrash,deleteItem,kanban,column,addFoodWeight,setKanban, BsFiles, duplicateItem, uuid, ModalBody}) => {
    return (
        <>
             {
          ((index = arrFoods.findIndex(
            (ingredient) => ingredient.idUnique === item.idUnique
          )),
          Math.round(arrFoods[index].foodWeight / 5) * 5)
        }
        {"g"} {item.name}
        <img src={item.img_link} alt="foodImg" width="50px" />
        <BsTrash
          type="button"
          size="24px"
          style={{ fontSize: 25 }}
          onClick={() =>
            deleteItem(
              item.idUnique,
              kanban,/*  */
              column.name,
              arrFoods,
              addFoodWeight,
              setKanban
            )
          }
        />
        <BsFiles
          type="button"
          size="24px"
          style={{ fontSize: 25 }}
          onClick={() =>
            duplicateItem(
              index,
              column.name,
              arrFoods,
              uuid,
              addFoodWeight,
              kanban,
              setKanban
            )
          }
        />
        {item.type === "starchyFoods" ? (
          ""
        ) : item.type === "fats" ? (
          ""
        ) : item.type === "proteinFoods" ? (
          ""
        ) : (
          <ModalBody itemIdUnique={item.idUnique} columnName={column.name} />
        )}
        </>
    )
}

export default CardItemTrue
