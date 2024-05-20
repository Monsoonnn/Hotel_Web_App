
import React, { useEffect, useId, useState } from 'react';
import { Table, Input, Button, Modal, Form, DatePicker, Select } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import FormItem from "antd/es/form/FormItem";
import "./manageliststaff.css"
import { TableToDateString } from '../../services/convert';
import { get } from '../../utils/request';
import moment from 'moment';
import { isVisible } from '@testing-library/user-event/dist/utils';
import ModalEdit from './ModalEdit';
import Swal from 'sweetalert2';
import ModalCreate from './ModalCreate';
const { RangePicker } = DatePicker;

const { Search } = Input;
const { Option } = Select;

const StaffManagement = () => {

  const [staff, setStaff] = useState([]);
  const [filteredStaff, setFilteredStaff] = useState(staff);
  const [top, setTop] = useState('none');
  const [bottom, setBottom] = useState('bottomCenter');
  const id = useId();


  const handleSearch = (value) => {
    const filtered = staff.filter(s => s.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredStaff(filtered);
  };
  const handleAdd = (value) => {
    const newStaffs = [
      ...staff,
      value
    ]   
    // console.log(newStaffs)
    setStaff(newStaffs)
    setFilteredStaff(newStaffs)
  };
  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
    },
    {
      title: 'Mã nhân viên',
      dataIndex: 'staffCode',
      key: 'staffCode',
    },
    {
      title: 'Họ tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Chức vụ',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'birthday',
      key: 'birthday',
      render: (text) => moment(text).format("DD/MM/YYYY")
    },
    {
      title: 'Giới tính',
      dataIndex: 'sex',
      key: 'sex',
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
              <ModalEdit
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
        const newStaff = staff.filter(s => s.key !== key);
        setStaff(newStaff);
        setFilteredStaff(newStaff);
      }
    });
    
  };

  const updateStaff = (values) => {
    // console.log(values)
    const newStaff = staff.map((item) => (item.staffCode === values.staffCode ? { ...values } : item))
    setStaff(newStaff);
    setFilteredStaff(newStaff);
  }

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await get("/staffs");
      const newStaffs = result.data.staffs.map((item, index) => ({
        key: `${item._id}`,
        stt: `${index + 1}`,
        staffCode: `${item.staffCode}`,
        name: `${item.fullName}`,
        sex: `${item.gender}`,
        position: `${item.position}`,
        birthday: `${(item.birthDate)}`
      }))
      // console.log(newStaffs)
      setStaff(newStaffs);
      setFilteredStaff(newStaffs)
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
        Danh sách nhân viên
      </div>

      <Search placeholder="Tìm kiếm nhân viên" onSearch={handleSearch}
        style={{
          width: 300,
          marginTop: 20,
          marginLeft: 30,
          marginBottom: 20,
          height: 45
        }}
      />

      <ModalCreate
        create={handleAdd}
        length={staff.length}
        // initdata={[]}
      />

      <Table className="staff-management-table" style={{
        marginLeft: 30,
      }} columns={columns} dataSource={filteredStaff}
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



export default StaffManagement;
