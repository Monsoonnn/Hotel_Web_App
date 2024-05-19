
import { Col, Form, Row, Button, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { Link } from "react-router-dom";
import { DatePicker, Space, InputNumber, AutoComplete } from 'antd';
import { Header } from 'antd/es/layout/layout';
import "./reservation.css"
import { useState } from 'react';
import Swal from 'sweetalert2';
import { get } from '../../utils/request';
import { convertToDateString, formatCash } from '../../services/convert';




const { RangePicker } = DatePicker;


const layout = {
    name: "bookingForm",
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 10,
        },
        lg: {
            span: 8,
        },
        xl: {
            span: 6,
        }
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
        lg: {
            span: 12,
        },
        xl: {
            span: 18,
        }
    },
};
const Reservation = () => {

    const message = "Quý khách có thể xem tại Trang của tôi > Lịch sử đặt phòng."
    const [bookingData, setBookingData] = useState([])
    const [hotelName, setHotel] = useState();
    const [roomName, setRoom] = useState();
    const [packageName, setPackage] = useState();


    const getHotel = async (id) => {
        const result = await get('/hotels/' + id);
        setHotel(result.data.hotel.name);
    }

    const getRoom = async (id) => {
        const result = await get('/rooms/' + id);
        setRoom(result.data.room.name);
    }
    const getPackage = async (id) => {
        const result = await get('/packages/' + id);
        setPackage(result.data.package.name);
    }



    const getBooking = async (id) => {
        try {
            const result = await get('/bookings?bookingCode=' + id);
            setBookingData(result.data.data);
            const hotel = getHotel(result.data.data[0].hotel)
            const room = getRoom(result.data.data[0].roomID)
            const pack = getPackage(result.data.data[0].packageId)
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: "error",
                title: "Không tìm thấy",
                text: "Có lỗi xảy ra khi tìm kiếm. Vui lòng thử lại sau.",
                showConfirmButton: true,
            });
        }

    }

    const onFinish = async (values) => {
        const bookingResult = await getBooking(values.idBooking);
    };
    const onFinishFailed = (errorInfo) => {

    };

    return (
        <>
            <>

            </>
            <div className="findReservation">
                <Row>
                    <Col lg={24}>
                        <div className="findReservation__title" style={{
                            textAlign: "center",
                            fontSize: "32px",
                            fontWeight: "400",
                            padding: "200px 0px",
                            paddingBottom: "50px",
                        }}>
                            TÌM KIẾM ĐẶT PHÒNG KHÔNG PHẢI HỘI VIÊN
                        </div>
                    </Col>
                    <Col lg={24}>
                        <Form
                            {...layout}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            variant="filled"
                            style={{
                                margin: "0px 20px",
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                            }}
                        >
                            <FormItem
                                label="Mã đặt phòng"
                                name="idBooking"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input id booking!',
                                    },
                                ]}
                                style={{
                                    backgroundColor: "#fff",
                                    marginBottom: "0px",
                                    padding: "20px 10px",

                                }}

                            >
                                <Input placeholder="Nhập mã đặt phòng" style={{
                                    minWidth: "280px",
                                    maxWidth: "680px",
                                }} />
                            </FormItem>
                            <Form.Item
                                wrapperCol={{
                                    xs: {
                                        offset: 0,
                                        span: 24,
                                    },
                                    sm: {
                                        offset: 6,
                                        span: 18,
                                    },
                                    lg: {
                                        offset: 10,
                                        span: 14,
                                    },
                                    xl: {
                                        offset: 6,
                                        span: 18,
                                    }

                                }}

                            >
                                <Button type="primary" htmlType="submit"
                                    style={{
                                        margin: "0px 32px",
                                        backgroundColor: "#685F51",
                                    }}
                                >
                                    <span style={{
                                        fontSize: "14px",
                                    }}>Tìm kiếm
                                    </span>
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col lg={24}>
                        {bookingData.length > 0 && (
                            <div className='bookingInfomation' style={{
                                maxWidth: "500px",
                                margin: "0 auto"
                            }}>
                                <div className='booking-box' style={{
                                    textAlign: "center"
                                }}>
                                    <p style={{
                                        fontSize: "18px",
                                        fontWeight: "500",
                                        padding: "20px 0px",
                                        paddingBottom: "10px",
                                    }}>{`Thông tin đặt phòng: ${bookingData[0].bookingCode}`}</p>
                                    <p>{`Thời điểm đặt: ${convertToDateString(bookingData[0].bookingDate)}`}</p>
                                    <p>{`Khách sạn đã đặt: ${hotelName}`}</p>
                                    <p>{`Số lượng người lớn: ${bookingData[0].adult} người`}</p>
                                    <p>{`Số lượng trẻ con: ${bookingData[0].child} bé`}</p>
                                    <p>{`Loại phòng đã đặt: ${roomName}`}</p>
                                    <p>{`Gói khuyến mãi phòng đã đặt: ${packageName}`}</p>
                                    <p>{`Số lượng phòng đặt: ${bookingData[0].room} phòng`}</p>
                                    <p>{`Danh sách dịch vụ đã đặt: `}</p>
                                    {bookingData[0].services.map((item) => {
                                        return <p key={item.name}>{`+ ${item.name}`}</p>;
                                    })}
                                    <p>{`Tổng tiền thanh toán: ${formatCash(bookingData[0].totalPrice.toString())} VND`}</p>
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
            </div>

            <div className='question'>
                <Row>
                    <Col lg={24}>
                        <div className='question__bookingID'>
                            <div className='question__about'>
                                Nếu quý khách không thể tìm thấy mã số đặt phòng, hãy liên hệ trực tiếp với Trung tâm đặt phòng
                            </div>
                            <div className='question__link'>
                                <Link>
                                    Trung tâm đặt phòng & Thông tin liên hệ
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={24}>
                        <div className='question__bookingID'>
                            <div className='question__about'>
                                Khi quý khách đặt phòng, trọn gói hoặc nhà hàng với tư cách là hội viên Rewards
                                <br></br>
                                {message}
                            </div>
                            <div className='question__link'>
                                <Link to="/member">
                                    Đăng nhập
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Reservation;