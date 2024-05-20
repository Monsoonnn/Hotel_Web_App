
import "./sider.css"
import Logo from "../../assets/images/gnb_logo_hotelsresorts.png"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { clearLogin } from "../../redux/actions/isUserLogin";

const Sider = () => {

    const [activePage, setPage] = useState("dashboard");

    const handleOnclick = (page) =>{
        setPage(page)
    }
    const login = useSelector(state => state.isUserLogin)

    const dispathLogin = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        Swal.fire({
            icon: "question",
            title: "Bạn muốn thoát ngay lúc này chứ ?",
            text: "Dữ liệu quản lí sẽ không được lưu lại",
            showConfirmButton: true,
        }).then((swalResult) => {
            if (swalResult.isConfirmed) { 
                dispathLogin(clearLogin())
                navigate("/")
            }
        });
       
    }
    return (
        <>

            <div className="sider" style={{
                backgroundColor: "#343A40",
                color: "#fff",
                height: "100%"
            }}>
                <div className="sider__title" style={{
                    fontSize: "25px",
                    padding: "20px",
                    textAlign: "center"
                }}>
                    Quản lí khách sạn
                </div>
                <div className="sider__user" style={{
                    padding: "20px",
                    paddingTop: "0px",
                    textAlign: "center",
                    display: 'flex',
                    flexWrap: "nowrap",
                }}>
                    <div className="sider__avatar" style={{
                        width: "50px",
                        borderRadius: "45px",
                        overflow: "hidden",
                        border: "0.1px solid #fff"
                    }}>
                        <img src={`https://lh3.googleusercontent.com/a/ACg8ocLgTXNjvNKbl6GNDnBLFdrn6DRW15LDrxndlavAIj1VXCggnqYJ=s288-c-no`} style={{
                            width: "100%",
                            objectFit: "cover"
                        }} />
                    </div>
                    <div className="sider__userName" style={{
                        paddingTop: "10px",
                        paddingLeft: "10px"
                    }}>
                        Nguyễn Quang Anh
                    </div>
                </div>

                <div className="sider__list ">
                    <Link to="/manager" onClick={() => handleOnclick(`dashboard`)}>
                        <div className={"sider__item" + ((activePage == 'dashboard') ? ' activeSider' : '')}>
                            Tổng quan
                        </div>
                    </Link>
                    <Link to="/manager/staff" onClick={() => handleOnclick(`staff`)}>
                        <div className={"sider__item" + ((activePage == 'staff') ? ' activeSider' : '')}>
                            Nhân viên
                        </div>
                    </Link>
                    <Link to="/manager/client" onClick={() => handleOnclick(`client`)}>
                        <div className={"sider__item" + ((activePage == 'client') ? ' activeSider' : '')} >
                            Khách hàng
                        </div>
                    </Link>
                    <Link to="/manager/rooms" onClick={() => handleOnclick(`rooms`)}>
                        <div className={"sider__item" + ((activePage == 'rooms') ? ' activeSider' : '')} >
                            Phòng
                        </div>
                    </Link>
                    <Link to="/manager/services" onClick={() => handleOnclick(`services`)}>
                        <div className={"sider__item" + ((activePage == 'services') ? ' activeSider' : '')} >
                            Dịch vụ
                        </div>
                    </Link>
                    <Link to="/manager/booking" onClick={() => handleOnclick(`bookings`)}>
                        <div className={"sider__item" + ((activePage == 'bookings') ? ' activeSider' : '')} >
                            Đặt phòng
                        </div>
                    </Link>
                    <Link to="/" onClick={() => handleOnclick(`dashboard`)}>
                        <div className={"sider__item"} >
                            Về trang chủ
                        </div>
                    </Link>
                    <div className="sider__item " onClick={handleLogout}>
                        Đăng xuất
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sider;