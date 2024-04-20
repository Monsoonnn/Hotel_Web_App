

import "./Weddingconference.css"
import { Link, NavLink, Outlet } from "react-router-dom";
import Weddingp from "../../assets/images/global_wedding.jpg";
import Conferencep from "../../assets/images/global_convention.jpg";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


const WeddingConference = () => {
    return (
        <>
            <div className="weddingandconference">
                <div className="container">
                    <div className="row">
                        <div className="weddingandconference__title col-xxl-12">
                            Lễ cưới và Hội Nghị
                        </div>

                        <div className="wedding col-xxl-6  col-xl-6 col-lg-6 col-sm-12">
                            <Link to="/Weddingp">
                                <div className="item__img">
                                    <img src={Weddingp} />
                                </div>
                            </Link>
                            <div className="item__title">
                                Tiệc cưới
                            </div>
                            <div className="item__desc">
                                Vì qúy vị là người đẹp nhất, chúng tôi đã chuẩn bị mọi thứ cho những khoảnh khắc hạnh phúc nhất của quý vị. Các chuyên viên tư vấn đặc biệt sẽ tiến hành các công đoạn chuẩn bị hoàn hảo cho lễ cưới của quý vị từ lễ cưới sang trọng theo truyền thống và phong cách tới lễ cưới hiện đại và tinh tế.
                            </div>
                            <button>
                                <Link to="/Weddingp">
                                    <span>
                                        Xem chi tiết
                                    </span>
                                </Link>
                            </button>
                        </div>
                        <div className="conference col-xxl-6  col-xl-6 col-lg-6 col-sm-12">
                            <Link to="/Conferencep">
                                <div className="item__img">
                                    <img src={Conferencep} />
                                </div>
                            </Link>
                            <div className="item__title">
                                Địa điểm tổ chức tiệc
                            </div>
                            <div className="item__desc">
                                Lotte Hotel được trang bị phòng tiệc và cơ sở vật chất hiện đại cho các sự kiện khác nhau như hội nghị quốc tế, hội thảo kinh doanh và các cuộc họp quy mô nhỏ.
                            </div>
                            <button>
                                <Link to="/Conferencep">
                                    <span>
                                        Xem chi tiết
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

export default WeddingConference;