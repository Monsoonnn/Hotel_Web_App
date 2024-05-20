import { render } from "@testing-library/react";
import { Button, Table } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { TableToDateString, formatCash } from "../../services/convert";
import DetailModal from "./DetailModal";
import { get } from "../../utils/request";
import Swal from "sweetalert2";
import { DeleteOutlined } from "@ant-design/icons";
import ModalBookingEdit from "./ModalEdit";


const BookingManagement = () => {

    const [top, setTop] = useState('none');
    const [bottom, setBottom] = useState('bottomCenter');

    const [data, setData] = useState([]);
    const [filteredData, setfilteredData] = useState(data);


    const handleSearch = (value) => {
        const filtered = data.filter(s => s.bookingCode.toLowerCase().includes(value.toLowerCase()));
        setfilteredData(filtered);
    };
    const updateData = (values) => {
        // console.log(values)
        const newStaff = data.map((item) => (item.bookingCode === values.bookingCode ? { ...values } : item))
        setData(newStaff);
        setfilteredData(newStaff);
      }
    const handleDelete = (key) => {
        Swal.fire({
            icon: "error",
            title: "Bạn có chắc chắn muốn xóa không",
            text: "Không thể khôi phục dữ liệu khi đã xóa ?",
            showConfirmButton: true,
            showDenyButton: true,
        }).then((swalResult) => {
            if (swalResult.isConfirmed) {
                const newStaff = data.filter(s => s.bookingCode !== key).map((item, index) => {
                    return {
                        ...item,
                        stt: index + 1,
                    }
                });
                setData(newStaff);
                setfilteredData(newStaff);
            }
        });

    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            sorter: (a, b) => a.stt - b.stt,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Mã booking',
            dataIndex: 'bookingCode',
            key: 'bookingCode',
        },
        {
            title: 'Ngày đặt',
            dataIndex: 'bookingDate',
            key: 'bookingDate',
            render: (text) => moment(text).format("DD/MM/YYYY")
        },
        {
            title: 'Ngày checkIn',
            dataIndex: 'checkIn',
            key: 'checkIn',
            render: (text) => moment(text).format("DD/MM/YYYY")
        },
        {
            title: 'Ngày checkOut',
            dataIndex: 'checkOut',
            key: 'checkIn',
            render: (text) => moment(text).format("DD/MM/YYYY")
        },
        {
            title: 'Thanh toán',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
            render: (text) => formatCash(text) + ` VND`,
        },
        {
            title: '',
            key: 'action',
            render: (_, record) => (
                <>
                    <div className='action' style={{
                        display: 'flex'
                    }}>
                        <div className='edit' style={{
                            marginRight: "5px"
                        }}> 

                            {/* <ModalBookingEdit
                                initialValues={record}
                                update={updateData}
                            /> */}

                            <DetailModal
                                item={record}
                            />
                            <Button
                                icon={<DeleteOutlined />}
                                onClick={() => handleDelete(record.bookingCode)}
                                danger
                                style={{
                                    width: "32px",
                                    height: "32px",
                                    margin: "0px"
                                }}
                            />
                        </div>
                    </div>
                </>
            ),
        },
    ];
    
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await get("/bookings");
            const newData = result.data.data.map((item, index) => ({
                key: `${item._id}`,
                stt: index + 1,
                bookingCode: item.bookingCode,
                bookingDate: item.bookingDate,
                checkIn: item.checkIn,
                checkOut: item.checkOut,
                hotel: item.hotel,  
                roomID: item.roomID,
                packageId: item.packageId,
                price: item.price,
                room: item.room,
                adult: item.adult,
                child: item.child,
                services: item.services,
                totalPrice: item.totalPrice
            }))
            setData(newData);
            setfilteredData(newData)
        }
        fetchAPI()

    }, [])

    // console.log(data)

    return (
        <>
            <div className="List__title" style={{
                textAlign: "center",
                fontSize: "32px",
                fontWeight: "400",
                padding: "30px 0px",
                paddingBottom: "50px",
                position: "relative",
            }}>
                Danh sách đặt phòng
            </div>
            <div className="booking__container" style={{
                padding: "20px 10px"
            }}>
                <Table columns={columns} dataSource={filteredData}
                    pagination={{
                        position: [top, bottom],
                    }}
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: (event) => {
                                console.log(record)
                            }, // click row
                            onDoubleClick: (event) => {

                            }, // double click row
                            onContextMenu: (event) => { }, // right button click row
                            onMouseEnter: (event) => { }, // mouse enter row
                            onMouseLeave: (event) => { }, // mouse leave row
                        };
                    }}
                />
            </div>

        </>

    )
}
export default BookingManagement;