
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import Booking from "../Booking";
const Header = () => {
    const [booking, setBooking] = useState(false);

    const handeOnclick = () => {
        setBooking(!booking)
    }

    return (
        <>
            <header className="header" style={{
                marginTop: "40px"
            }}>
                {/* <h1 className="header__logo">
          <Link to="/">Logo</Link>
        </h1> */}
                <div className="container">
                    <ul className="header__menu">
                        <li className="header__booking">
                            <FaMagnifyingGlass />
                            <NavLink
                                style={() => {
                                    return {
                                        paddingLeft: 10,
                                        fontWeight: 800,
                                        color: "#998465",
                                    };
                                }}
                                onClick={handeOnclick}
                            >ĐẶT PHÒNG</NavLink>
                        </li>
                        <li>
                            <Link to="/news">TIN TỨC</Link>
                        </li>
                        <li>
                            <Link to="/hotel-offers">ƯU ĐÃI</Link>
                        </li>
                        <li>
                            <Link to="/wedding-conference">LỄ CƯỚI & HỘI NGHỊ</Link>
                        </li>
                    </ul>
                </div>
                {booking && (
                    <>
                    <div className="bookingBorder">
                        <Booking style={
                            {
                                backgroundColor: "#A99983",
                            }
                        } 
                        />
                    </div>
                    </>
                )

                }
            </header>
            
        </>
    )
}

export default Header;