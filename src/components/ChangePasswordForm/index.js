import React from 'react';

const ChangePasswordForm = () => {
    return (
        <div className="" id="account-change-password">
            <div className="card-body pb-2">
                <div className="form-group">
                    <label className="form-label">Mật khẩu hiện tại</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Mật khẩu mới</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Nhập lại mật khẩu mới</label>
                    <input type="password" className="form-control" />
                </div>
            </div>
        </div>
    );
}

export default ChangePasswordForm;
