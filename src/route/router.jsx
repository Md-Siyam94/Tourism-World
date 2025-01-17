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
import TouristProfile from "../pages/Dashboard/Tourist/Manage Profile/TouristProfile"
import AddStories from "../pages/Dashboard/Tourist/Add Stories/AddStories";
import JoinAsGuide from "../pages/Dashboard/Tourist/Join as Guide/JoinAsGuide";




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
       
      ]
    },
    {
      path:"/dashboard",
      element: <PrivetRoute> <Dashboard></Dashboard></PrivetRoute>,
      // TODO: SHOW ERROR
      // errorElement: <div></div>,
      children: [
        // tourist routes
        {
          path: "/dashboard",
          element: <TouristProfile></TouristProfile>
        },
        {
          path: "/dashboard/add-stories",
          element: <AddStories></AddStories>
        },
        {
          path: "/dashboard/join-tour-guide",
          element: <JoinAsGuide></JoinAsGuide>
        }
      ]
    }
  ]);



  export default router;