import { Link, NavLink } from "react-router-dom";

const Register = (props) => {
    const {swap} = props;
    return (
        <>
            <div className="register-container" id="register">
                <div className="top">
                    <span>Bạn đã có tài khoản?
                        <div className="login-button" style={{cursor: "pointer"}}
                        >   
                            <Link to="/member">
                                Đăng nhập
                            </Link>
                        </div></span>
                    <header>Đăng ký</header>
                </div>
                <div className="two-forms">
                    <div className="input-box">
                        <input type="text" className="input-field" placeholder="Họ" />
                        <i className="bx bx-user"></i>
                    </div>
                    <div className="input-box">
                        <input type="text" className="input-field" placeholder="Tên" />
                        <i className="bx bx-user"></i>
                    </div>
                </div>
                <div className="input-box">
                    <input type="text" className="input-field" placeholder="Email" />
                    <i className="bx bx-envelope"></i>
                </div>
                <div className="input-box">
                    <input type="password" className="input-field" placeholder="Mật khẩu" />
                    <i className="bx bx-lock-alt"></i>
                </div>
                <div className="input-box">
                    <input type="passwordConfirm" className="input-field" placeholder="Nhập lại mật khẩu" />
                    <i className="bx bx-lock-alt"></i>
                </div>
                <div className="input-box">
                    <input type="submit" className="submit" value="Đăng ký" />
                </div>
                <div className="two-col" style={{
                    margin: "0px"
                }}>
                    <div className="one">
                    </div>
                    <Link to="/" style={{
                            color: "#fff",
                            fontSize: "15px",
                            marginRight: "10px"
                        }}>
                            <div className="two" style={{
                                cursor: 'pointer'
                            }}>
                                <div href="#">Về trang chủ</div>
                            </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Register;