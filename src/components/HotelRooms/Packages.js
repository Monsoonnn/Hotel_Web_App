
import { useDispatch } from "react-redux";
import { addPackages } from "../../redux/actions/booking";
import { Link } from "react-router-dom";
import { formatCash } from "../../services/convert";


const Packages = (props) => {
    const { room, packageID, packageName } = props;
    const priceString = formatCash(2270000);
    const price = 2270000;
    const packages = {
        roomID: room,
        packageID: packageID,
        packageName: packageName,
        price: price,
    }
    // console.log(packages)
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

                    <Link to="confirm">
                        <div className="packages__Room__button-price" onClick={() => pickingPakages(packages)}>
                            {priceString + " VND"}  
                        </div>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Packages;