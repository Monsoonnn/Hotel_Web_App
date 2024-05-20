
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/gnb_logo_hotelsresorts.png"
import "./globalHeader.css"
import { Col, Flex, Row } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { clearLogin } from "../../redux/actions/isUserLogin";
import Swal from "sweetalert2";

const HeaderAll = () => {

    const login = useSelector(state => state.isUserLogin)

    const dispathLogin = useDispatch();

    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            icon: "question",
            title: "Bạn muốn thoát ngay lúc này chứ ?",
            text: "Dữ liệu sẽ không lưu lại sau khi đăng xuất",
            showConfirmButton: true,
        }).then((swalResult) => {
            if (swalResult.isConfirmed) { 
                dispathLogin(clearLogin())  
                navigate("/")
            }
        });
       
    }

    // console.log(login)

    return (
        <>
            <div className="globalHeader" style={{ position: "fixed", padding: "0px 10px", paddingBottom: "0px", zIndex: "999", width: "100%", backgroundColor: "#fff"}}>
                <Row wrap={false} >
                    <Col lg={3} flex={1}>
                        <Link to="/">
                        <img src={Logo} />
                        </Link>
                    </Col>
                    <Col lg={21}
                    >
                        <ul style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            padding: "10px",   
                        }}>
                        <li><NavLink style={{ fontSize: "14px" ,  paddingTop: "5px"}} to="/reservation">
                            Tìm kiếm đặt phòng
                        </NavLink>
                        </li>
                        {login.length === 0 ? 
                            <>
                                <li>
                                <NavLink style={{ fontSize: "14px",   paddingTop: "5px"}} to="/member">
                                    Đăng nhập
                                </NavLink>
                                </li>
                                <li><NavLink style={{ fontSize: "14px" ,  paddingTop: "5px"}} to="/member/sign-up">
                                    Đăng ký
                                </NavLink>
                                </li>
                            </>:
                            <>
                                <li>
                                <NavLink style={{ fontSize: "14px",   paddingTop: "5px"}}>
                                    {`Xin chào, ${login.name}`}
                                </NavLink>
                                </li>
                                <li>
                                {login.role === "user" ? 
                                    <NavLink style={{ fontSize: "14px",   paddingTop: "5px"}} to="/profile">
                                    {`Cài đặt tài khoản`}
                                    </NavLink>
                                :
                                    <NavLink style={{ fontSize: "14px",   paddingTop: "5px"}} to="/manager">
                                    {`Quản lí khách sạn`}
                                    </NavLink>
                                }
                                </li>
                                <li>
                                <NavLink style={{ fontSize: "14px" ,  paddingTop: "5px"}} onClick={handleLogout}>
                                    Đăng xuất
                                </NavLink>
                                </li>
                            </>
                            
                        }

                    </ul>
                </Col>
            </Row>
        </div >
        </>
    )


}

export default HeaderAll;