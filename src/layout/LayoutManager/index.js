import { Outlet, useNavigate } from "react-router-dom";
import Sider from "../../components/Sider";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
const LayoutManager = () => {


    const login = useSelector(state => state.isUserLogin)

    // const dispathLogin = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(login.length === 0 && login.role !== 'admin'){
            navigate('/')
        }
    },[])

    return (
        <>
        
        <div className="manager" style={{
            display: "flex",
            justifyContent: "space-between",
            height: "120vh"
        }}>
            <div className="left" style={{
                width: "15%"
            }}>
                <Sider/>
            </div>
            <div className="right" style={{
                width: "85%",
                position: "relative"
            }}>
                <Outlet/>
            </div>
        </div>

        
        </>

    )
}

export default LayoutManager;