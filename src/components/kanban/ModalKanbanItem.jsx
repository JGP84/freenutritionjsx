import React, { useContext, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { UserContext } from "../../UserContext";
import { changeName, changeN_int_card } from "../../functions/kanbanFunctions";
import useDietLogic from "../../hooks/useDietLogic";
import { Button, Modal } from "react-bootstrap";

const ModalKanbanItem = ({ item, column }) => {
  const { arrFoods, kanban, setKanban } = useContext(UserContext);
  const { addFoodWeight } = useDietLogic();
  const [name, setName] = useState(item.name);
  const [gramsInt_card, setGramsInt_card] = useState(item.foodWeight);

  /* const modal react bootstrap */
  const [show, setShow] = useState(false);

  const handleClose = () => {
    changeName(item.idUnique, kanban, arrFoods, setKanban, column.name, name);

    changeN_int_card(
      item.idUnique,
      column.name,
      arrFoods,
      addFoodWeight,
      kanban,
      setKanban,
      gramsInt_card
    );
    setShow(false);
  };

  const handleShow = () => setShow(true);
  /*  */

  return (
    <>
      <BsPencil type="button" variant="primary" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>

        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Food
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h5 className="d-flex justify-content-start text-dark">Name</h5>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <h5 className="d-flex justify-content-start mt-3 text-dark">
            Weight (g)
          </h5>
          <input
            type="number"
            className="form-control"
            value={gramsInt_card}
            onChange={(e) => setGramsInt_card(e.target.value)}
          ></input>
        </Modal.Body>

        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        
      </Modal>
    </>
  );
};

export default ModalKanbanItem;
