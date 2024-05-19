import { BsDashLg } from "react-icons/bs";
import Packages from "./Packages";
import { useEffect, useState } from "react";
import { get } from "../../utils/request";
const Room = (props) => {

    const {id, room, desc, image} = props;
    const [packages, setPackages] = useState([])

    useEffect(() => {
        const fetchAPI =  async () => {
            const result = await get("/packages");
            setPackages(result.data.packages);
            
        }
            fetchAPI();
            // console.log(packages)
    },[])



    return (
        <>
            <div className="ListRoom__Room">
                    <div className="RoomImg col-xxl-4" style={{
                        // overflow: "hidden"
                    }}>
                        <img src={image}></img>
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
                            <div className="RoomSize" style={{
                                paddingRight: "20px",
                            }}>
                                Kích thước: 37 ㎡
                            </div>
                        </div>
                        <div className="RoomBeed" style={{
                            paddingRight: "20px",
                        }}>
                            {desc}
                        </div>
                    </div>
                   {packages.length > 0 && (
                        <div className="packagesList" style={{
                            display: 'flex',
                            flexWrap: "wrap"
                        }}>
                            {packages.map((item) => 
                            <Packages room={id} 
                            key={item.id } packageID={item._id} packageName={item.name}
                            packagePrice = {item.price.toString()}
                            desc={item.description}
                            />)}
                        </div>
                   )}
                
            </div>


        </>
    )
}

export default Room;