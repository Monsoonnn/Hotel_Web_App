import { BsDashLg } from "react-icons/bs";
import Packages from "./Packages";
const Room = (props) => {

    const {room} = props;

    return (
        <>
            <div className="ListRoom__Room">
                    <div className="RoomImg col-xxl-4">
                        <img src="https://www.lottehotel.com/content/dam/lotte-hotel/lotte/saigon/accommodation/standard/deluxe-city-view/4252-01-2000-acc-LTHO.jpg.thumb.480.480.jpg"></img>
                    </div>
                    <div className="RoomInfo col-xxl-8">
                        <div className="RoomName" style={{
                            fontSize: "30px",
                            fontWeight: "700px"
                        }}>
                            {room}
                        </div>
                        <div className="RoomDesc" style={{
                            display: "flex",
                        }}>
                            <BsDashLg style={{
                                marginTop: "5px",
                                transform: "rotate(90deg)",
                            }} />
                            <div className="RoomView" style={{
                                paddingRight: "20px",
                            }}>
                                Hướng nhìn: City
                            </div>
                            <BsDashLg style={{
                                marginTop: "5px",
                                transform: "rotate(90deg)",
                            }} />
                            <div className="RoomSize" style={{
                                paddingRight: "20px",
                            }}>
                                Kích thước: 37 ㎡
                            </div>
                        </div>
                        <div className="RoomBeed" style={{
                            paddingRight: "20px",
                        }}>
                            Loại giường: Một giường đôi
                        </div>
                    </div>
                    <Packages room={room} packageID={123} packageName={"FLASH SALES - STUNNING HOLIDAY"}/>
                    <Packages room={room} packageID={324} packageName={"FLASH SALES - STUNNING HOLIDAY"}/>
                
            </div>


        </>
    )
}

export default Room;