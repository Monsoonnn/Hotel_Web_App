import { formatCash } from "../../services/convert";
import { useDispatch, useSelector } from "react-redux";
import { Button, Flex, Tooltip } from 'antd';
import { addServies } from "../../redux/actions/booking";
const ItemServices = (props) => {

    const {  item } = props;
    const dispatchBooking = useDispatch();
    const addServices = () => {
        dispatchBooking(addServies(item));
    }
    return (
        <>
            <div className="CB__itemService" style={{
                    display: "flex",
                    marginRight: "20px",
                    marginBottom: "10px",
                   justifyContent: "space-between"
                }}>
                    <span className="itemService" style={{ fontSize: "14px", fontWeight: "600", marginRight: "20px" }}
                    >
                        {item.name}
                    </span>
                    <span className="itemService">
                        {formatCash(item.price) + " VND"}
                    </span>
                    <Button type="primary" style={{
                        margin: "0px"
                    }}
                    onClick={addServices}
                    >
                        <span style={{ fontSize: "14px" }}>
                            Thêm
                        </span>
                    </Button>
            </div>
        </>
    )
}
export default ItemServices;