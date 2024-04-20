import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./LayoutHome.css"


import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeaderAll from "../../components/HeaderAll";


const LayoutDefault = () => {
  return (
    <>

      <HeaderAll/>
      
      <Header />

      <Outlet />

      <Footer />
      
    </>
  )
}

export default LayoutDefault;