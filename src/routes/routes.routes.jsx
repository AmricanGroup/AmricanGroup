import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
 
 
import Cities from "../pages/Cities";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Packages from "../pages/Packages";
import BlogCmopnent from "../components/BlogCmopnent";
import TouristLandmark from "../pages/TouristLandmark";
 

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
        {index:true ,element:<Home/>},
      {path:"home",element:<Home/>},
      {path:"cities",element:<Cities/>},
      {path:"blog",element:<Blog/>},
      {path:"contactUs",element:<ContactUs/>},
      {path:"aboutUs",element:<AboutUs/>},
      {path:"package",element:<Packages/>},
      {path:"blogContent",element:<BlogCmopnent/>},
      {path:"TouristLandmark",element:<TouristLandmark/>},


    ]
     
  },
]);


export default router