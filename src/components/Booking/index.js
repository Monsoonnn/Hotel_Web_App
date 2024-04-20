
import FormItem from "antd/es/form/FormItem";
import "./booking.css"

import { Button, Form, Input, Radio } from 'antd';
import { DatePicker, Space, Row, Col, InputNumber, AutoComplete } from 'antd';
import { useState } from "react";
import { Link } from "react-router-dom";

const { RangePicker } = DatePicker;

const onFinish = (values) => {
    <Link to={"rever"}/>
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

const Booking = () => {

    return (
        <>
            <Row justify="center">
                <Col span={20}
                    style={{
                        padding: "20px 0px",
                    }
                    }
                >
                    <Form
                        {...layout}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        variant="filled"
                        style={{
                            margin: "0px 20px",
                        }}
                    >
                        <FormItem
                            label="Khách sạn hoặc thành phố"
                            name="hotel"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input hotel your want stay!',
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
                                    maxWidth: "200px",
                                }}
                                placeholder="Nhập địa điểm"
                                filterOption={(inputValue, option) =>
                                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                            />
                        </FormItem>
                        <FormItem
                            label="Ngày nhận phòng"
                            name="checkIn"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input check in date!',
                                },
                            ]}
                            style={{
                                backgroundColor: "#fff",
                                marginBottom: "0px",
                                padding: "20px 10px"
                               
                            }}
                        >
                            <DatePicker renderExtraFooter={() => 'extra footer'} 
                            />
                        </FormItem>
                        <FormItem
                            label="Ngày trả phòng"
                            name="checkOut"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input check out date !',
                                },
                            ]}
                            style={{
                                backgroundColor: "#fff",
                                marginBottom: "0px",
                                padding: "20px 10px"
                            }}
                        >
                            <DatePicker renderExtraFooter={() => 'extra footer'}  style={{
                        
                                }}/>
                        </FormItem>
                        <FormItem
                            label="Số lượng phòng"
                            name="numberRoom"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input number of room you want!',
                                },
                            ]}
                            style={{
                                backgroundColor: "#fff",
                                marginBottom: "0px",
                                padding: "20px 10px"
                            }}

                        >
                            <InputNumber min={1} max={10} style={{
                                    
                                }}/>
                        </FormItem>
                        <FormItem
                            label="Người lớn"
                            name="numberAdult"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input number of adult!',
                                },
                            ]}
                            style={{
                                backgroundColor: "#fff",
                                marginBottom: "0px",
                                padding: "20px 10px"
                            }}

                        >
                            <InputNumber min={1} max={10} style={{
                               
                            }}/>
                        </FormItem>
                        <FormItem
                            label="Trẻ nhỏ"
                            name="numberChild"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input number of child!',
                                },
                            ]}
                            style={{
                                backgroundColor: "#fff",
                                marginBottom: "0px",
                                padding: "20px 10px"
                            }}

                        >
                            <InputNumber min={1} max={10} style={{
                                   
                                }}/>
                        </FormItem>
                        <FormItem
                            label="Mã khuyến mãi"
                            name="offset"
                            style={{
                                backgroundColor: "#fff",
                                padding: "20px 10px"
                            }}

                        >
                            <Input placeholder="Mã khuyến mãi"  style={{
                                      maxWidth: "200px",
                            }}/>
                        </FormItem>
                        <Form.Item
                            wrapperCol={{
                                xs: {
                                    offset: 0,
                                    span: 24,
                                },
                                sm: {
                                    offset: 0,
                                    span: 24,
                                },
                                
                            }}
                        >
                            <Button type="primary" htmlType="submit"
                                style={{
                                    margin: "0px",
                                    minWidth: 320,
                                }}
                            >
                               Tìm kiếm
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )

}

export default Booking;