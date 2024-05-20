
import React, { useEffect, useId, useState } from 'react';
import { Table, Input, Button, Modal, Form, DatePicker, Select } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import FormItem from "antd/es/form/FormItem";
import { TableToDateString, formatCash } from '../../services/convert';
import { get } from '../../utils/request';
import moment from 'moment';
import { isVisible } from '@testing-library/user-event/dist/utils';
import Swal from 'sweetalert2';
import ModalServiceEdit from './ModalEdit';
import ModalServiceCreate from './ModalCreate';
const { RangePicker } = DatePicker;

const { Search } = Input;
const { Option } = Select;

const ServicesManagement = () => {

  const [rooms, setRooms] = useState([]);
  const [filteredRoom, setfilteredRoom] = useState(rooms);
  const [top, setTop] = useState('none');
  const [bottom, setBottom] = useState('bottomCenter');
  const id = useId();


  const handleSearch = (value) => {
    const filtered = rooms.filter(s => s.name.toLowerCase().includes(value.toLowerCase()));
    setfilteredRoom(filtered);
  };
  const handleAdd = (value) => {
    const newClients = [
      ...rooms,
      value
    ]   
    // console.log(newStaffs)
    setRooms(newClients)
    setfilteredRoom(newClients)
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
      title: 'Tên dịch vụ',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Đơn vị',
      dataIndex: 'unity',
      key: 'unity',
    },
    {
        title: 'Giá dịch vụ (VND)',
        dataIndex: 'price',
        key: 'price',
        render: (text) => formatCash(text),
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
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
              <ModalServiceEdit
                initialValues={record}
                update={updateStaff}
              />
            </div>
            <Button
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record.key)}
              danger
              style={{
                width: "32px",
                height: "32px",
                margin: "0px"
              }}
            />
          </div>
        </>
      ),
    },
  ];

  const handleDelete = (key) => {
    Swal.fire({
      icon: "error",
      title: "Bạn có chắc chắn muốn xóa không",
      text: "Không thể khôi phục dữ liệu khi đã xóa ?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then((swalResult) => {
      if (swalResult.isConfirmed) {
        const newRooms = rooms.filter(s => s.key !== key).map((item, index) => {
          return {
            ...item,
            stt: index+1,
          }
        });
        setRooms(newRooms);
        setfilteredRoom(newRooms);
      }
    });
    
  };

  const updateStaff = (values) => {
    // console.log(values)
    const newRooms = rooms.map((item) => (item.stt === values.stt ? { ...values } : item))
    setRooms(newRooms);
    setfilteredRoom(newRooms);
  }

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await get("/services");
      const newRooms = result.data.services.map((item, index) => ({
        key: `${item._id}`,
        stt: `${index + 1}`,
        name: `${item.name}`,
        unity: `${item.unity}`,
        price: `${item.price}`,
        description: `${item.description}`,
      }))
      // console.log(newStaffs)
      setRooms(newRooms);
      setfilteredRoom(newRooms);
      // dataScoure = data
    }
    fetchAPI()
  }, [])



  return (

    <div>
      <div className="List__title" style={{
        textAlign: "center",
        fontSize: "32px",
        fontWeight: "400",
        padding: "30px 0px",
        paddingBottom: "50px",
        position: "relative",
      }}>
        Danh sách dịch vụ khách sạn
      </div>

      <Search placeholder="Tìm kiếm khách hàng" onSearch={handleSearch}
        style={{
          width: 300,
          marginTop: 20,
          marginLeft: 30,
          marginBottom: 20,
          height: 45
        }}
      />

      <ModalServiceCreate
        create={handleAdd}
        length={rooms.length}
        // initdata={[]}
      />

      <Table className="staff-management-table" style={{
        marginLeft: 30,
      }} columns={columns} dataSource={filteredRoom}
        pagination={{
          position: [top, bottom],
        }}
        rowKey="id"
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              // console.log(record)
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
  );
};



export default ServicesManagement;
