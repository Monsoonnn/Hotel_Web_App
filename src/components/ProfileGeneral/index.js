import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";


const ProfileGeneral = ({ swap }) => {

    const login = useSelector(state => state.isUserLogin)

    return (
        <div className="tab-pane fade active show" id="account-general">
            <div className="card-body media align-items-center">
                <img src={login.photo} alt="Avatar" className="d-block ui-w-80" />
                <div className="media-body ml-4">
                    <label className="btn btn-outline-primary">
                        Cập nhật ảnh mới
                        <input type="file" className="account-settings-fileinput" />
                    </label> &nbsp;
                    {/* <button type="button" className="btn btn-default md-btn-flat" onClick={swap}>Reset</button> */}
                    <div className="text-light small mt-1">Cho phép JPG, GIF, PNG. Tối đa 800K dữ liệu</div>
                </div>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body">
                <div className="form-group">
                    <label className="form-label">Tài khoản</label>
                    <input className="form-control mb-1" defaultValue={login.email} />
                </div>
                <div className="form-group">
                    <label className="form-label">Họ và tên</label>
                    <input className="form-control" defaultValue={login.name} />
                </div>
                <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input className="form-control mb-1" defaultValue={login.email} />
                    <div className="alert alert-warning mt-3">
                        Email của bạn chưa được xác thực<br />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label">Ví trí</label>
                    <input className="form-control" defaultValue={login.role}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Công ty</label>
                    <input className="form-control" defaultValue="Company Ltd." />
                </div>
            </div>
        </div>
    );
}

export default ProfileGeneral;
