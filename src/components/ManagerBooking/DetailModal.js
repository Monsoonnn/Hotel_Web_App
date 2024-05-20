import { Table, Input, Button, Modal, Form, DatePicker, Select } from 'antd';
// import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import FormItem from "antd/es/form/FormItem";
import { EditOutlined, MoreOutlined } from "@ant-design/icons";
import moment from 'moment';
import { useState } from 'react';
import { convertToDateString, formatCash } from '../../services/convert';
import { get } from '../../utils/request';
const { Search } = Input;
const { Option } = Select;

const DetailModal = (props) => {

    const { item, update } = props;
    const [IsModalOpen, setIsModalOpen] = useState(false);
    const [hotelName, setHotel] = useState();
    const [roomName, setRoom] = useState();
    const [packageName, setPackage] = useState();
    
    // const [bookingData, setBookingData] = useState([])
    // const [hotelName, setHotel] = useState();
    // const [roomName, setRoom] = useState();
    // const [packageName, setPackage] = useState();


    if (item) {
        item.bookingDate = moment(item.bookingDate, "YYYY/MM/DD")
    }
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
    // console.log(item);
    const handleShowModal = () => {
        setIsModalOpen(true);
        const hotel = getHotel(item.hotel)
        const room = getRoom(item.roomID)
        const pack = getPackage(item.packageId)
    }

    const handleModalCancel = () => {
        setIsModalOpen(false);
    }

   
    
    return (
        <>
            <Button
                title='Xem chi tiết'
                size="small"
                icon={<MoreOutlined />}
                onClick={handleShowModal}
                style={{
                    width: "32px",
                    height: "32px",
                    margin: "0px",
                    marginRight: "5px",
                }}

            />
            <Modal
                title={'Chi tiết booking'}
                open={IsModalOpen}
                onCancel={handleModalCancel}
                footer={null}
                style={{ maxWidth: '80%', margin: 'auto' }}
                // maskClosable={false}
            >
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
                        }}>{`Thông tin đặt phòng: ${item.bookingCode}`}</p>
                        <p>{`Thời điểm đặt: ${convertToDateString(item.bookingDate)}`}</p>
                        <p>{`Thời điểm check-in: ${convertToDateString(item.checkIn)}`}</p>
                        <p>{`Thời điểm check-out: ${convertToDateString(item.checkOut)}`}</p>
                        <p>{`Khách sạn đã đặt: ${hotelName}`}</p>
                        <p>{`Số lượng người lớn: ${item.adult} người`}</p>
                        <p>{`Số lượng trẻ con: ${item.child} bé`}</p>
                        <p>{`Loại phòng đã đặt: ${roomName}`}</p>
                        <p>{`Gói khuyến mãi phòng đã đặt: ${packageName}`}</p>
                        <p>{`Số lượng phòng đặt: ${item.room} phòng`}</p>
                        <p>{`Danh sách dịch vụ đã đặt: `}</p>
                        {item.services.map((item) => {
                            return <p key={item.name}>{`+ ${item.name}`}</p>;
                        })}
                        <p>{`Tổng tiền thanh toán: ${formatCash(item.totalPrice.toString())} VND`}</p>
                    </div>
                </div>
            </Modal>

        </>


    );
};

export default DetailModal;