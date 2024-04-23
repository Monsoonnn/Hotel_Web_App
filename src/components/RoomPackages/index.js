
import "./packages.css"
import { Link, NavLink, Outlet } from "react-router-dom";
import spring from "../../assets/images/main-promo720-g-0228-d.webp"
import bed from "../../assets/images/240219-02-main-promo720.webp"
import reward from "../../assets/images/240219-03-main-promo720.webp"

const RoomPackages = () => {
    return (
        <>
            <div className="packages">
                <div className="container">
                    <div className="row">
                        <div className="packages__title col-xxl-12">
                            Gói phòng và ưu đãi
                        </div>
                        <div className="packages__item col-xxl-4 col-xl-4 col-lg-6 col-md-12">
                            <div className="item__img">
                                <img src={spring} />
                            </div>
                            <div className="item__title">
                                KỲ NGHỈ XUÂN
                            </div>
                            <div className="item__desc">
                                Khám phá các quyền lợi khác nhau của HOTELS & RESORTS!
                            </div>
                            <button>
                                <Link to="/Spring">
                                    <span>
                                    ĐẶT DỊCH VỤ
                                    </span>
                                </Link>
                            </button>
                        </div>
                        <div className="packages__item col-xxl-4 col-xl-4 col-lg-6 col-md-12">
                            <div className="item__img">
                                <img src={bed} />
                            </div>
                            <div className="item__title">
                                GÓI DỊCH VỤ
                                BED&BREAKFAST
                            </div>
                            <div className="item__desc">
                                Chúng tôi đã chuẩn bị những ưu đãi trong đó đã bao gồm bữa sáng để quý khách có thể tận hưởng kỳ nghỉ
                            </div>
                            <button>
                                <Link to="/Spring">
                                    <span>
                                    ĐẶT DỊCH VỤ
                                    </span>
                                </Link>
                            </button>
                        </div>
                        <div className="packages__item col-xxl-4 col-xl-4 col-lg-6 col-md-12">
                            <div className="item__img">
                                <img src={reward} />
                            </div>
                            <div className="item__title">
                                KHUYẾN MÃI THÀNH VIÊN 
                            </div>
                            <div className="item__desc">
                                Tìm phòng tại LOTTE HOTELS & RESORTS trên toàn thế giới với mức giá đặc biệt dành cho các thành viên
                            </div>
                            <button>
                                <Link to="/Spring">
                                    <span>
                                    ĐẶT DỊCH VỤ
                                    </span>
                                </Link>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomPackages;