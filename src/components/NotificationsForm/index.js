import React from 'react';

const NotificationsForm = () => {
    return (
        <div className="" id="account-notifications">
            <div className="card-body pb-2">
                <h6 className="mb-4">Hoạt động</h6>
                <div className="form-group">
                    <label className="switcher">
                        <input type="checkbox" className="switcher-input" checked />
                        <span className="switcher-indicator">
                            <span className="switcher-yes"></span>
                            <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">Gửi email khi có ưu đãi</span>
                    </label>
                </div>
                <div className="form-group">
                    <label className="switcher">
                        <input type="checkbox" className="switcher-input" checked />
                        <span className="switcher-indicator">
                            <span className="switcher-yes"></span>
                            <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">Gửi email khi hoàn tất quy trình đặt phòng</span>
                    </label>
                </div>
                <div className="form-group">
                    <label className="switcher">
                        <input type="checkbox" className="switcher-input" />
                        <span className="switcher-indicator">
                            <span className="switcher-yes"></span>
                            <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">Gửi email khi hoàn tất thanh toán</span>
                    </label>
                </div>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body pb-2">
                <h6 className="mb-4">Ứng dụng</h6>
                <div className="form-group">
                    <label className="switcher">
                        <input type="checkbox" className="switcher-input" checked />
                        <span className="switcher-indicator">
                            <span className="switcher-yes"></span>
                            <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">Thông báo và thông báo</span>
                    </label>
                </div>
                <div className="form-group">
                    <label className="switcher">
                        <input type="checkbox" className="switcher-input" />
                        <span className="switcher-indicator">
                            <span className="switcher-yes"></span>
                            <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">Cập nhật ưu đãi hàng tuần</span>
                    </label>
                </div>
                <div className="form-group">
                    <label className="switcher">
                        <input type="checkbox" className="switcher-input" checked />
                        <span className="switcher-indicator">
                            <span className="switcher-yes"></span>
                            <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">Tóm tắt blog hàng tuần</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default NotificationsForm;
