
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
const LayoutReservation = () =>{

    return(
        <>

            Phía trên này là header cho đặt phòng

            <Outlet/>

            <Footer />
            
        </>
    )

}

export default LayoutReservation;