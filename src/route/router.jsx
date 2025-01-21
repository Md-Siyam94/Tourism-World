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
import GuideProfile from "../pages/Dashboard/Guide/Guide Profile/GuideProfile";
import ManageStories from "../pages/Dashboard/Shared/ManageStories";
import Community from "../pages/Community/Community"
import ManageCandidates from "../pages/Dashboard/Admin/Manage Candidates/ManageCandidates";
import ManageUsers from "../pages/Dashboard/Admin/Manage users/ManageUsers";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    
    //   errorElement: <div></div>
      children: [
        {
            path: "/",
            element: <Home></Home>     
        },
        {
          path: "/community",
          element: <Community></Community>
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
      
      // errorElement: <div></div>,
      children: [
        // admin routes
        {
          path: "/dashboard/all-users",
          element: <ManageUsers></ManageUsers>
        },
        {
          path: "/dashboard/manage-candidates",
          element: <ManageCandidates></ManageCandidates>
        },
        // guide routes

        {
          path: "/dashboard/guide-profile",
          element: <GuideProfile></GuideProfile>
        },
        // tourist and guide
        {
          path: "/dashboard/add-stories",
          element: <PrivetRoute><AddStories></AddStories></PrivetRoute>
        },
        {
          path: "/dashboard/manage-stories",
          element: <PrivetRoute><ManageStories></ManageStories></PrivetRoute>
        },
        // tourist routes
        {
          path: "/dashboard/tourist-profile",
          element: <PrivetRoute><TouristProfile></TouristProfile></PrivetRoute>
        },
        
       
        {
          path: "/dashboard/join-tour-guide",
          element: <PrivetRoute><JoinAsGuide></JoinAsGuide></PrivetRoute>
        }
      ]
    }
  ]);



  export default router;