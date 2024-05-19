
import "./Rooms.css"
import Room from "./Rooms";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { get } from "../../utils/request";
const HotelRooms = () => {

    const [rooms, setRooms] = useState([])
    const book = useSelector(state => state.bookingReducer);

    useEffect(() => {
        const fetchAPI =  async () => {
            const result = await get("/rooms");
            const getRoom = result.data.rooms.filter((item) => {
                return item.hotel === book.hotel
            } )
            setRooms(getRoom);
            // console.log(result)
        }
            fetchAPI();
    },[])
    // console.log(rooms.name)
    return (
        <>
             {rooms.length > 0 && (
                <div className="ListRoom col-sm-12">
                    {rooms.map((item) => 
                    <Room key={item._id} id={item._id} room={item.name} desc={item.description} image={item.imageCover}
                    />)}
                </div>
             )}
            
        </>
    )
};
export default HotelRooms;