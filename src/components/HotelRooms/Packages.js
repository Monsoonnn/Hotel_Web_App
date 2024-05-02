
import { useDispatch } from "react-redux";
import { addPackages } from "../../redux/actions/cart";
const Packages = (props) => {
    const {room, packagesID} = props;
    const price = "2.270.000 VND"
    const packages = {
        roomID: room,
        packagesID: packagesID,
        price: price,
    }
    const dispatchBooking = useDispatch();
    const pickingPakages = (packages) => {
        dispatchBooking(addPackages(packages))
    }
    
    return (
        <>
            <div className="Room__packages col-12">
                    <div className="packages__rateOff col-sm-1 col-1">
                        <p>40%</p>
                    </div>
                    <div className="package__Room col-sm-11 col-11">
                        <div className="package__Room__name">
                            FLASH SALES - STUNNING HOLIDAY
                        </div>
                        <div className="packages__Room__desc">
                            Dành cho thành viên của hệ thống
                        </div>
                        <div className="packages__Room__button-price" onClick={() => pickingPakages(packages)}>
                           {price}
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Packages;