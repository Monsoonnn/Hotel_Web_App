
import "./selection.css"
import { Link, NavLink, Outlet } from "react-router-dom";
import Anh1 from "../../assets/images/anh1.jpg";
import Anh2 from "../../assets/images/anh2.jpg";
import Anh3 from "../../assets/images/anh3.jpg";
import Anh4 from "../../assets/images/anh4.jpg";
import Anh5 from "../../assets/images/anh5.jpg";
import Anh6 from "../../assets/images/anh6.jpg";
import Anh7 from "../../assets/images/anh7.jpg";
import Anh8 from "../../assets/images/anh8.jpg";

const Selection = () => {
    return (
        <>
            <div className="select">
                <div className="container">
                    <div className="row">
                        <div className="select__title col-xxl-12">
                            Chọn thương hiệu/khách sạn
                        </div>
                        <div className="packages__item col-xxl-6  col-xl-6 col-lg-6 col-sm-12">
                            <Link >
                                <div className="item__img">
                                    <img src={Anh1} />
                                </div>
                                <div className="item_place">
                                    Global
                                </div>
                                <div className="item__title">
                                    Hành Trình Khám Phá Tinh Hoa Văn Hóa Việt Nam
                                </div>
                                <div className="item__desc">
                                    Đừng bỏ lỡ những chương trình ưu đãi trong hành trình khám phá tinh hoa văn hóa Việt Nam
                                    <div className="d2"> Ở lại : Jan 1, 2024 - Dec 31, 2024
                                        <div>Đặt phòng : Jan 1, 2024 - Dec 31, 2024</div>
                                    </div>
                                </div>
                                <div className="item_price">
                                    From 8,999,959 VND
                                </div>
                            </Link>
                        </div>
                        <div className="packages__item col-xxl-6  col-xl-6 col-lg-6 col-sm-12">
                            <Link >
                                <div className="item__img">
                                    <img src={Anh2} />
                                </div>
                                <div className="item_place">
                                    Khách sạn LOTTE Sài Gòn
                                </div>
                                <div className="item__title">
                                    Premium Suite
                                </div>
                                <div className="item__desc">
                                    Tận hưởng không gian phòng riêng tư cùng đặc quyền sử dụng Club Lounge Access.
                                    <div className="d2">Ở lại : Jan 1, 2024 - Dec 31, 2024
                                        <div>Đặt phòng : Jan 1, 2024 - Dec 31, 2024</div>
                                    </div>
                                </div>
                                <div className="item_price">
                                    From 7,999,959 VND
                                </div>
                            </Link>
                        </div>
                        <div className="packages__item col-xxl-6  col-xl-6 col-lg-6 col-sm-12">
                            <Link >
                                <div className="item__img">
                                    <img src={Anh3} />
                                </div>
                                <div className="item_place">
                                    Khách sạn LOTTE Hà Nội
                                </div>
                                <div className="item__title">
                                    Xách vali lên và đi
                                </div>
                                <div className="item__desc">
                                    2 Người lớn | Phòng Deluxe hoặc Phòng Club Junior Suite | Ăn sáng | Đưa đón sân bay
                                    <div className="d2">Ở lại : Jan 1, 2024 - Dec 31, 2024
                                        <div>Đặt phòng : Jan 1, 2024 - Dec 31, 2024</div>
                                    </div>
                                </div>
                                <div className="item_price">
                                    From 4,499,976 VND
                                </div>
                            </Link>
                        </div>
                        <div className="packages__item col-xxl-6  col-xl-6 col-lg-6 col-sm-12">
                            <Link >
                                <div className="item__img">
                                    <img src={Anh4} />
                                </div>
                                <div className="item_place">
                                    Khách sạn LOTTE Hà Nội
                                </div>
                                <div className="item__title">
                                    Gói thương gia cùng quyền lợi CLUB
                                </div>
                                <div className="item__desc">
                                    1 khách hoặc 2 khách | Phòng Deluxe Club | Ăn trưa | 3 đêm liên tiếp | Ngày trong tuần
                                    <div className="d2">  Ở lại : Jan 1, 2024 - Dec 31, 2024
                                        <div>Đặt phòng : Jan 1, 2024 - Dec 31, 2024</div>
                                    </div>
                                </div>
                                <div className="item_price">
                                    From 10,899,940 VND
                                </div>
                            </Link>
                        </div>
                        <div className="packages__item col-xxl-6  col-xl-6 col-lg-6 col-sm-12">
                            <Link >
                                <div className="item__img">
                                    <img src={Anh5} />
                                </div>
                                <div className="item_place">
                                    Khách sạn LOTTE Sài Gòn
                                </div>
                                <div className="item__title">
                                    Advance Booking, Save 20%
                                </div>
                                <div className="item__desc">
                                    Giảm 20% giá phòng
                                    <div className="d2">
                                        Ở lại : Jan 1, 2024 - Dec 31, 2024
                                        <div>Đặt phòng : Jan 1, 2024 - Dec 31, 2024</div>
                                    </div>
                                </div>
                                <div className="item_price">
                                    From 3,199,991 VND
                                </div>
                            </Link>
                        </div>
                        <div className="packages__item col-xxl-6  col-xl-6 col-lg-6 col-sm-12">
                            <Link >
                                <div className="item__img">
                                    <img src={Anh6} />
                                </div>
                                <div className="item_place">
                                    L7 WEST LAKE HÀ NỘI BY LOTTE
                                </div>
                                <div className="item__title">
                                    [Thành viên REWARDS] Ưu đãi giá phòng
                                </div>
                                <div className="item__desc">
                                    Ưu đãi lên tới 5%
                                    <div className="d2">
                                        Ở lại : Jan 1, 2024 - Dec 31, 2024
                                        <div>Đặt phòng : Jan 1, 2024 - Dec 31, 2024</div>
                                    </div>
                                </div>
                                <div className="item_price">
                                    From 2,507,984 VND
                                </div>
                            </Link>
                        </div>
                        <div className="packages__item col-xxl-6  col-xl-6 col-lg-6 col-sm-12">
                            <Link >
                                <div className="item__img">
                                    <img src={Anh7} />
                                </div>
                                <div className="item_place">
                                    L7 WEST LAKE HÀ NỘI BY LOTTE
                                </div>
                                <div className="item__title">
                                    Ưu đãi đặt phòng sớm - Bao gồm bữa sáng
                                </div>
                                <div className="item__desc">
                                    Ưu đãi đến 12% khi đặt phòng sớm trước 7 ngày. Ưu đãi đã bao gồm ăn sáng.
                                    <div className="d2">
                                        Ở lại : Jan 1, 2024 - Dec 31, 2024
                                        <div>Đặt phòng : Jan 1, 2024 - Dec 31, 2024</div>
                                    </div>
                                </div>
                                <div className="item_price">
                                    From 3,379,189 VND
                                </div>
                            </Link>
                        </div>
                        <div className="packages__item col-xxl-6  col-xl-6 col-lg-6 col-sm-12">
                            <Link >
                                <div className="item__img">
                                    <img src={Anh8} />
                                </div>
                                <div className="item_place">
                                    L7 WEST LAKE HÀ NỘI BY LOTTE
                                </div>
                                <div className="item__title">
                                    Ưu đãi lưu trú dài ngày
                                </div>
                                <div className="item__desc">
                                    Ưu đãi đến 25% khi đặt phòng. Ưu đãi không bao gồm ăn sáng.
                                    <div className="d2">
                                        Ở lại : Jan 1, 2024 - Dec 31, 2024
                                        <div>Đặt phòng : Jan 1, 2024 - Dec 31, 2024</div>
                                    </div>
                                </div>
                                <div className="item_price">
                                    From 2,699,993 VND
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Selection;