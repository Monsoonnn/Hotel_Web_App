import Password from "antd/es/input/Password";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actions/isUserLogin";
// import { post } from "../../utils/request";
import Swal from "sweetalert2";
import { LoginPost } from "../../utils/request";
// import "./login.css"
const Login = (props) => {


    const login = useSelector(state => state.isUserLogin)
    const dispathLogin = useDispatch();
    const navigate = useNavigate();

    const [fields, setFields] = useState(({
        email: ``,
        password: ``,
    }))

    const setFieldValue = ({ target: { name, value } }) => {
        setFields(prev => ({
            ...prev,
            [name]: value
        }));
    }
    const handleBooking = async (auth) => {
        try {
            const result = await LoginPost(auth, '/users/login'); // Đợi post hoàn thiện

            if (result.status === "success") {
                console.log(result);
                Swal.fire({
                    icon: "success",
                    title: "Đăng nhập thành công",
                    showConfirmButton: true,
                }).then((swalResult) => {
                    if (swalResult.isConfirmed) { 
                        dispathLogin(loginUser(result, result.token));
                        // console.log(result.data.user.role)
                        if(result.data.user.role === "user"){
                            navigate('/');
                        } else if (result.data.user.role === "admin"){
                            navigate('/manager');
                        }
                        
                    }
                });
            } else {
                // console.error('Error:', error);
                Swal.fire({
                    icon: "error",
                    title: "Đăng nhập thất bại",
                    text: "Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại sau.",
                    showConfirmButton: true,
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: "error",
                title: "Đăng nhập thất bại",
                text: "Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại sau.",
                showConfirmButton: true,
            });
        }
    }
    const postLogin = () => {
        handleBooking(fields)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postLogin()
    }

    return (
        <>
            <div className="login-container" id="login">
                <div className="top">
                    <span>Bạn chưa có tài khoản?
                        <div className="sign-up-button" style={{ cursor: "pointer" }}>
                            <NavLink to="/member/sign-up">
                                Đăng ký
                            </NavLink>
                        </div></span>
                    <header>Đăng nhập</header>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input type="email"
                            className="input-field"
                            placeholder="Tài khoản hoặc email"
                            name="email"
                            onChange={setFieldValue}
                        />
                        <i className="bx bx-user"></i>
                    </div>
                    <div className="input-box">
                        <input type="password"
                            name="password"
                            className="input-field"
                            placeholder="Mật khẩu"
                            onChange={setFieldValue}
                        />
                        <i className="bx bx-lock-alt"></i>
                    </div>
                    <div className="input-box">
                        <input type="submit" className="submit" value="Đăng nhập" />
                    </div>
                    <div className="two-col">
                        <div className="one">
                            <input type="checkbox" id="login-check" />
                            <label htmlFor="login-check" style={{
                                marginTop: "2px"
                            }}>Ghi nhớ đăng nhập
                            </label>
                        </div>
                        <Link to="/" style={{
                            color: "#fff",
                            fontSize: "15px",
                            
                        }}>
                            <div className="two" style={{
                                cursor: 'pointer'
                            }}>
                                <div href="#">Về trang chủ</div>
                            </div>
                        </Link>
                        
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;