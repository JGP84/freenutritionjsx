import { useState } from "react";

//edit name function
const EditFoodDatabase = ({ food }) => {
  const [name, setName] = useState(food.name);
  const [type, setType] = useState(food.type);
  const [weight_int, setweight_int] = useState(food.weight_int);
  const [prot, setProt] = useState(food.prot);
  const [lip, setLip] = useState(food.lip);
  const [hc, setHc] = useState(food.hc);
  const [n_int_card, setN_int_card] = useState(food.n_int_card);
  const [img_link, setImg_link] = useState(food.img_link);

  //proxy

  const updateFood = async (e) => {
    e.preventDefault();
    try {
      const body = {
        name,
        type,
        weight_int,
        prot,
        lip,
        hc,
        n_int_card,
        img_link,
      };
      await fetch(`/admin/${food.food_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/admin";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${food.food_id}`}
      >
        Edit
      </button>

      <div
        className="modal fade"
        id={`id${food.food_id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-header ">
              <h4 className="modal-title text-dark" id={`id${food.food_id}`}>
                Edit food
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={(e) => updateFood(e)}
              ></button>
            </div>
            <div className="modal-body">
              <h5 className="d-flex justify-content-start text-dark">Name</h5>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <h5 className="d-flex justify-content-start mt-3 text-dark">Type</h5>
              <input
                type="text"
                className="form-control"
                value={type}
                onChange={(e) => setType(e.target.value)}
              ></input>
              <h5 className="d-flex justify-content-start mt-3 text-dark">weight_int</h5>
              <input
                type="number"
                className="form-control"
                value={weight_int}
                onChange={(e) => setweight_int(e.target.value)}
              ></input>
              <h5 className="d-flex justify-content-start mt-3 text-dark">Prot</h5>
              <input
                type="number"
                className="form-control"
                value={prot}
                onChange={(e) => setProt(e.target.value)}
              ></input>
              <h5 className="d-flex justify-content-start mt-3 text-dark">Lip</h5>
              <input
                type="number"
                className="form-control"
                value={lip}
                onChange={(e) => setLip(e.target.value)}
              ></input>
              <h5 className="d-flex justify-content-start mt-3 text-dark">Hc</h5>
              <input
                type="number"
                className="form-control"
                value={hc}
                onChange={(e) => setHc(e.target.value)}
              ></input>
              <h5 className="d-flex justify-content-start mt-3 text-dark">N_int_card</h5>
              <input
                type="number"
                className="form-control"
                value={n_int_card}
                onChange={(e) => setN_int_card(e.target.value)}
              ></input>
              <h5 className="d-flex justify-content-start mt-3 text-dark">Img_link</h5>
              <input
                type="text"
                className="form-control"
                value={img_link}
                onChange={(e) => setImg_link(e.target.value)}
              ></input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={(e) => updateFood(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={(e) => updateFood(e)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditFoodDatabase;
