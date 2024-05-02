
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/gnb_logo_hotelsresorts.png"
import "./globalHeader.css"
import { Col, Flex, Row } from 'antd';
const HeaderAll = () => {


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
                        <li><NavLink style={{ fontSize: "14px",   paddingTop: "5px"}} to="/member">
                            Đăng nhập
                        </NavLink>
                        </li>
                        <li><NavLink style={{ fontSize: "14px" ,  paddingTop: "5px"}} to="/member/sign-up">
                            Đăng ký
                        </NavLink>
                        </li>
                        <li>
                            <NavLink style={{ fontSize: "14px" ,  paddingTop: "5px"}} >
                                Tỉ giá VND
                            </NavLink>
                        </li>

                    </ul>
                </Col>
            </Row>
        </div >
        </>
    )


}

export default HeaderAll;