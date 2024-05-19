import { Link, NavLink, Outlet } from "react-router-dom";
import HeaderAll from "../../components/HeaderAll";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const Job = () => {
    return (
        <>

            <div className="jd">
                <div className="container">
                    
            <div className="jobs">
                <div className="jobs__title">
                    Cơ hội nghề nghiệp
                </div>
                <div className="jobs__desc">
                    Bạn là một người dũng cảm và tham vọng, và chúng tôi cần bạn
                </div>
                <div className="jobs__desc2">
                    Chúng tôi tuyển dụng nhân tài tiềm năng hàng năm.
                    <div>Tham khảo mục “Tuyển dụng” trước khi nộp đơn.
                    </div>
                </div>
            </div>

            <div className="td">
                <div className="td__title">
                    Tuyển dụng nhóm (Tuyển dụng người mới làm việc/người chưa có kinh nghiệm)
                </div>
                <div className="td__desc">
                    Các lĩnh vực tuyển dụng: Phòng, hỗ trợ quản lý, tài chính, quản lý bán hàng, cơ sở vật chất, v.v.
                    <div>Thời gian tuyển dụng: Hai lần một năm (nửa đầu năm/nửa cuối năm)</div>
                    <div>Cách thức nộp đơn: Thông qua email của công ty</div>
                    <div>
                        <Link to="/Careers">
                            Đăng ký tại Trang chủ tuyển dụng tại đây
                        </Link>
                    </div>
                </div>
            </div>

            <div className="td">
                <div className="td__title">
                    Tuyển dụng cho người nộp đơn có kinh nghiệm
                </div>
                <div className="td__desc">
                    Các lĩnh vực tuyển dụng: Tất cả các lĩnh vực
                    <div>Thời gian tuyển dụng: Quanh năm</div>
                    <div>
                        <Link to="/Careers">
                            Cách thức nộp đơn: Đăng ký và gửi qua trang chủ tại đây
                        </Link>
                    </div>
                </div>
            </div>

            <div className="td">
                <div className="td__title">
                    Thực tập
                </div>
                <div className="td__desc">
                    Các lĩnh vực tuyển dụng: Tất cả các lĩnh vực
                    <div>Thời gian tuyển dụng: Quanh năm</div>
                    <div>
                        <Link to="/Careers">
                            Cách thức nộp đơn: Đăng ký và gửi qua trang chủ tại đây
                        </Link>
                    </div>
                </div>
            </div>


                </div>
            </div>
        </>

    )
}

export default Job;