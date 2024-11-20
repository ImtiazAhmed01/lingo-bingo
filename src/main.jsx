// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'



// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import Login from './Components/Login/Login';
// import Register from './Components/Register/Register';
// import StartLearning from './Components/StartLearning';
// import Tutorials1 from './Components/Tutorials1';
// import AboutUs from './Components/About Us/AboutUs';
// import Root from './Components/Root';
// import AuthProvider from './Components/Provider/authProvider';
// import Home1 from './Components/Home/Home1';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "/",
//         element: <Home1></Home1>
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "register",
//         element: <Register />,
//       },
//       {
//         path: "start_learning",
//         element: <StartLearning />,
//       },
//       {
//         path: "tutorials",
//         element: <Tutorials1 />,
//       },
//       {
//         path: "aboutus",
//         element: <AboutUs />,
//       },
//     ],
//   },
// ]);


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router}></RouterProvider>
//     </AuthProvider>
//   </StrictMode>,
// )


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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Ensure Root is used as a React element
    children: [
      {
        path: "/",
        element: <Home />, // Use JSX for child elements
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
        path: "start_learning", // Fixed typo in the path
        element: <StartLearning />,
      },
      {
        path: "tutorials",
        element: <Tutorials1 />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: '/myprofile',
        element: <MyProfile></MyProfile>
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


