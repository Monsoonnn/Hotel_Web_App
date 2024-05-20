import { Table, Input, Button, Modal, Form, DatePicker, Select } from 'antd';
// import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import FormItem from "antd/es/form/FormItem";
import { EditOutlined } from "@ant-design/icons";
import moment from 'moment';
import { useId, useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
const { Search } = Input;
const { Option } = Select;

const ModalServiceCreate = (props) => {

  const { initdata, create, length } = props;
  const [IsModalOpen, setIsModalOpen] = useState(false);

  const id = useId();

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
    create({
        ...value,
        stt: length+1,
        key: id,
    })
    setIsModalOpen(false);
  }

  return (
    <> 
      <Button type="primary" onClick={handleShowModal}
        style={{
          position: "absolute",
          fontSize: 16,
          marginTop: 20,
          top: 126,
          right: 150,
          marginBottom: 20,
          height: 35,
          color: "#fff"
        }}
      >
        <p>Thêm dịch vụ mới</p>
      </Button>

      <Modal
        title={'Thêm mới dịch vụ'}
        open={IsModalOpen}
        onCancel={handleModalCancel}
        footer={null}
        style={{ maxWidth: '80%', margin: 'auto' }}
        maskClosable={false}
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={initdata}
        >
          <FormItem name="name" label="Tên dịch vụ" rules={[{ required: true, message: 'Hãy nhập tên phòng' }]}>
            <Input />
          </FormItem>
          <FormItem name="unity" label="Đơn vị sử dụng" rules={[{ required: true, message: 'Hãy nhập loại phòng' }]}>
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

export default ModalServiceCreate;