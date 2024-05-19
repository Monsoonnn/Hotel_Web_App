import React, { useState } from 'react';
import './manageliststaff.css'

// Component for updating staff information
const UpdateStaffForm = ({ staff, onUpdate, onCancel }) => {
  const [updatedStaff, setUpdatedStaff] = useState(staff);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStaff({ ...updatedStaff, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedStaff);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="code" value={updatedStaff.code} onChange={handleChange} />
      <input type="text" name="name" value={updatedStaff.name} onChange={handleChange} />
      <input type="text" name="position" value={updatedStaff.position} onChange={handleChange} />
      <input type="date" name="birthday" value={updatedStaff.birthday} onChange={handleChange} />
      <select name="sex" value={updatedStaff.sex} onChange={handleChange}>
        <option value="Nam">Nam</option>
        <option value="Nữ">Nữ</option>
        <option value="Giới tính khác">Khác</option>
      </select>
      <button type="submit">Xác nhận</button>
      <button type="button" onClick={onCancel}>Hủy</button>
    </form>
  );
};

// Main component for managing staff
const ManageStaff = () => {
  const [staffList, setStaffList] = useState([
    { code: '001', name: 'Nguyễn Quang Anh', position: 'Nhân viên', birthday: '1990-05-15', sex: 'Nam' },
    { code: '002', name: 'Nguyễn Thị Thanh', position: 'Kế toán', birthday: '1995-08-22', sex: 'Nữ' },

  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [staffToUpdate, setStaffToUpdate] = useState(null);
  const [newStaff, setNewStaff] = useState({ code: '', name: '', position: '', birthday: '', sex: '' });
  const [isAdding, setIsAdding] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleUpdate = (index, updatedStaff) => {
    const updatedStaffList = [...staffList];
    updatedStaffList[index] = updatedStaff;
    setStaffList(updatedStaffList);
    setIsUpdating(false);
  };

  const handleCancelUpdate = () => {
    setIsUpdating(false);
    setStaffToUpdate(null);
  };

  const handleDelete = (code) => {
    setStaffList(staffList.filter(staff => staff.code !== code));
  };

  const handleAddStaff = () => {
    setIsAdding(true);
  };

  const handleCancelAddStaff = () => {
    setIsAdding(false);
    setNewStaff({ code: '', name: '', position: '', birthday: '', sex: '' });
  };

  const handleSubmitAddStaff = () => {
    setStaffList([...staffList, newStaff]);
    setIsAdding(false);
    setNewStaff({ code: '', name: '', position: '', birthday: '', sex: '' });
  };

  return (
    <div>
      <div className="manageliststaff__title">
        Danh sách nhân viên
      </div>
      <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>Mã nhân viên</th>
            <th>Họ tên</th>
            <th>Chức vụ</th>
            <th>Sinh nhật</th>
            <th>Giới tính</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {staffList
            .filter((staff) =>
              `${staff.code} ${staff.name} ${staff.position} ${staff.birthday} ${staff.sex}`
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
            .map((staff, index) => (
              <tr key={index}>
                <td>{staff.code}</td>
                <td>{staff.name}</td>
                <td>{staff.position}</td>
                <td>{staff.birthday}</td>
                <td>{staff.sex}</td>
                <td>
                  <button onClick={() => { setStaffToUpdate(staff); setIsUpdating(true); }}>Cập nhật</button>
                  <button onClick={() => handleDelete(staff.code)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        {!isAdding ? (
          <button onClick={handleAddStaff}>Thêm nhân viên mới</button>
        ) : (
          <div>
            <div className="addstaff__title">
              Thêm nhân viên
            </div>
            <form>
              <input
                type="text"
                placeholder="Code"
                value={newStaff.code}
                onChange={(e) => setNewStaff({ ...newStaff, code: e.target.value })}
              />
              <input
                type="text"
                placeholder="Name"
                value={newStaff.name}
                onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Position"
                value={newStaff.position}
                onChange={(e) => setNewStaff({ ...newStaff, position: e.target.value })}
              />
              <input
                type="date"
                value={newStaff.birthday}
                onChange={(e) => setNewStaff({ ...newStaff, birthday: e.target.value })}
              />
              <select
                value={newStaff.sex}
                onChange={(e) => setNewStaff({ ...newStaff, sex: e.target.value })}
              >
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Giới tính khác">Khác</option>
              </select>
              <button type="button" onClick={handleSubmitAddStaff}>Thêm </button>
              <button type="button" onClick={handleCancelAddStaff}>Hủy</button>
            </form>
          </div>
        )}
      </div>
      {isUpdating && (
        <div>
          <div className="updatestaff__title">
            Cập nhật nhân viên
          </div>
          <UpdateStaffForm
            staff={staffToUpdate}
            onUpdate={(updatedStaff) => handleUpdate(staffList.findIndex((s) => s.code === updatedStaff.code), updatedStaff)}
            onCancel={handleCancelUpdate}
          />
        </div>
      )}
    </div>
  );
};

export default ManageStaff;
