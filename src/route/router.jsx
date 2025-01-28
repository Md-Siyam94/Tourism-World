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
import AddStories from "../pages/Dashboard/Tourist/Add Stories/AddStories";
import JoinAsGuide from "../pages/Dashboard/Tourist/Join as Guide/JoinAsGuide";
import ManageStories from "../pages/Dashboard/Shared/ManageStories";
import Community from "../pages/Community/Community"
import ManageCandidates from "../pages/Dashboard/Admin/Manage Candidates/ManageCandidates";
import ManageUsers from "../pages/Dashboard/Admin/Manage users/ManageUsers";
import AddPackage from "../pages/Dashboard/Admin/Add package/AddPackage";
import AdminProfile from "../pages/Dashboard/Admin/Admin profile/AdminProfile";
import MyAssignedTours from "../pages/Dashboard/Shared/MyAssignedTours";
import EditStoryDetails from "../pages/Dashboard/Shared/EditStoryDetails";
import MyBookings from "../pages/Dashboard/Tourist/My bookings/MyBookings";
import Payment from "../pages/Dashboard/Tourist/Payment/Payment";
import Error from "../pages/Error/Error";
import Profile from "../components/Profile";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      // TODO: enable error component
      // errorElement: <Error></Error>,
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
            element: <AllTrips></AllTrips>   
        },
        {
            path: "/package-details/:id",
            element: <PackageDetails></PackageDetails>,
            loader: ({params})=> fetch(`${import.meta.env.VITE_baseApi}/packages/${params.id}`)     
        },
        {
          path: "/guideProfile/:id",
          element :<Profile></Profile>,
          loader: ({params})=> fetch(`${import.meta.env.VITE_baseApi}/users-by-id/${params.id}`)
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
      // errorElement: <Error></Error>,
      children: [
        // admin routes
        {
          path: "/dashboard",
          element: <PrivetRoute><AdminProfile></AdminProfile></PrivetRoute>
        },
        {
          path: "/dashboard/add-package",
          element: <AddPackage></AddPackage>
        },
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
          path: "/dashboard/my-assigned-tours",
          
          element: <PrivetRoute><MyAssignedTours></MyAssignedTours></PrivetRoute>
        },
        // {
        //   path: "/dashboard/guide-profile",
        //   element: <GuideProfile></GuideProfile>
        // },

        // tourist and guide

        {
          path: "/dashboard/edit-story/:id",
          element: <PrivetRoute><EditStoryDetails></EditStoryDetails></PrivetRoute>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_baseApi}/stories/${params.id}`)
        },
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
          path: "/dashboard/payment/:id",
          element: <Payment></Payment>,
          
        },

        // {
        //   path: "/dashboard/tourist-profile",
        //   element: <PrivetRoute><TouristProfile></TouristProfile></PrivetRoute>
        // },
        {
          path: "/dashboard/my-bookings",
          element: <PrivetRoute><MyBookings></MyBookings></PrivetRoute>
        },
        
       
        {
          path: "/dashboard/join-tour-guide",
          element: <PrivetRoute><JoinAsGuide></JoinAsGuide></PrivetRoute>
        }
      ]
    }
  ]);



  export default router;