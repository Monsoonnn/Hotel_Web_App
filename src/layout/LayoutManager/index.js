import { Outlet } from "react-router-dom";
import Sider from "../../components/Sider";


const LayoutManager = () => {
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