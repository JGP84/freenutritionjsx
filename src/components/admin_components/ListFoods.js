import { useEffect, useState } from "react";

import EditFoodDatabase from "./EditFoodDatabase";

const ListFoods = () => {
  const [foods, setFoodDatabase] = useState([]);

  //delete todo function

  const deleteFood = async (id) => {
    try {
      const deleteFood = await fetch(`https://backend-freenutrition.herokuapp.com/${id}`, {
        method: "DELETE",
      });

      setFoodDatabase(foods.filter((food) => food.food_id !== id));

      console.log(deleteFood);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getFoods = async () => {
    try {
      const response = await fetch("https://backend-freenutrition.herokuapp.com/");
      const jsonData = await response.json();

      setFoodDatabase(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <>
      <table
      style={{ backgroundColor:  "white" }}
      className="table mt-5 text-center">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Weight_Int</th>
            <th scope="col">Prot</th>
            <th scope="col">Lip</th>
            <th scope="col">Hc</th>
            <th scope="col">N_int_card</th>
            <th scope="col">Img_link</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody>
          {foods.map((food) => (
            <tr key={food.food_id}>
              <td>{food.name}</td>
              <td>{food.type}</td>
              <td>{food.weight_int}</td>
              <td>{food.prot}</td>
              <td>{food.lip}</td>
              <td>{food.hc}</td>
              <td>{food.n_int_card}</td>
              <td>{food.img_link}</td>

              <td>
                <EditFoodDatabase food={food} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteFood(food.food_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListFoods;
