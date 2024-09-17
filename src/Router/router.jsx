import {
     createBrowserRouter,
     RouterProvider,
   } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Main/Home";
 export  const router = createBrowserRouter([
     {
       path: "/",
       element: <Main></Main>,
       children:[
          {
               path:'/',
               element: <Home></Home>
          }
       ]

     },
   ]);