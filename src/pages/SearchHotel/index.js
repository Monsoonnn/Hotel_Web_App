
import HotelInfo from "../../components/HotelInfo";
import HotelRooms from "../../components/HotelRooms";


const SearchHotel = () => {
    return (
        <>
            <div className="booking" style={{
                margin: "0px 0px",
            }}>
                <div className="container">
                    <div className="row">
                       <HotelInfo/>
                       <HotelRooms/>
                       <HotelRooms/>
                    </div>

                </div>
            </div>
        </>
    )
};
export default SearchHotel;