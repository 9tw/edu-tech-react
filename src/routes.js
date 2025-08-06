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

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/user",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/user",
  },
  {
    path: "/course",
    name: "Course",
    icon: "ni ni-ruler-pencil text-orange",
    component: <Course />,
    layout: "/user",
  },
  {
    path: "/course-detail",
    name: "Course Detail",
    icon: "ni ni-ruler-pencil text-orange",
    component: <CourseDetail />,
    layout: "/user",
  },
  {
    path: "/user-profile",
    name: "Admin Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/user",
  },
  {
    path: "/category-management",
    name: "Category",
    icon: "ni ni-bullet-list-67 text-red",
    component: <CategoryManagement />,
    layout: "/admin",
  },
  {
    path: "/program-management",
    name: "Program",
    icon: "ni ni-bullet-list-67 text-red",
    component: <ProgramManagement />,
    layout: "/admin",
  },
  {
    path: "/material-management",
    name: "Material",
    icon: "ni ni-bullet-list-67 text-red",
    component: <MaterialManagement />,
    layout: "/admin",
  },
  {
    path: "/materials",
    name: "Materials",
    icon: "ni ni-books text-blue",
    component: <MaterialAdd />,
    layout: "/admin",
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
