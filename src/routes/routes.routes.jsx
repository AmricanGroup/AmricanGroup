import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Archaeologicalplaces from "../pages/Archaeologicalplaces";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
        {index:true ,element:<Home/>},
        {path:"Archaeologicalplaces",element:<Archaeologicalplaces/>}


    ]
     
  },
]);


export default router