import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import StartLearning from './Components/StartLearning';
import Tutorials1 from './Components/Tutorials1';
import AboutUs from './Components/About Us/AboutUs';
import Root from './Components/Root';
import AuthProvider from './Components/Provider/authProvider';
import MyProfile from './Components/MyProfile';
// import LetsLearn from './Components/LearningAll/Lessons';
import Lessons from './Components/LearningAll/Lessons';
import PrivateRoute from './Components/PrivateRoute';
import UpdateProfile from './Components/UpdateProfile';
import ForgotPassword from './Components/Login/ForgotPassword';
import ErrorPage from './Components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "start_learning",
        element: <StartLearning />,
      },
      {
        path: "tutorials",
        element: <Tutorials1 />,
      },
      // {
      //   path: "lessons",
      //   element: <Lessons></Lessons>,
      // },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: '/myprofile',
        element: <PrivateRoute><MyProfile /></PrivateRoute>,
      },
      {
        path: "forgot-password", // Add ForgotPassword route here
        element: <ForgotPassword />,
      },
      {
        path: '/update-profile',
        element: <PrivateRoute><UpdateProfile /></PrivateRoute>,
      },
      {
        path: "lessons",
        element: <PrivateRoute><Lessons /></PrivateRoute>,
        loader: async () => {
          const response = await fetch("/Language.json");
          if (!response.ok) {
            throw new Error("Failed to load lessons data");
          }
          return response.json(); // Pass data to the component
        }
      }

    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>

    </AuthProvider>
  </StrictMode>,
)


