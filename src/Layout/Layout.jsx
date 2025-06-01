 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import MapIcon from "../components/MapIcon";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />  
      <Footer />
      <MapIcon/>
    </>
  );
}
