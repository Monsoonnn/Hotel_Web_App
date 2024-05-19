
import { Col, Form, Row, Button, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { DatePicker, Table, AutoComplete } from 'antd';
import HeaderAll from "../../components/HeaderAll";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React, { useEffect, useState } from 'react';
import { get } from '../../utils/request';


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


const columns = [
    {
        title: 'Số thứ tự',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Tên chuỗi',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Vị trí',
        dataIndex: 'position',
        key: 'position',
    },
    {
        title: 'Thời gian',
        dataIndex: 'time',
        key: 'time',
    },
];
const dataScoure = [
    {
        key: '1',
        number: '1',
        name: 'Khách sạn Hà Nội',
        position: 'Thực tập',
        time: 'Từ 12/6 đến 10/7',
    },
    {
        key: '2',
        number: '2',
        name: 'Khách sạn Đà Nẵng',
        position: 'Thực tập',
        time: 'Từ 12/6 đến 10/7',
    },
    {
        key: '3',
        number: '3',
        name: 'Khách sạn Sài Gòn',
        position: 'Thực tập',
        time: 'Từ 12/6 đến 10/7',
    },
];


const Career = () => {

    const [data, setData] = useState(dataScoure);

    const [listhotels, setlisthotels] = useState([])

    const [options, setOptions] = useState([])

    const [top, setTop] = useState('none');
    const [bottom, setBottom] = useState('bottomCenter');

    const onFinish = (values) => {
       setData(dataScoure.filter((item) => { return item.name.toLowerCase().includes(values.hotel.toLowerCase())}))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        const fetchAPI = async () =>{
            const result = await get("/hotels");
            setlisthotels(result.data.hotels);
            setOptions(result.data.hotels.map((item) => ({ value: `${item.name}` })))
        }
        fetchAPI()
    },[])

    return (
        <>
            <>
            </>

            <div className='container'>
                <div className="findReservation">
                    <Row>
                        <Col lg={24}>
                            <div className="Career__title" style={{
                                textAlign: "center",
                                fontSize: "32px",
                                fontWeight: "400",
                                padding: "200px 0px",
                                paddingBottom: "50px",
                            }}>
                                Khám phá cơ hội nghề nghiệp
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
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        position: [top, bottom],
                    }}
                />
            </div>

        </>
    )
}

export default Career;