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
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Course from "views/examples/Course.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import CategoryManagement from "views/examples/CategoryManagement.js";
import ProgramManagement from "views/examples/ProgramManagement.js";
import MaterialManagement from "views/examples/MaterialManagement.js";
import MaterialAdd from "views/examples/MaterialAdd.js";
import Icons from "views/examples/Icons.js";
import Home from "views/examples/Home.js";
import About from "views/examples/About.js";
import Program from "views/examples/Program.js";
import CourseDetail from "views/examples/CourseDetail.js";
import MaterialDetail from "views/examples/MaterialDetail";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-orange",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-orange",
    component: <Index />,
    layout: "/user",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-info",
    component: <Icons />,
    layout: "/home",
  },
  {
    path: "/course",
    name: "Course",
    icon: "ni ni-ruler-pencil text-primary",
    component: <Course />,
    layout: "/user",
  },
  {
    path: "/course-detail",
    name: "Course Detail",
    icon: "ni ni-ruler-pencil text-orange",
    component: <CourseDetail />,
    layout: "/user",
    sub: true,
  },
  {
    path: "/material-detail",
    name: "Material Detail",
    icon: "ni ni-ruler-pencil text-orange",
    component: <MaterialDetail />,
    layout: "/user",
    sub: true,
  },
  {
    path: "/category-management",
    name: "Category",
    icon: "ni ni-bullet-list-67 text-default",
    component: <CategoryManagement />,
    layout: "/admin",
  },
  {
    path: "/program-management",
    name: "Program",
    icon: "ni ni-collection text-primary",
    component: <ProgramManagement />,
    layout: "/admin",
  },
  {
    path: "/material-management",
    name: "Material",
    icon: "ni ni-single-copy-04 text-info",
    component: <MaterialManagement />,
    layout: "/admin",
  },
  {
    path: "/materials",
    name: "Materials",
    icon: "ni ni-books text-info",
    component: <MaterialAdd />,
    layout: "/admin",
    sub: true,
  },
  {
    path: "/admin-profile",
    name: "Profile",
    icon: "ni ni-single-02 text-green",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Profile",
    icon: "ni ni-single-02 text-green",
    component: <Profile />,
    layout: "/user",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-shop text-info",
    component: <Home />,
    layout: "/home",
  },
  {
    path: "/program",
    name: "program",
    icon: "ni ni-books text-info",
    component: <Program />,
    layout: "/home",
  },
  {
    path: "/about",
    name: "About",
    icon: "ni ni-istanbul text-info",
    component: <About />,
    layout: "/home",
  },
];
export default routes;
