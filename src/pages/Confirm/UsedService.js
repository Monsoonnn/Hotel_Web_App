import { deleteServie } from "../../redux/actions/booking";
import { formatCash } from "../../services/convert"
import { useDispatch, useSelector } from "react-redux";
import { Button, Flex, Tooltip } from 'antd';
const UsedService = (props) => {

    const { item } = props
    const dispatchBooking = useDispatch();
    const deleteItem = () => {
        dispatchBooking(deleteServie(item));
    }
    return (
        <>
            <div className="usedService" style={{
                    display: "flex",
                    marginRight: "20px",
                    marginBottom: "10px",
                   justifyContent: "space-between"
                }}>
                <span style={{ fontSize: "14px", fontWeight: "600", marginRight: "20px" }}>{item.name}</span>
                <span style={{
                    marginRight: "10px"
                }}>{formatCash(item.price) + " VND"}</span>
                <Button type="primary" style={{
                    margin: "0px"
                }}
                    onClick={deleteItem}
                >
                    <span style={{ fontSize: "14px" }}>
                        Xóa
                    </span>
                </Button>
            </div>
        </>
    )
}

export default UsedService