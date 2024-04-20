
import { Col, Form, Row, Button, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { Link } from "react-router-dom";
import { DatePicker, Space, InputNumber, AutoComplete } from 'antd';
import { Header } from 'antd/es/layout/layout';
import "./reservation.css"




const { RangePicker } = DatePicker;
const onFinish = (values) => {
    <Link to={"rever"} />
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
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
const options = [
    {
        value: 'Khách sạn Hà Nội',
    },
    {
        value: 'Khách sạn Sài gòn',
    },
    {
        value: 'Khách sạn Đà Nẵng',
    },
];
const Reservation = () => {

    const message = "Quý khách có thể xem tại Trang của tôi > Lịch sử đặt phòng."

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
                                label="Khách sạn "
                                name="hotel"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input hotel name!',
                                    },
                                ]}
                                style={{
                                    backgroundColor: "#fff",
                                    marginBottom: "0px",
                                    padding: "20px 10px",

                                }}

                            >
                                <AutoComplete
                                    options={options}
                                    style={{
                                        minWidth: "280px",
                                        maxWidth: "680px",
                                    }}
                                    placeholder="Nhập địa điểm"
                                    filterOption={(inputValue, option) =>
                                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                    }
                                />
                            </FormItem>
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

                            <FormItem
                                label="Họ và tên"
                                name="name"
                                style={{
                                    backgroundColor: "#fff",
                                    padding: "20px 10px"
                                }}

                            >
                                <Input placeholder="Tên người đặt phòng" style={{
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