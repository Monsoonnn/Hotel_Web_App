
import Gtc2 from "../../assets/images/Gtc2.jpg";
import tct1 from "../../assets/images/tct1.jpg";
import tct2 from "../../assets/images/tct2.jpg";
import tct3 from "../../assets/images/tct3.jpg";
import tct4 from "../../assets/images/tct4.jpg";
import ms1 from "../../assets/images/ms1.jpg";
import ms2 from "../../assets/images/ms2.jpg";

import { Link, NavLink, Outlet } from "react-router-dom";
import HeaderAll from "../../components/HeaderAll";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./Conferencep.css"

const Ctconference = () => {
    return (
        <>

            <div className="ct">
                <div className="container">
                    <div className="conferencep">
                        <div className="conferencep__title">
                            Giới thiệu
                        </div>
                        <div className="conferencepdc">
                            <div className="gtc__img">
                                <img src={Gtc2} />
                            </div>
                            <div className="gtc2__title">
                                LOTTE HOTEL là lựa chọn lý tưởng cho những hội nghị
                            </div>
                            <div className="gtc__desc">
                                LOTTE HOTEL được trang bị phòng tiệc hiện đại và cơ sở tối tân để tổ chức các sự kiện khác nhau như hội nghị quốc tế, hội thảo kinh doanh và các cuộc họp quy mô nhỏ. Chúng tôi cung cấp không gian hoàn hảo để tổ chức các sự kiện như hội nghị quốc tế với thiết bị dịch & video cùng với máy chiếu màn hình lớn. Với dịch vụ thanh lịch và sang trọng, LOTTE HOTEL sẽ tạo nên sự độc đáo và giá trị cho các sự kiện của bạn.
                            </div>
                        </div>
                    </div>

                    <div className="hoitruong">
                        Địa điểm tổ chức tiệc
                    </div>

                    <div className="ht">
                        <div className="packages__item col-xxl-4  col-xl-4 col-lg-4 col-sm-12">
                            <div className="ht__img">
                                <img src={tct1} />
                            </div>
                            <div className="ht_place">
                                Khách sạn Hà Nội
                            </div>
                            <div className="ht__title">
                                Crystal Ballroom
                            </div>
                        </div>

                        <div className="packages__item col-xxl-4  col-xl-4 col-lg-4 col-sm-12">
                            <div className="ht__img">
                                <img src={tct2} />
                            </div>
                            <div className="ht_place">
                                Khách sạn Hà Nội
                            </div>
                            <div className="ht__title">
                                Seminar Room
                            </div>
                        </div>

                        <div className="packages__item col-xxl-4  col-xl-4 col-lg-4 col-sm-12">
                            <div className="ht__img">
                                <img src={tct3} />
                            </div>
                            <div className="ht_place">
                                Khách sạn Sài Gòn
                            </div>
                            <div className="ht__title">
                                Business Room
                            </div>
                        </div>


                    </div>

                    <div className="ttll">
                        <div className="ttll__title">
                            THÔNG TIN LIÊN LẠC
                        </div>
                        <div className="ttll__ct" style={{ width: "100%" }}>
                            <div className="ttll__place">
                                KHÁCH SẠN HÀ NỘI
                            </div>
                            <div className="ttll__number">
                                TEL +84-22-321-1777
                            </div>
                            <div className="ttll__fax">
                                FAX +84-2-3213-1782
                            </div>
                        </div>
                        <div className="ttll__ct" style={{ width: "100%" }}>
                            <div className="ttll__place">
                                KHÁCH SẠN  SÀI GÒN
                            </div>
                            <div className="ttll__number">
                                TEL +84-55-922-1040
                            </div>
                            <div className="ttll__fax">
                                FAX +84-2-3030-6000
                            </div>
                        </div>

                        <div className="ttll__ct" style={{ width: "100%" }}
                        >
                            <div className="ttll__place">
                                KHÁCH SẠN ĐÀ NẴNG
                            </div>
                            <div className="ttll__number">
                                TEL +84-25-411-7575
                            </div>
                            <div className="ttll__fax">
                                FAX +84-2-4141-7455
                            </div>
                        </div>
                    </div>




                    <div className="ms__title">
                        LOTTE HOTEL Meeting Service
                    </div>
                    <div className="ms">

                        <div className="ms__ct">
                            <div className="ms__image">
                                <img src={ms1} />
                            </div>
                            <div clasName="ms__info">
                                TRANG THIẾT BỊ
                                <div className="ms__info2">
                                    Chúng tôi cung cấp các thiết bị mới nhất phù hợp cho các sự kiện khác nhau, từ các cuộc họp quy mô nhỏ tới các hội nghị quy mô lớn. Chúng tôi cung cấp không gian hoàn hảo để tổ chức các sự kiện như hội nghị quốc tế với thiết bị dịch & video cùng với máy chiếu màn hình lớn. Với dịch vụ thanh lịch và sang trọng, LOTTE HOTEL sẽ tạo nên sự độc đáo và giá trị cho các sự kiện của bạn.
                                </div>
                            </div>
                        </div>

                        <div className="ms__ct">
                            <div className="ms__image">
                                <img src={ms2} />
                            </div>
                            <div clasName="ms__info">
                                THỰC ĐƠN
                                <div className="ms__info2">
                                    Một bữa tối được đầu tư cẩn thận là yếu tố hàng đầu quyết định thành công lễ hội, ngày lễ hay tiệc chiêu đãi của bạn. Chúng tôi sẽ chuẩn bị bữa tối đẳng cấp để làm cho các cuộc họp của bạn hoàn hảo hơn.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Ctconference;