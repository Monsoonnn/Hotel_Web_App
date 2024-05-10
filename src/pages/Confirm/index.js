import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../services/getProduct";

import { dateConverter, formatCash } from "../../services/convert";
import { get } from "../../utils/request";
import ItemServices from "./ItemServices";
import UsedService from "./UsedService";
import { useNavigate } from "react-router-dom";
import { confirmBooking } from "../../redux/actions/booking";


const Confirm = () => {

    const [booking, setBooking] = useState([]);

    const [listservices, setListServies] = useState([]);

    const dispatchBooking = useDispatch();

    const navigate = useNavigate();

    const book = useSelector(state => state.bookingReducer);
    // console.log(book)
    const [hotel, setHotel] = useState();

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await get("/hotels/" + book.hotel);
            setHotel(result.data.hotel)
            const services = await get("/services");
            setListServies(services.data.services);
        }
        if (book.length !== 0) {
            fetchAPI()
        } else {
            navigate("/")
        }



    }, [])

    const days = dateConverter(book.ci, book.co);
    const tax = 566150;

    const roomPrice = days * book.price;

    const hasServices = 'services' in book;

    var totalPrice = roomPrice + tax;
    if (hasServices) {
        for (const item of book.services) {
            totalPrice += item.price;
        }
    }

    const confirm = () => {
        navigate('/')
        dispatchBooking(confirmBooking(totalPrice))
    }

    return (
        <>
            {hotel && (
                <div className="CB" style={{
                    paddingTop: "100px"
                }}>
                    <div className="container" style={{}}>
                        <div className="CB__hotelName col-12" style={{ fontSize: "20px", fontWeight: "600" }} >
                            {hotel.name}
                        </div>
                        <div className="CB__Room col-12" style={{ fontSize: "24px", fontWeight: "600" }}>
                            {book.roomID}
                        </div>
                        <hr style={{ marginTop: "20px" }}></hr>
                        <div className="CB__title col-12" style={{ margin: "20px 0px", fontSize: "20px", fontWeight: "600" }}>
                            Tùy chọn đặt phòng
                        </div>
                        <div className="CB__options col-12" style={{
                            display: "flex",
                            flexWrap: "wrap",
                            padding: "20px",
                            border: "1px solid #000",
                            marginBottom: "0px"
                        }}>
                            <div className="CB__rooms col-xl-6 col-md-12 col-12"
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    padding: "0px 5px",

                                }}
                            >
                                <div className="CB__room col-12" style={{ margin: "10px 0px", fontSize: "18px", fontWeight: "600" }}>
                                    Số lượng phòng {book.Room}
                                </div>
                                <div className="CB__client col-12" style={{ margin: "10px 0px", fontSize: "18px", fontWeight: "600" }}>
                                    Số lượng khách: {book.Adult} người lớn, {book.Child} trẻ em
                                </div>
                                <div className="CB__services col-12">
                                    <p style={{ margin: "10px 0px", fontSize: "18px", fontWeight: "600" }}> Danh sách dịch vụ : </p>
                                    {listservices.length > 0 && (
                                        <div className="CB__listServices">
                                            {listservices.map((item) => <ItemServices key={item.id} item={item} />)}
                                        </div>
                                    )}
                                </div>
                                <div className="CB__note col-12">
                                    <div className="note__title">
                                        <p style={{ margin: "10px 0px", fontSize: "18px", fontWeight: "600" }}>Yêu cầu đặc biệt</p>
                                        <p>Để đặt dịch vụ đưa đón tại sân bay, quý khách vui lòng liên hệ theo số điện thoại
                                            hoặc qua email .</p>
                                        <p>Limousine (4 chỗ): 1.527.500 VNĐ/một chiều</p>
                                        <p>Limousine (7 chỗ): 1.762.500 VNĐ/một chiều</p>
                                        <p>(*) Giá trên đã bao gồm thuế giá trị gia tăng và phí phục vụ.</p>
                                    </div>
                                    <div className="note_detail">
                                        <textarea className="note" cols={50} rows={5}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="CB__price col-xl-6 col-md-12 col-12">
                                <div className="CB__price__title" style={{ margin: "10px 0px", fontSize: "18px", fontWeight: "600" }}>
                                    Giá phòng
                                </div>
                                <div className="CB__price_date">
                                    <p> <span style={{ margin: "10px 0px", fontSize: "16px", fontWeight: "600" }}>Thời gian lưu trú: </span> {book.ci.$d.toDateString()} - {book.co.$d.toDateString()} </p>
                                    <p>
                                        <span style={{ margin: "10px 0px", fontSize: "16px", fontWeight: "600" }}>Tổng giá phòng: </span>
                                        <span style={{ textAlign: "right" }}>{formatCash(roomPrice)} VND</span>
                                    </p>
                                </div>
                                {hasServices && (
                                    <div className="CB__price_services">
                                        <p style={{ margin: "10px 0px", fontSize: "16px", fontWeight: "600" }}>Danh sách dịch vụ sử dụng: </p>
                                        {book.services.length > 0 && (
                                            <div className="usedService">
                                                {book.services.map((item) =>
                                                    <>
                                                        <UsedService key={item.id} item={item} />
                                                    </>
                                                )}
                                            </div>
                                        )
                                        }
                                    </div>
                                )}
                                <div className="CB__tax__title" style={{ margin: "10px 0px" }}>
                                    <span style={{ margin: "10px 0px", fontSize: "16px", fontWeight: "600" }}>Thuế và phí dịch vụ: </span>
                                    566,150 VND
                                    <hr></hr>
                                </div>
                                <div className="CB__totalPrice" style={{ marginTop: "30px" }}>
                                    <span style={{ margin: "10px 0px", fontSize: "16px", fontWeight: "600" }}>Tổng chi phí: </span>
                                    <span style={{ marginLeft: "10px", fontSize: "18px", fontWeight: "600" }}>{formatCash(totalPrice)} VND</span>

                                </div>
                                <div className="CB__confirm col-xl-12">
                                    <button style={{
                                        backgroundColor: "#FF8A00",
                                        margin: "20px auto",
                                        color: "#fff",
                                        cursor: "pointer"
                                    }}
                                    onClick={confirm}
                                    >
                                        Xác nhận
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="CB__rule col-12" style={{ margin: "50px 0px" }}>
                            <div className="CB__rule__title" style={{ fontSize: "20px", fontWeight: "600", marginBottom: "30px" }}>
                                Quy định hủy đặt phòng
                            </div>
                            <div className="CB__rule__detail">
                                Có thể hủy hoặc thay đổi đặt phòng đến 12:00 trưa (giờ Việt Nam) một ngày trước ngày nhận phòng. Nếu quý khách không đến nhận phòng vào ngày đã đặt hoặc hủy đặt phòng muộn hơn thời điểm nói trên, xin lưu ý rằng đặt phòng sẽ được coi là “Không Nhận Phòng” và phí hủy tương đương đêm lưu trú đầu tiên sẽ được cộng vào hóa đơn.
                            </div>
                        </div>
                        <div className="CB__convenience col-12" style={{ margin: "50px 0px" }}>
                            <div className="CB__convenience__title" style={{ fontSize: "20px", fontWeight: "600", marginBottom: "30px" }}>
                                Tiện nghi
                            </div>
                            <div className="CB__convenience__list">
                                <div className="CB__convenience__detail" style={{ display: "flex" }}>
                                    <div style={{ paddingRight: "10px", fontWeight: "600" }}>Chung</div>
                                    <div> TIVI LCD 32 inch / Quầy bar mini / Dép đi trong phòng / Đèn pin / Cân / Bộ kim chỉ / Dụng cụ cắt móc tay / Bảng điều khiển trong phòng / Điện thoại / Bình trà / Két sắt / Bàn làm việc văn phòng (bao gồm văn phòng phẩm) </div>
                                </div>
                                <div className="CB__convenience__detail" style={{ display: "flex" }}>
                                    <div style={{ paddingRight: "10px", fontWeight: "600" }}>Phòng tắm</div>
                                    <div> Tiện nghi phòng tắm / Bàn chải đánh răng và kem đánh răng dùng một lần / Áo choàng tắm / Dao cạo râu / Bông ngoáy tai / Túi vệ sinh / Máy sấy tóc </div>
                                </div>
                                <div className="CB__convenience__detail" style={{ display: "flex" }}>
                                    <div style={{ paddingRight: "10px", fontWeight: "600" }}>Khác</div>
                                    <div> Giỏ hoa quả chào mừng / Đồ uống chào mừng / Báo tiếng Anh / Dịch vụ đánh giày / Cuộc gọi nội vùng miễn phí / Chuyển thư và bưu thiếp miễn phí / Dịch vụ Hộp thư thoại / Nước khoáng miễn phí hàng ngày (2 chai)</div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            )}

        </>
    )


}

export default Confirm