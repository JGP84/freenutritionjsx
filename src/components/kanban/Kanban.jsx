// @flow
import { UserContext } from "./../../UserContext";
import uuid from "react-uuid";
import React, { useLayoutEffect, useRef, useContext } from "react";

import { FixedSizeList, areEqual } from "react-window";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./kanban.css";

import { reorderList } from "./reorder";

import useDietLogic from "./../../hooks/useDietLogic";
import {
  addColumn,
  deleteColumn,
  duplicateColumn,
  editColumn,
  addRecipe,
  deleteItem,
  duplicateItem,
} from "../../functions/kanbanFunctions";

import { BsTrash, BsFiles, BsPencil } from "react-icons/bs";

import ModalBody from "./../kanban/ModalBody";

function Kanban() {
  const {
    foodDatabase,
    setArrFoods,
    arrFoods,
    intake,
    setIntake,
    kanban,
    setKanban,
    setShowSnack,
  } = useContext(UserContext);

  const { addFoodWeight } = useDietLogic();

  /* let index = 0; */

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
    const { data: column, index, style } = props;
    const { items } = column;
    const item = items[index];

    // We are rendering an extra item for the placeholder
    if (!item) {
      return null;
    }

    return (
      <Draggable draggableId={item.idUnique} index={index} key={item.idUnique}>
        {(provided) => (
          <Item provided={provided} item={item} column={column} style={style} />
        )}
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

  const Column = React.memo(function Column({ item, column, index }) {
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
                onClick={() =>
                  deleteColumn(
                    arrFoods,
                    kanban,
                    setKanban,
                    column.name,
                    addFoodWeight
                  )
                }
              />
              <BsFiles
                type="button"
                size="24px"
                style={{ fontSize: 25 }}
                onClick={() =>
                  duplicateColumn(
                    kanban,
                    setKanban,
                    column.name,
                    foodDatabase,
                    arrFoods,
                    uuid,
                    addFoodWeight,
                    intake
                  )
                }
              />
              <BsPencil type="button" size="24px"
              onClick={() =>
                editColumn(column.name, intake, kanban, setKanban)
              }>
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
    addColumn(setKanban, kanban, setShowSnack);
  };

  const handleAddRecipe = () => {
    addRecipe(
      foodDatabase,
      arrFoods,
      uuid,
      addFoodWeight,
      kanban,
      setKanban,
      intake
    );
  };

  ///////

  return (
    <>
      <button className="btn btn-outline-success m-3" onClick={handleAddColumn}>
        add Snack
      </button>

      {/* dropdown bootstrap */}
      {/*  <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={(e) => setIntake(e.target.value)}
        >
          Choose Intake
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {Object.entries(kanban)[1][1].map((item) => (
            <li>
              <a class="dropdown-item" href="#" key={uuid()}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div> */}
      {/* end dropdown bootstrap */}

      <button className="btn btn-outline-success m-3" onClick={handleAddRecipe}>
        add example
      </button>

      {/* carousel bootstrap */}

     {/*  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}


      {/* end carousel bootstrap */}

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
