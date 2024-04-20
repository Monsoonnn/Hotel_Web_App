import { Link, NavLink } from "react-router-dom";

const Register = (props) => {
    const {swap} = props;
    return (
        <>
            <div className="register-container" id="register">
                <div className="top">
                    <span>Have an account? 
                        <div className="login-button" style={{cursor: "pointer"}}
                        >   
                            <Link to="/member">
                                Login
                            </Link>
                        </div></span>
                    <header>Sign Up</header>
                </div>
                <div className="two-forms">
                    <div className="input-box">
                        <input type="text" className="input-field" placeholder="Firstname" />
                        <i className="bx bx-user"></i>
                    </div>
                    <div className="input-box">
                        <input type="text" className="input-field" placeholder="Lastname" />
                        <i className="bx bx-user"></i>
                    </div>
                </div>
                <div className="input-box">
                    <input type="text" className="input-field" placeholder="Email" />
                    <i className="bx bx-envelope"></i>
                </div>
                <div className="input-box">
                    <input type="password" className="input-field" placeholder="Password" />
                    <i className="bx bx-lock-alt"></i>
                </div>
                <div className="input-box">
                    <input type="submit" className="submit" value="Register" />
                </div>
                <div className="two-col">
                    <div className="one">
                        <input type="checkbox" id="register-check" />
                        <label htmlFor="register-check"> Remember Me</label>
                    </div>
                    <div className="two">
                        <label><div href="#">Terms & conditions</div></label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;