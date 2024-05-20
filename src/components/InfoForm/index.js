import React from 'react';

const InfoForm = () => {
    return (
        <div className="" id="account-info">
            <div className="card-body pb-2">
                <div className="form-group">
                    <label className="form-label">Mô tả</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <div className="form-group">
                    <label className="form-label">Sinh nhật</label>
                    <input type="text" className="form-control" defaultValue="Feb21, 2003" />
                </div>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body pb-2">
                <h6 className="mb-4">Liên hệ</h6>
                <div className="form-group">
                    <label className="form-label">Số điện thoại</label>
                    <input type="text" className="form-control" defaultValue="+0 (123) 456 7891" />
                </div>
                <div className="form-group">
                    <label className="form-label">Trang chủ</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
        </div>
    );
}

export default InfoForm;
