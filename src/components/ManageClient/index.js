
import React, { useEffect, useId, useState } from 'react';
import { Table, Input, Button, Modal, Form, DatePicker, Select } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { get } from '../../utils/request';
import Swal from 'sweetalert2';
import ModalClientEdit from './ModalEdit';
import ModalClientCreate from './ModalCreate';
const { RangePicker } = DatePicker;

const { Search } = Input;
const { Option } = Select;

const ClientManagement = () => {

  const [client, setClient] = useState([]);
  const [filteredClient, setFilteredClient] = useState(client);
  const [top, setTop] = useState('none');
  const [bottom, setBottom] = useState('bottomCenter');
  const id = useId();


  const handleSearch = (value) => {
    const filtered = client.filter(s => s.fullName.toLowerCase().includes(value.toLowerCase()));
    setFilteredClient(filtered);
  };
  const handleAdd = (value) => {
    const newClients = [
      ...client,
      value
    ]   
    // console.log(newClients)
    setClient(newClients)
    setFilteredClient(newClients)
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
      title: 'Họ và tên',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
      key: 'note',
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
              <ModalClientEdit
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
        const newClient = client.filter(s => s.key !== key).map((item, index) => {
          return {
            ...item,
            stt: index+1,
          }
        });
        setClient(newClient);
        setFilteredClient(newClient);
      }
    });
    
  };

  const updateStaff = (values) => {
    console.log(values)
    const newClient = client.map((item) => (item.stt === values.stt ? { ...values } : item))
    setClient(newClient);
    setFilteredClient(newClient);
  }

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await get("/clients");
      const newClients = result.data.clients.map((item, index) => ({
        key: `${item._id}`,
        stt: `${index + 1}`,
        fullName: `${item.fullName}`,
        address: `${item.address}`,
        note: `${item.note}`,
      }))
      // console.log(newStaffs)
      setClient(newClients);
      setFilteredClient(newClients)
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
        Danh sách khách hàng
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

      <ModalClientCreate
        create={handleAdd}
        length={client.length}
        // initdata={[]}
      />

      <Table className="staff-management-table" style={{
        marginLeft: 30,
      }} columns={columns} dataSource={filteredClient}
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



export default ClientManagement;
