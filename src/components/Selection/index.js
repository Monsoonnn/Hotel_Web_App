
import "./selection.css"
import { Link, NavLink, Outlet } from "react-router-dom";
import Hanoi from "../../assets/images/hanoi.jpg";
import Saigon from "../../assets/images/saigon.jpg";
import Nhatrang from "../../assets/images/nhatrang.jpg";

const Selection = () => {
    return (
        <>  
            <div className="select">
                <div className="container">
                    <div className="row">
                        <div className="select__title col-xxl-12">
                        Chọn thương hiệu/khách sạn
                        </div>
                        <div className="packages__item col-xxl-4 col-xl-4 col-lg-6 col-md-12">
                        <Link to="/Spring">
                            <div className="item__img">
                                <img src={Hanoi} />
                            </div>
                            <div className="item__title">
                            Xách vali lên và đi
                            </div>
                            <div className="item__desc">
                            2 Người lớn | Phòng Deluxe hoặc Phòng Club Junior Suite | Ăn sáng | Đưa đón sân bay
                            </div>
                                </Link>
                        </div>
                        <div className="packages__item col-xxl-4 col-xl-4 col-lg-6 col-md-12">
                        <Link to="/Spring">
                            <div className="item__img">
                                <img src={Saigon} />
                            </div>
                            <div className="item__title">
                            Premium Suite
                            </div>
                            <div className="item__desc">
                            Tận hưởng không gian phòng riêng tư cùng đặc quyền sử dụng Club Lounge Access.
                            </div>
                                </Link>
                        </div>
                        <div className="packages__item col-xxl-4 col-xl-4 col-lg-6 col-md-12">
                        <Link to="/Spring">
                            <div className="item__img">
                                <img src={Nhatrang} />
                            </div>
                            <div className="item__title">
                            Gói thương gia cùng quyền lợi CLUB
                            </div>
                            <div className="item__desc">
                            1 khách hoặc 2 khách | Phòng Deluxe Club | Ăn trưa | 3 đêm liên tiếp | Ngày trong tuần
                            </div>
                                </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Selection ;