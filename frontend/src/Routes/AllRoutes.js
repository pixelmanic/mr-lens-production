import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../Components/Dashboard/Auth";
import Dhome from "../Components/Dashboard/Dhome";
import Login from "../Components/Dashboard/Login";
import Home from "../Components/Web/Home"


export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route element={<Auth></Auth>}>
          <Route path='/dashboard/*' element={<Dhome></Dhome>} />
        </Route>
      </Routes>
    </div>
  );
}
