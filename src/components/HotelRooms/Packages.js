
import { useDispatch } from "react-redux";
import { addPackages } from "../../redux/actions/booking";
import { Link, useNavigate } from "react-router-dom";
import { formatCash } from "../../services/convert";
import Swal from "sweetalert2";


const Packages = (props) => {
    const { room, packageID, packageName, packagePrice, desc } = props;
    const priceString = formatCash(packagePrice);
    const price = packagePrice;
    const packages = {
        roomID: room,
        packageID: packageID,
        packageName: packageName,
        price: price,
    }
    console.log(packages)
    const navigate = useNavigate();
    const dispatchBooking = useDispatch();
    const pickingPakages = (packages) => {
        Swal.fire({
            icon: "question",
            text: "Bạn muốn đặt gói phòng này chứ ?",
            showConfirmButton: true,
            showDenyButton: true,
          }).then((result) => {
            if (result.isConfirmed) {
                dispatchBooking(addPackages(packages))
                navigate('confirm')
            } 
          });;
       
    }

    return (
        <>
            <div className="Room__packages col-12">
                <div className="packages__rateOff col-sm-1 col-1">
                    <p>40%</p>
                </div>
                <div className="package__Room col-sm-11 col-11">
                    <div className="package__Room__name">
                        {packageName}
                    </div>
                    <div className="packages__Room__desc">
                       {desc}
                    </div>
                    <div className="packages__Room__button-price" onClick={() => pickingPakages(packages)}>
                            {priceString + " VND"}  
                        </div>

                </div>
            </div>
        </>
    )
}

export default Packages;