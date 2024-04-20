
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeaderAll from "../../components/HeaderAll";
const LayoutReservation = () => {

    return (
        <>

            <HeaderAll />

            <Header />

            <Outlet />

            <Footer />

        </>
    )

}

export default LayoutReservation;