
import { Col, Form, Row, Button, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { Link } from "react-router-dom";
import { DatePicker, Space, InputNumber, AutoComplete } from 'antd';
import HeaderAll from "../../components/HeaderAll";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const { RangePicker } = DatePicker;
const onFinish = (values) => {
    <Link to={"rever"} />
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const layout = {
    name: "careerForm",
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
        value: 'Tất cả',
    },
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
const Career = () => {

    const message = "Quý khách có thể xem tại Trang chủ"

    return (
        <>
            <>
            <HeaderAll></HeaderAll>
           <Header></Header>
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
                            Explore a career at LOTTE HOTELS & RESORTS
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
                                label="Vui lòng nhập cụm từ tìm kiếm"
                                name="searchterm"
                                style={{
                                    backgroundColor: "#fff",
                                    marginBottom: "0px",
                                    padding: "20px 10px",

                                }}

                            >
                                <Input placeholder="Nhập cụm từ tìm kiếm" style={{
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
            <Footer></Footer>
            </>
    )
}

export default Career;