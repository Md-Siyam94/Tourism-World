import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AboutUs from "../pages/About us/AboutUs";
import PackageDetails from "../pages/Package details/PackageDetails";
import AllTrips from "../pages/All Trips/AllTrips";
import PrivetRoute from "../provider/PrivetRoute";
import Dashboard from "../layout/Dashboard";
import TouristProfile from "../pages/Dashboard/Tourist/Manage Profile/TouristProfile";



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
            path: "/about-us",
            element: <AboutUs></AboutUs>     
        },
        {
            path: "/trips",
            element: <PrivetRoute><AllTrips></AllTrips></PrivetRoute>     
        },
        {
            path: "/package-details/:id",
            element: <PackageDetails></PackageDetails>,
            loader: ({params})=> fetch(`${import.meta.env.VITE_baseApi}/packages/${params.id}`)     
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/sign-up",
            element: <SignUp></SignUp>
        },
        {
          path:"/dashboard",
          element: <Dashboard></Dashboard>,
          // TODO: SHOW ERROR
          // errorElement: <div></div>,
          children: [
            {
              path: "/dashboard/tourist-profile",
              element: <TouristProfile></TouristProfile>
            }
          ]
        }
      ]
    },
  ]);



  export default router;