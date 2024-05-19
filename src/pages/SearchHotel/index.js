
import HotelInfo from "../../components/HotelInfo";
import HotelRooms from "../../components/HotelRooms";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDomain } from "../../utils/domain";
import { get } from "../../utils/request";

const SearchHotel = () => {
    const navigate = useNavigate();
   
    const book = useSelector(state => state.bookingReducer);
    useEffect(() => {

        if(book.length === 0){
            navigate("/")
        }
    },[])
    
    return (
        <>
            <div className="booking" style={{
                margin: "0px 0px",
            }}>
                <div className="container">
                    <div className="row">
                       <HotelInfo/>
                       <HotelRooms/>
                    </div>

                </div>
            </div>
        </>
    )
};
export default SearchHotel;