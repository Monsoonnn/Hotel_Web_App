import React, { useEffect, useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Col, Form, Row, Button, Input, Space, Table } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { DatePicker, AutoComplete } from 'antd';
import "./news.css"
import { Navigate, useNavigate } from 'react-router-dom';
import { get } from '../../utils/request';
import Swal from 'sweetalert2';
import { TableToDateString} from '../../services/convert';

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


let dataScoure = [
];

const columns = [
    {
        title: 'Số',
        dataIndex: 'id',
        key: 'id',
        width: '20%',
        sorter: (a, b) => a.id - b.id,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Khách sạn',
        dataIndex: 'hotel',
        key: 'hotel',
        width: '20%',  
    },
    {
        title: 'Nội dung',
        dataIndex: 'title',
        key: 'title',
        width: '20%',  
    },
    {
        title: 'Tệp đính kèm',
        dataIndex: 'file',
        key: 'file',
        width: '20%',  
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'date',
        key: 'date',
        width: "20%"
    },
];
const News = () => {
    const [top, setTop] = useState('none');
    const [bottom, setBottom] = useState('bottomCenter');
    const [options, setOptions] = useState([])
    const [data, setData] = useState([])
    const onFinish = (values) => {
        setData(dataScoure.filter((item) => { return item.hotel.toLowerCase().includes(values.hotel.toLowerCase())}))
     };
     const onFinishFailed = (errorInfo) => {
         console.log('Failed:', errorInfo);
     };
     
     useEffect(() => {
        const fetchAPI = async () =>{
            const result = await get("/news");
            setData(result.data.newss.map((item,index) => ({
                key: `${item._id}`,
                id:`${index + 1}`,
                hotel: `[${item.hotel}]`,
                title: `${item.title}`,
                file: `-`,
                date: `${TableToDateString(item.date)}`
            })));
            dataScoure = data
        }
        fetchAPI()
        Swal.fire({
            icon: "info",
            title: "Đang tải dữ liệu",
            showConfirmButton: false,
            timer: 5000,
        });
    },[])


    const navigate = useNavigate();
    
    return (
        <>
            <div className="news" style={{
                paddingBottom: "100px"
            }}>
                <div className="container">
                <div className="findReservation">
                    <Row>
                        <Col lg={24}>
                            <div className="Career__title" style={{
                                textAlign: "center",
                                fontSize: "40px",
                                fontWeight: "600",
                                padding: "200px 0px",
                                paddingBottom: "50px",
                            }}>
                                Tin tức
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
                                    label="Từ khóa"
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
                                        placeholder="Nhập từ khóa"
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
                    <Table columns={columns} dataSource={data}
                        pagination={{
                            position: [top, bottom],
                        }}
                        onRow={(record, rowIndex) => {
                            return {
                              onClick: (event) => {
                                navigate(record.id)
                              }, // click row
                              onDoubleClick: (event) => {
                                
                              }, // double click row
                              onContextMenu: (event) => {}, // right button click row
                              onMouseEnter: (event) => {}, // mouse enter row
                              onMouseLeave: (event) => {}, // mouse leave row
                            };
                    }}
                     />
                </div>
            </div>

        </>
    )
}

export default News;