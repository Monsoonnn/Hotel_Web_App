import Sider from "../../components/Sider";


const LayoutManager = () => {
    return (
        <>
        
        <div className="manager" style={{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <div className="left" style={{
                width: "15%"
            }}>
                <Sider/>
            </div>
            <div className="right" style={{
                width: "85%"
            }}>
                Đây là phần bên phải cho các trang quản lí
            </div>
        </div>

        
        </>

    )
}

export default LayoutManager;