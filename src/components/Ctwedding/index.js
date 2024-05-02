
import Gtc from "../../assets/images/Gtc.jpg";
import HT1 from "../../assets/images/ht1.jpg";
import HT2 from "../../assets/images/ht2.jpg";
import HT3 from "../../assets/images/ht3.jpg";
import HT4 from "../../assets/images/ht4.jpg";
import HT5 from "../../assets/images/ht5.jpg";
import HT6 from "../../assets/images/ht6.jpg";
import PC1 from "../../assets/images/pc1.jpg";
import PC2 from "../../assets/images/pc2.jpg";
import PC3 from "../../assets/images/pc3.jpg";
import PC4 from "../../assets/images/pc4.jpg";

import { Link, NavLink, Outlet } from "react-router-dom";
import HeaderAll from "../../components/HeaderAll";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./Weddingp.css"

const Ctwedding = () => {
    return (
        <>

            <div className="ct">
                <div className="container">
                    <div className="weddingp">
                        <div className="weddingp__title">
                            Giới thiệu
                        </div>
                        <div className="weddingpdc">
                            <div className="gtc__img">
                                <img src={Gtc} />
                            </div>
                            <div className="gtc__title">
                                Bạn sắp bắt đầu ngày lễ quan trọng nhất trong cuộc đời bạn.
                                <div> Bạn muốn tạo ra những khoảnh khắc tuyệt vời và lãng mạn không thể nào quên.
                                </div>
                            </div>
                            <div className="gtc__desc">
                                Bạn trông đẹp hơn bất cứ ai khác trên thế giới, vì vậy hãy để chúng tôi chuẩn bị mọi thứ cho khoảnh khắc hạnh phúc nhất của bạn. Chúng tôi đưa đến cho bạn những lựa chọn phong cách đám cưới khác nhau, từ cổ điển truyền thống tinh tế tới sự thanh lịch với không gian hiện đại và tinh vi. Bạn trong chiếc váy trắng sẽ trở nên rực rỡ và quyến rũ hơn bao giờ hết với trang trí hoa sang trọng và khác biệt, món ăn hàng đầu của chúng tôi và dịch vụ đẳng cấp. Hãy để Khách sạn LOTTE chăm sóc cho ngày quan trọng nhất của bạn
                            </div>
                        </div>
                    </div>

                    <div className="hoitruong">
                        Hội trường tiệc cưới
                    </div>

                    <div className="ht">
                        <div className="packages__item col-xxl-4  col-xl-4 col-lg-4 col-sm-12">
                            <Link to="/Spring">
                                <div className="ht__img">
                                    <img src={HT1} />
                                </div>
                                <div className="ht_place">
                                    KHÁCH SẠN HÀ NỘI
                                </div>
                                <div className="ht__title">
                                    SIGNIEL Wedding
                                </div>
                            </Link>
                        </div>

                        <div className="packages__item col-xxl-4  col-xl-4 col-lg-4 col-sm-12">
                            <Link to="/Spring">
                                <div className="ht__img">
                                    <img src={HT2} />
                                </div>
                                <div className="ht_place">
                                    KHÁCH SẠN HÀ NỘI
                                </div>
                                <div className="ht__title">
                                    Crystal Ballroom
                                </div>
                            </Link>
                        </div>

                        <div className="packages__item col-xxl-4  col-xl-4 col-lg-4 col-sm-12">
                            <Link to="/Spring">
                                <div className="ht__img">
                                    <img src={HT3} />
                                </div>
                                <div className="ht_place">
                                    KHÁCH SẠN ĐÀ NẴNG
                                </div>
                                <div className="ht__title">
                                    Crystal Ballroom
                                </div>
                            </Link>
                        </div>

                        <div className="packages__item col-xxl-4  col-xl-4 col-lg-4 col-sm-12">
                            <Link to="/Spring">
                                <div className="ht__img">
                                    <img src={HT4} />
                                </div>
                                <div className="ht_place">
                                    KHÁCH SẠN ĐÀ NẴNG
                                </div>
                                <div className="ht__title">
                                    Banquet Hall Pushkin
                                </div>
                            </Link>
                        </div>

                        <div className="packages__item col-xxl-4  col-xl-4 col-lg-4 col-sm-12">
                            <Link to="/Spring">
                                <div className="ht__img">
                                    <img src={HT5} />
                                </div>
                                <div className="ht_place">
                                    KHÁCH SẠN SÀI GÒN
                                </div>
                                <div className="ht__title">
                                    Private Party
                                </div>
                            </Link>
                        </div>

                        <div className="packages__item col-xxl-4  col-xl-4 col-lg-4 col-sm-12">
                            <Link to="/Spring">
                                <div className="ht__img">
                                    <img src={HT6} />
                                </div>
                                <div className="ht_place">
                                    KHÁCH SẠN SÀI GÒN
                                </div>
                                <div className="ht__title">
                                    Crystal Ballroom
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="ttll">
                        <div className="ttll__title">
                            THÔNG TIN LIÊN LẠC
                        </div>
                        <div className="ttll__wd">
                            <div className="ttll__place">
                                KHÁCH SẠN HÀ NỘI
                            </div>
                            <div className="ttll__number">
                                TEL +84-2-321-1777
                            </div>
                            <div className="ttll__fax">
                                FAX +84-2-3213-1782
                            </div>
                            <Link to="/spring">
                                <span>
                                    Xem chi tiết
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="ttll__wd">
                        <div className="ttll__place">
                            KHÁCH SẠN SÀI GÒN
                        </div>
                        <div className="ttll__number">
                            TEL +84-2-411-7575
                        </div>
                        <div className="ttll__fax">
                            FAX +84-20-411-745
                        </div>
                        <Link to="/spring">
                            <span>
                                Xem chi tiết
                            </span>
                        </Link>
                    </div>
                    <div className="ttll__wd">
                        <div className="ttll__place">
                            KHÁCH SẠN ĐÀ NẴNG
                        </div>
                        <div className="ttll__number">
                            TEL +84-5-922-1040
                        </div>
                        <div className="ttll__fax">
                            FAX +84-21-303-600
                        </div>
                        <Link to="/spring">
                            <span>
                                Xem chi tiết
                            </span>
                        </Link>
                    </div>

                    <div className="pc__title">
                        PHONG CÁCH CƯỚI TẠI LOTTE HOTEL
                    </div>
                    <div className="pc__ct">
                        <div className="pc__img">
                            <img src={PC1} />
                        </div>
                        <div clasName="pc__info">
                            LOTTE Family Club
                            <div className="pc__info2">
                                Nó được chuẩn bị sẵn sàng cho bạn nhớ ngày may mắn của bạn. Dịch vụ trung thực được thiết kế để làm hài lòng bạn. Một khi bạn trở thành một thành viên của LOTTE HOTEL Family Club, bạn sẽ có quyền truy cập vào các loại lợi ích và dịch vụ khách hàng mà có thể nhắc nhở bạn về những ngày may mắn của bạn.
                            </div>
                        </div>
                    </div>

                    <div className="pc__ct">
                        <div className="pc__img">
                            <img src={PC2} />
                        </div>
                        <div clasName="pc__info">
                            TRANG TRÍ BÀN
                            <div className="pc__info2">
                                Các chuyên gia của chúng tôi sẽ trang trí bàn cưới như ước nguyện của bạn. Sự thanh lịch và tinh tế của họ sẽ là sự hỗ trợ đắc lực cho bạn. Họ sẽ giúp bạn tạo phong cách độc đáo của riêng bạn bỏ phòng tiệc và thời gian tổ chức lễ cưới.
                            </div>
                        </div>
                    </div>

                    <div className="pc__ct">
                        <div className="pc__img">
                            <img src={PC3} />
                        </div>
                        <div clasName="pc__info">
                            DỊCH VỤ LIMOUSINE
                            <div className="pc__info2">
                                Một dịch vụ xe limousine sân bay sẽ được cung cấp cho các cô dâu và chú rể (với 300 khách trở lên). Hãy trải nghiệm dịch vụ VIP mà LOTTE HOTEL cung cấp độc quyền cho khách hàng đám cưới của chúng tôi.
                                <div>* Có thể khác nhau bởi khách sạn.</div>
                            </div>
                        </div>
                    </div>

                    <div className="pc__ct">
                        <div className="pc__img">
                            <img src={PC4} />
                        </div>
                        <div clasName="pc__info">
                            DỊCH VỤ THỬ ĐỒ ĂN
                            <div className="pc__info2">
                                Một dịch vụ thử đồ ăn cho menu chọn được cung cấp cho khách hàng đặt tiệc cưới. Hãy trải nghiệm những thực đơn tốt nhất của LOTTE HOTEL cưới đó là chuẩn bị tốt cho khách mời đặc biệt.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Ctwedding;