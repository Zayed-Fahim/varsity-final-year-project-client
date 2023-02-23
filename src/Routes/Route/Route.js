import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Front from "../../Layout/Front/Front";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import AuthorizedLogin from "../../Pages/Login/AuthorizedLogin/AuthorizedLogin";
import StudentLogin from "../../Pages/Login/StudentLogin/StudentLogin";
import TeacherLogin from "../../Pages/Login/TeacherLogin/TeacherLogin";

const Route = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Front />,
    },
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
    {
      path: "/student-login",
      element: <StudentLogin />,
    },
    {
      path: "/teacher-login",
      element: <TeacherLogin />,
    },
    {
      path: "/authorized-login",
      element: <AuthorizedLogin />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Route;
