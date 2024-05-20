import { Table, Input, Button, Modal, Form, DatePicker, Select } from 'antd';
// import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import FormItem from "antd/es/form/FormItem";
import { EditOutlined } from "@ant-design/icons";
import moment from 'moment';
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
const { Search } = Input;
const { Option } = Select;

const ModalServiceEdit = (props) => {

  const { initialValues, update } = props;
  const [IsModalOpen, setIsModalOpen] = useState(false);
  
  const data = initialValues;

  // console.log(data)

  // if(data){s
  //   data.birthday = moment(data.birthday,"YYYY/MM/DD")
  // }

  const handleShowModal = () => {
    setIsModalOpen(true);
  }

  const handleModalCancel = () => {
    setIsModalOpen(false);
  }

  const handleFinish = (value) => {
    // console.log(value)
    // value.birthday = value.birthday.format("DD/MM/YYYY");
    // console.log(value.birthday)
    update({
      ...value,
      stt: data.stt,
      key: data.key,
    })
    setIsModalOpen(false);
  }

  return (
    <> 
      <Button 
          icon={<EditOutlined />}
          size="small"
          onClick={handleShowModal}
          style={{
            width: "32px",
            height: "32px",
            margin: "0px"
          }}
        />

      <Modal
        title={'Cập nhật thông tin phòng'}
        open={IsModalOpen}
        onCancel={handleModalCancel}
        footer={null}
        style={{ maxWidth: '80%', margin: 'auto' }}
        maskClosable={false}
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={initialValues}
        >
          <FormItem name="name" label="Tên dịch vụ" rules={[{ required: true, message: 'Hãy nhập tên phòng' }]}>
            <Input />
          </FormItem>
          <FormItem name="unity" label="Loại dịch vụ" rules={[{ required: true, message: 'Hãy nhập loại phòng' }]}>
            <Input />
          </FormItem>
          <FormItem name="description" label="Mô tả" >
            <TextArea rows={8}/>
          </FormItem>
          <FormItem name="price" label="Giá dịch vụ" rules={[{ required: true, message: 'Hãy nhập giá phòng' }]}>
            <Input />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit"
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#fff",
                // backgroundColor: "#685F51",
                height: 35
              }}
            >
              <p>Xác nhận</p>
            </Button>
            <Button onClick={handleModalCancel}
              style={{
                marginLeft: 8,
                fontSize: 16,
                fontWeight: 400,
                color: "#fff",
                backgroundColor: "#685F51",
                height: 35
              }}
            >
              <p>Hủy</p>
            </Button>
          </FormItem>
        </Form>
      </Modal>

    </>


  );
};

export default ModalServiceEdit;