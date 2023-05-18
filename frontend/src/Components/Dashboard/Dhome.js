import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Aside from "./Aside";
import Dfooter from "./Dfooter";
import Dnavbar from "./Dnavbar";

const AddWork = React.lazy(() => import("./AddWork"));
const ViewWorks = React.lazy(() => import("./ViewWorks"));
const AddAdmin = React.lazy(() => import("./AddAdmin"));
const ViewAdmins = React.lazy(() => import("./ViewAdmins"));
const ViewContacts = React.lazy(() => import("./ViewContacts"));
export default function Dhome() {
  return (
    <>
      <Dnavbar></Dnavbar>
      <Aside />
      <div className="content-wrapper">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/addwork" element={<AddWork></AddWork>} />
            <Route path="/viewworks" element={<ViewWorks></ViewWorks>} />
            <Route path="/addadmin" element={<AddAdmin></AddAdmin>} />
            <Route path="/viewadmins" element={<ViewAdmins></ViewAdmins>} />
            <Route
              path="/viewcontacts"
              element={<ViewContacts></ViewContacts>}
            />
          </Routes>
        </Suspense>
      </div>
      <Dfooter></Dfooter>
    </>
  );
}
