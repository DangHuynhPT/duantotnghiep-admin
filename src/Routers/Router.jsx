import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "../Components/LayoutAdmin";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutAdmin />} />
    </Routes>
  );
};

export default Router;
