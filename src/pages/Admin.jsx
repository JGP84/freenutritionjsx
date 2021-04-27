import React from "react";
import Navbar from "../components/header_components/Navbar";
import InputFood from "../components/admin_components/InputFood";
import ListFoods from "../components/admin_components/ListFoods";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <InputFood />
      <ListFoods />
    </div>
  );
};

export default Admin;
