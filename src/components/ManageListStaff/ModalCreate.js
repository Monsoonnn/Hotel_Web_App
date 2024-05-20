import { Table, Input, Button, Modal, Form, DatePicker, Select } from 'antd';
// import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import FormItem from "antd/es/form/FormItem";
import { EditOutlined } from "@ant-design/icons";
import moment from 'moment';
import { useId, useState } from 'react';
const { Search } = Input;
const { Option } = Select;

const ModalCreate = (props) => {

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
        <p>Thêm nhân viên</p>
      </Button>

      <Modal
        title={'Thêm mới nhân viên'}
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
          <FormItem name="staffCode" label="Mã nhân viên" rules={[{ required: true, message: 'Hãy nhập mã nhân viên!' }]}>
            <Input />
          </FormItem>
          <FormItem name="name" label="Họ tên" rules={[{ required: true, message: 'Hãy nhập họ tên!' }]}>
            <Input />
          </FormItem>
          <FormItem name="position" label="Chức vụ" rules={[{ required: true, message: 'Hãy nhập chức vụ!' }]}>
            <Input />
          </FormItem>
          <FormItem
            label="Ngày sinh"
            name="birthday"
            rules={[
              {
                required: true,
                message: 'Hãy nhập ngày sinh',
              },
            ]}
            style={{
              backgroundColor: "#fff",
              marginBottom: "0px",
              padding: "20px 0px"

            }}
          >
            <DatePicker renderExtraFooter={() => 'extra footer'}
            />
          </FormItem>
          <FormItem name="sex" label="Giới tính" rules={[{ required: true, message: 'Hãy chọn giới tính!' }]}>
            <Select>
              <Option value="Nam">Nam</Option>
              <Option value="Nữ">Nữ</Option>
              {/* <Option value="Khác">Khác</Option> */}
            </Select>
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

export default ModalCreate;