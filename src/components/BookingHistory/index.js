import { render } from "@testing-library/react";
import { Table } from "antd";
import moment from "moment";
import { useState } from "react";
import { formatCash } from "../../services/convert";
import DetailModal from "./DetailModal";

let dataScoure = [
    {
        key: '1',
        stt: 1,
        bookingcode: 'B383AA',
        bookingDate: '2024-05-19T11:11:06.455Z',
        totalPrice: 3616150,
        status: 'Đã thanh toán',
        hotelName: 'Khách sạn Hà Nội',
        checkIn: '2024-05-19T11:11:00.600Z',
        checkOut: '2024-05-19T11:11:02.800Z',
        adult: 2,
        child: 2,
        room: 2,
        roomName: 'Phòng Deluxe',
        packageName: 'Spa Pampering Package',
        price: 2000000,
        services: [
            {
                _id: '6649d32af176fa51d07282c5',
                name: 'Dịch vụ ăn uống tại phòng',
                unity: 'bữa',
                price: 250000,
                description: 'Dịch vụ cung cấp bữa ăn tại phòng theo yêu cầu khách hàng.'
            },
            {
                _id: '6649d32af176fa51d07282c7',
                name: 'Dịch vụ thuê xe',
                unity: 'ngày',
                price: 700000,
                description: 'Dịch vụ thuê xe hơi để di chuyển trong khu vực thành phố.'
            },
            {
                _id: '6649d32af176fa51d07282c6',
                name: 'Dịch vụ dọn phòng',
                unity: 'lần',
                price: 100000,
                description: 'Dịch vụ dọn dẹp phòng hàng ngày, giữ phòng luôn sạch sẽ.'
            }
        ]
    },
    {
        key: '2',
        stt: 2,
        bookingcode: 'B384BB',
        bookingDate: '2024-05-20T10:15:06.455Z',
        totalPrice: 2500000,
        status: 'Chưa thanh toán',
        hotelName: 'Khách sạn Sài Gòn',
        checkIn: '2024-05-20T10:15:00.600Z',
        checkOut: '2024-05-21T10:15:02.800Z',
        adult: 1,
        child: 0,
        room: 1,
        roomName: 'Phòng Standard',
        packageName: 'Relaxation Package',
        price: 1500000,
        services: [
            {
                _id: '6649d32af176fa51d07282c8',
                name: 'Dịch vụ spa',
                unity: 'giờ',
                price: 500000,
                description: 'Dịch vụ spa thư giãn trong 1 giờ.'
            },
            {
                _id: '6649d32af176fa51d07282c9',
                name: 'Dịch vụ ăn uống tại phòng',
                unity: 'bữa',
                price: 250000,
                description: 'Dịch vụ cung cấp bữa ăn tại phòng theo yêu cầu khách hàng.'
            }
        ]
    },
    {
        key: '3',
        stt: 3,
        bookingcode: 'B385CC',
        bookingDate: '2024-05-21T09:12:06.455Z',
        totalPrice: 4200000,
        status: 'Đã thanh toán',
        hotelName: 'Khách sạn Đà Nẵng',
        checkIn: '2024-05-21T09:12:00.600Z',
        checkOut: '2024-05-22T09:12:02.800Z',
        adult: 3,
        child: 1,
        room: 2,
        roomName: 'Phòng Suite',
        packageName: 'Family Fun Package',
        price: 3000000,
        services: [
            {
                _id: '6649d32af176fa51d07282d5',
                name: 'Dịch vụ hồ bơi',
                unity: 'giờ',
                price: 100000,
                description: 'Dịch vụ sử dụng hồ bơi trong 1 giờ.'
            },
            {
                _id: '6649d32af176fa51d07282d6',
                name: 'Dịch vụ thuê xe',
                unity: 'ngày',
                price: 700000,
                description: 'Dịch vụ thuê xe hơi để di chuyển trong khu vực thành phố.'
            },
            {
                _id: '6649d32af176fa51d07282d7',
                name: 'Dịch vụ ăn uống tại phòng',
                unity: 'bữa',
                price: 250000,
                description: 'Dịch vụ cung cấp bữa ăn tại phòng theo yêu cầu khách hàng.'
            }
        ]
    },
    {
        key: '4',
        stt: 4,
        bookingcode: 'B386DD',
        bookingDate: '2024-05-22T08:11:06.455Z',
        totalPrice: 5200000,
        status: 'Đã thanh toán',
        hotelName: 'Khách sạn Huế',
        checkIn: '2024-05-22T08:11:00.600Z',
        checkOut: '2024-05-23T08:11:02.800Z',
        adult: 4,
        child: 2,
        room: 3,
        roomName: 'Phòng Family',
        packageName: 'Extended Stay Package',
        price: 4000000,
        services: [
            {
                _id: '6649d32af176fa51d07282e5',
                name: 'Dịch vụ thuê xe đạp',
                unity: 'ngày',
                price: 50000,
                description: 'Dịch vụ thuê xe đạp để tham quan quanh khu vực.'
            },
            {
                _id: '6649d32af176fa51d07282e6',
                name: 'Dịch vụ ăn uống tại phòng',
                unity: 'bữa',
                price: 250000,
                description: 'Dịch vụ cung cấp bữa ăn tại phòng theo yêu cầu khách hàng.'
            },
            {
                _id: '6649d32af176fa51d07282e7',
                name: 'Dịch vụ dọn phòng',
                unity: 'lần',
                price: 100000,
                description: 'Dịch vụ dọn dẹp phòng hàng ngày, giữ phòng luôn sạch sẽ.'
            }
        ]
    },
    {
        key: '5',
        stt: 5,
        bookingcode: 'B387EE',
        bookingDate: '2024-05-23T07:10:06.455Z',
        totalPrice: 3300000,
        status: 'Chưa thanh toán',
        hotelName: 'Khách sạn Nha Trang',
        checkIn: '2024-05-23T07:10:00.600Z',
        checkOut: '2024-05-24T07:10:02.800Z',
        adult: 2,
        child: 1,
        room: 2,
        roomName: 'Phòng Superior',
        packageName: 'Romantic Getaway Package',
        price: 2500000,
        services: [
            {
                _id: '6649d32af176fa51d07282f5',
                name: 'Dịch vụ massage',
                unity: 'giờ',
                price: 300000,
                description: 'Dịch vụ massage thư giãn trong 1 giờ.'
            },
            {
                _id: '6649d32af176fa51d07282f6',
                name: 'Dịch vụ ăn uống tại phòng',
                unity: 'bữa',
                price: 250000,
                description: 'Dịch vụ cung cấp bữa ăn tại phòng theo yêu cầu khách hàng.'
            },
            {
                _id: '6649d32af176fa51d07282f7',
                name: 'Dịch vụ dọn phòng',
                unity: 'lần',
                price: 100000,
                description: 'Dịch vụ dọn dẹp phòng hàng ngày, giữ phòng luôn sạch sẽ.'
            }
        ]
    },
];

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
        width: '20%',
        sorter: (a, b) => a.stt - b.stt,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Mã booking',
        dataIndex: 'bookingcode',
        key: 'bookingcode',
        width: '20%',  
    },
    {
        title: 'Ngày đặt',
        dataIndex: 'bookingDate',
        key: 'bookingDate',
        width: '20%', 
        render: (text) => moment(text).format("DD/MM/YYYY")
    },
    {
        title: 'Thanh toán',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
        render: (text) => formatCash(text),
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        width: "20%"
    },
    {
        title: 'Hành động',
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
              <DetailModal 
                item={record}
              />
            </div>
          </div>
        </>
      ),
    },
];


const BookingHistory = () => {

    const [top, setTop] = useState('none');
    const [bottom, setBottom] = useState('bottomCenter');

    return (
        <>

            <div className="booking__container" style={{
                padding: "20px 10px"
            }}>
                <div className="bookingHis__title" style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "20px"
                }}>
                    Lịch sử đặt phòng
                </div>
                <Table columns={columns} dataSource={dataScoure}
                    pagination={{
                        position: [top, bottom],
                    }}
                />
            </div>

        </>

    )
}
export default BookingHistory;