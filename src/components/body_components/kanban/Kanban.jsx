// @flow
import { UserContext } from "./../../../UserContext";
import uuid from "react-uuid";
import React, { useLayoutEffect, useRef, useContext, useState } from "react";

import { FixedSizeList, areEqual } from "react-window";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./kanban.css";

import { reorderList } from "./reorder";

import useDietLogic from "./../../../hooks/useDietLogic";
import { addColumn, addRecipe } from "./../../../functions/bodyFunctions";

import { BsTrash, BsFiles, BsPencil } from "react-icons/bs";

import { deleteItem, duplicateItem } from "./../../../functions/bodyFunctions";
import ModalBody from "./../ModalBody";

function Kanban() {
  const {
    foodDatabase,
    setArrFoods,
    arrFoods,
    kanban,
    setKanban,
    setShowSnack,
  } = useContext(UserContext);

  const { addFoodWeight } = useDietLogic();

  let index = 0;

  /*  */

  function getStyle({ draggableStyle, virtualStyle, isDragging }) {
    // If you don't want any spacing between your items
    // then you could just return this.
    // I do a little bit of magic to have some nice visual space
    // between the row items
    const combined = {
      ...virtualStyle,
      ...draggableStyle,
    };

    // Being lazy: this is defined in our css file
    const grid = 8;

    // when dragging we want to use the draggable style for placement, otherwise use the virtual style
    const result = {
      ...combined,
      height: isDragging ? combined.height : combined.height - grid,
      left: isDragging ? combined.left : combined.left + grid,
      width: isDragging
        ? draggableStyle.width
        : `calc(${combined.width} - ${grid * 2}px)`,
      marginBottom: grid,
    };

    return result;
  }

  function Item({ provided, item, style, isDragging, column, index }) {
    return (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        style={getStyle({
          draggableStyle: provided.draggableProps.style,
          virtualStyle: style,
          isDragging,
        })}
        className={`item ${
          isDragging
            ? "is-dragging"
            : item.type === "starchyFoods"
            ? "is-starchyFoods"
            : item.type === "fats"
            ? "is-fats"
            : item.type === "proteinFoods"
            ? "is-proteinFoods"
            : item.type === "fruits"
            ? "is-fruits"
            : item.type === "veggies"
            ? "is-veggies"
            : ""
        }`}
      >
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
              kanban,
              column.name,
              arrFoods,
              setArrFoods,
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
          <ModalBody /* itemIdUnique={item.idUnique} columnName={column.name} */
          />
        )}
      </div>
    );
  }

  // Recommended react-window performance optimisation: memoize the row render function
  // Things are still pretty fast without this, but I am a sucker for making things faster
  const Row = React.memo(function Row(props) {
    const { data: column, index, style } = props
    const { items } = column
    const item = items[index]

    // We are rendering an extra item for the placeholder
    if (!item) {
      return null;
    }

    return (
      <Draggable draggableId={item.idUnique} index={index} key={item.idUnique}>
        {(provided) => <Item provided={provided} item={item} column={column} style={style} />}
      </Draggable>
    );
  }, areEqual);

  const ItemList = React.memo(function ItemList({ column, index }) {
    // There is an issue I have noticed with react-window that when reordered
    // react-window sets the scroll back to 0 but does not update the UI
    // I should raise an issue for this.
    // As a work around I am resetting the scroll to 0
    // on any list that changes it's index
    const listRef = useRef();
    useLayoutEffect(() => {
      const list = listRef.current;
      if (list) {
        list.scrollTo(0);
      }
    }, [index]);

    return (
      <Droppable
        droppableId={column.name}
        mode="virtual"
        renderClone={(provided, snapshot, rubric) => (
          <Item
            provided={provided}
            isDragging={snapshot.isDragging}
            item={column.items[rubric.source.index]}
          />
        )}
      >
        {(provided, snapshot) => {
          // Add an extra item to our list to make space for a dragging item
          // Usually the DroppableProvided.placeholder does this, but that won't
          // work in a virtual list
          const itemCount = snapshot.isUsingPlaceholder
            ? column.items.length + 1
            : column.items.length;

          return (
            <FixedSizeList
              height={500}
              itemCount={itemCount}
              itemSize={80}
              width={340}
              outerRef={provided.innerRef}
              itemData={column.items}
              className="task-list"
              ref={listRef}
              itemData={column}
            >
              {Row}
            </FixedSizeList>
          );
        }}
      </Droppable>
    );
  });

  const Column = React.memo(function Column({ column, index }) {
    return (
      <Draggable draggableId={column.name} index={index}>
        {(provided) => (
          <div
            className="column"
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <h3 className="column-title" {...provided.dragHandleProps}>
              {column.name}
              <BsTrash
                type="button"
                size="24px"
                style={{ fontSize: 25 }}
                onClick={() => deleteItem()}
              />
              <BsFiles
                type="button"
                size="24px"
                style={{ fontSize: 25 }}
                onClick={() => duplicateItem()}
              />
              <BsPencil type="button" size="24px">
                edit
              </BsPencil>
            </h3>

            <ItemList column={column} index={index} />
          </div>
        )}
      </Draggable>
    );
  });

  /*  */

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.type === "column") {
      // if the list is scrolled it looks like there is some strangeness going on
      // with react-window. It looks to be scrolling back to scroll: 0
      // I should log an issue with the project
      const columnOrder = reorderList(
        kanban.columnOrder,
        result.source.index,
        result.destination.index
      );
      setKanban({
        ...kanban,
        columnOrder,
      });
      return;
    }

    // reordering in same list
    if (result.source.droppableId === result.destination.droppableId) {
      const column = kanban.columns[result.source.droppableId];
      const items = reorderList(
        column.items,
        result.source.index,
        result.destination.index
      );

      // updating column entry
      const newState = {
        ...kanban,
        columns: {
          ...kanban.columns,
          [column.name]: {
            ...column,
            items,
          },
        },
      };
      setKanban(newState);
      return;
    }

    // moving between lists
    const sourceColumn = kanban.columns[result.source.droppableId];
    const destinationColumn = kanban.columns[result.destination.droppableId];
    const item = sourceColumn.items[result.source.index];

    // 1. remove item from source column
    const newSourceColumn = {
      ...sourceColumn,
      items: [...sourceColumn.items],
    };
    newSourceColumn.items.splice(result.source.index, 1);

    // 2. insert into destination column
    const newDestinationColumn = {
      ...destinationColumn,
      items: [...destinationColumn.items],
    };
    // in line modification of items
    newDestinationColumn.items.splice(result.destination.index, 0, item);

    const newState = {
      ...kanban,
      columns: {
        ...kanban.columns,
        [newSourceColumn.name]: newSourceColumn,
        [newDestinationColumn.name]: newDestinationColumn,
      },
    };

    setKanban(newState);
  }

  //////

  const handleAddColumn = () => {
    addColumn(setKanban, kanban, uuid, setShowSnack);
  };

  const handleAddRecipe = () => {
    addRecipe(foodDatabase, arrFoods, uuid, addFoodWeight, kanban, setKanban);
  };

  ///////

  return (
    <>
      <button className="btn btn-outline-success m-3" onClick={handleAddColumn}>
        add Snack
      </button>

      <button className="btn btn-outline-success m-3" onClick={handleAddRecipe}>
        add example
      </button>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="app">
          <Droppable
            droppableId="all-droppables"
            direction="horizontal"
            type="column"
          >
            {(provided) => (
              <div
                className="columns"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {kanban.columnOrder.map((columnId, index) => (
                  <Column
                    key={columnId}
                    column={kanban.columns[columnId]}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </>
  );
}

export default Kanban;