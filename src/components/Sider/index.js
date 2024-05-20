
import "./sider.css"
import Logo from "../../assets/images/gnb_logo_hotelsresorts.png"
import { useState } from "react"
import { Link } from "react-router-dom";

const Sider = () => {

    const [activePage, setPage] = useState("dashboard");

    const handleOnclick = (page) =>{
        setPage(page)
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
                    <div className="sider__item ">
                        Khách hàng
                    </div>
                    <div className="sider__item ">
                        Phòng
                    </div>
                    <div className="sider__item ">
                        Dịch vụ
                    </div>
                    <div className="sider__item ">
                        Hỗ trợ
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sider;