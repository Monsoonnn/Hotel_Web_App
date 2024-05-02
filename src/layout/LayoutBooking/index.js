
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeaderAll from "../../components/HeaderAll";
import BookingSearch from "../../components/BookingSearch";
const LayoutBooking = () => {

    return (
        <>

            <HeaderAll />

            <BookingSearch/>

            <Outlet />

            <Footer />

        </>
    )

}

export default LayoutBooking;