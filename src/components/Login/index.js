import { NavLink } from "react-router-dom";
// import "./login.css"
const Login = (props) => {
    return (
        <>
            <div className="login-container" id="login">
                <div className="top">
                    <span>Bạn chưa có tài khoản?
                        <div className="sign-up-button" style={{cursor: "pointer"}}>
                            <NavLink to="/member/sign-up">
                                Đăng ký
                            </NavLink>
                        </div></span>
                    <header>Đăng nhập</header>
                </div>
                <div className="input-box">
                    <input type="text" className="input-field" placeholder="Tài khoản hoặc email" />
                    <i className="bx bx-user"></i>
                </div>
                <div className="input-box">
                    <input type="password" className="input-field" placeholder="Mật khẩu" />
                    <i className="bx bx-lock-alt"></i>
                </div>
                <div className="input-box">
                    <input type="submit" className="submit" value="Đăng nhập" />
                </div>
                <div className="two-col">
                    <div className="one">
                        <input type="checkbox" id="login-check" />
                        <label htmlFor="login-check">Ghi nhớ đăng nhập</label>
                    </div>
                    <div className="two">
                        <label><div href="#">Quên mật khẩu</div></label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;