
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeaderAll from "../../components/HeaderAll";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const LayoutBooking = () => {
    

    return (
        <>

            <HeaderAll />

            <Outlet />

            <Footer />

        </>
    )

}

export default LayoutBooking;