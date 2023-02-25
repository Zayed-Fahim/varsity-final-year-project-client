import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Front from "../../Layout/Front/Front";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import AuthorizedLogin from "../../Pages/Login/AuthorizedLogin/AuthorizedLogin";
import StudentLogin from "../../Pages/Login/StudentLogin/StudentLogin";
import TeacherLogin from "../../Pages/Login/TeacherLogin/TeacherLogin";
import StudentSignup from "../../Pages/Signup/StudentSignup/StudentSignup";
import TeacherSignup from "../../Pages/Signup/TeacherSignup/TeacherSignup";

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
      path: "/student-signup",
      element: <StudentSignup />,
    },
    {
      path: "/teacher-signup",
      element: <TeacherSignup />,
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
