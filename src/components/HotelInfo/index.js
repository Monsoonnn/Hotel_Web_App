import { useEffect, useState } from "react";
import { BsDashLg } from "react-icons/bs";
import { useSelector } from "react-redux";
import { get } from "../../utils/request";

const HotelInfo = () => {
    const book = useSelector(state => state.bookingReducer);
    const [hotel, setHotel] = useState();

    useEffect(() => {
        const fetchAPI = async () =>{
            if(book.length !== 0) {
                const result = await get("/hotels/"+book.hotel);
                setHotel(result.data.hotel)
            }
        }
        fetchAPI()
    },[])

//    console.log(hotel)

    return (
        <>
            {hotel && (
                <div className="hotelInfo col-sm-12">
                <div className="hotelName" style={{
                    fontSize: "32px",
                    fontWeight: "500",
                    marginTop: "100px"
                }}>
                    {hotel.name}
                </div>
                <div className="hotelDesc" style={{
                    display: "flex",
                    margin: "20px 0px",
                }}>
                    <div className="hotelStar" style={{
                        paddingRight: "20px",
                    }}>
                        {hotel.starLevel} sao
                    </div>
                    <BsDashLg style={{
                        marginTop: "5px",
                        transform: "rotate(90deg)",
                    }} />
                    <div className="hotelAddress" style={{
                        paddingRight: "20px",
                    }}>
                        {hotel.address}
                    </div>
                    <BsDashLg style={{
                        marginTop: "5px",
                        transform: "rotate(90deg)",
                    }} />
                    <div className="hotelDesc">
                        {hotel.description}
                    </div>
                </div>
            </div>
            )}
        </>
    )
}

export default HotelInfo;