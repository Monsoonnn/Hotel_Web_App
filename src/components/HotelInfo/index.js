import { BsDashLg } from "react-icons/bs";

const HotelInfo = () => {
    return (
        <>
            <div className="hotelInfo col-sm-12">
                <div className="hotelName" style={{
                    fontSize: "32px",
                    fontWeight: "500",
                }}>
                    Khách sạn LOTTE Sài Gòn
                </div>
                <div className="hotelDesc" style={{
                    display: "flex",
                    margin: "20px 0px",
                }}>
                    <div className="hotelStar" style={{
                        paddingRight: "20px",
                    }}>
                        5 sao
                    </div>
                    <BsDashLg style={{
                        marginTop: "5px",
                        transform: "rotate(90deg)",
                    }} />
                    <div className="hotelAddress" style={{
                        paddingRight: "20px",
                    }}>
                        4A Đ. Tôn Đức Thắng, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam
                    </div>
                    <BsDashLg style={{
                        marginTop: "5px",
                        transform: "rotate(90deg)",
                    }} />
                    <div className="hotelPhone">
                        +84-28-3823-3333
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelInfo;