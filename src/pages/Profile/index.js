
import './ProfileTemplate.css'; 
import ProfileGeneral from '../../components/ProfileGeneral';
import ChangePasswordForm from '../../components/ChangePasswordForm';
import InfoForm from '../../components/InfoForm';
import SocialLinksForm from '../../components/SocialLinkForm';
import ConnectionsForm from '../../components/ConnectionsForm';
import NotificationsForm from '../../components/NotificationsForm';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import HeaderAll from '../../components/HeaderAll';

const ProfileTemplate = () => {

    const login = useSelector(state => state.isUserLogin)

    // const dispathLogin = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(login.length === 0 && login.role !== 'user'){
            navigate('/')
        }
    },[])

    return (
        
        <>
        <HeaderAll/>
        <div className="container light-style flex-grow-1 container-p-y">
            <h4 className="font-weight-bold py-3 mb-4">
                Cài đặt tài khoản
            </h4>
            <div className="card overflow-hidden">
                <div className="row no-gutters row-bordered row-border-light">
                    <div className="col-md-3 pt-0">
                        <div className="list-group list-group-flush account-settings-links">
                            <Link className="list-group-item list-group-item-action" data-toggle="list" to="">Tổng quan</Link>
                            <Link className="list-group-item list-group-item-action" data-toggle="list" to="account-change-password">Thay đổi mật khẩu</Link>
                            <Link className="list-group-item list-group-item-action" data-toggle="list" to="account-info">Thông tin</Link>
                            <Link className="list-group-item list-group-item-action" data-toggle="list" to="account-connections">Kết nối</Link>
                            <Link className="list-group-item list-group-item-action" data-toggle="list" to="account-notifications">Thông báo</Link>
                            <Link className="list-group-item list-group-item-action" data-toggle="list" to="history-booking">Lịch sử đặt phòng</Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="tab-content">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-right mt-3">
                <button type="button" className="btn btn-primary">Lưu thay đổi</button>&nbsp;
                <button type="button" className="btn btn-default">Hủy</button>
            </div>
        </div>
        </>
    );
}

export default ProfileTemplate;