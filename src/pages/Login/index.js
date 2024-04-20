
import { useState } from "react";
import "./login.css"
import Register from "../../components/Register";
import Login from "../../components/Login";
import { Outlet } from "react-router-dom";
const LoginPage = () => {


    return (
        <>
            <div className="wrapper">
                <div className="form-box">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}
export default LoginPage;