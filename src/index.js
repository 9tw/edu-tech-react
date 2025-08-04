/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import UserLayout from "layouts/User.js";
import AuthLayout from "layouts/Auth.js";
import HomeLayout from "layouts/Home.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return token && role == 0 ? children : <Navigate to="/home" replace />;
};

const UserRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return token && role == 1 ? children : <Navigate to="/home" replace />;
};

root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/admin/*"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      />
      <Route
        path="/user/*"
        element={
          <UserRoute>
            <UserLayout />
          </UserRoute>
        }
      />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="/home/*" element={<HomeLayout />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  </BrowserRouter>
);
