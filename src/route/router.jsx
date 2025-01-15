import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    //   TODO: make customise error 
    //   errorElement: <div></div>
      children: [
        {
            path: "/",
            element: <Home></Home>     
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/sign-up",
            element: <SignUp></SignUp>
        },
      ]
    },
  ]);



  export default router;