import React from 'react';

const ProfileGeneral = ({ swap }) => {
    return (
        <div className="tab-pane fade active show" id="account-general">
            <div className="card-body media align-items-center">
                <img src="img/avatar1.png" alt="Avatar" className="d-block ui-w-80" />
                <div className="media-body ml-4">
                    <label className="btn btn-outline-primary">
                        Upload new photo
                        <input type="file" className="account-settings-fileinput" />
                    </label> &nbsp;
                    <button type="button" className="btn btn-default md-btn-flat" onClick={swap}>Reset</button>
                    <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                </div>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body">
                <div className="form-group">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control mb-1" value=":v" />
                </div>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value="Thanh" />
                </div>
                <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input type="text" className="form-control mb-1" value="69vanthanh69@mail.com" />
                    <div className="alert alert-warning mt-3">
                        Your email is not confirmed. Please check your inbox.<br />
                        <a href="javascript:void(0)">Resend confirmation</a>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label">Company</label>
                    <input type="text" className="form-control" value="Company Ltd." />
                </div>
            </div>
        </div>
    );
}

export default ProfileGeneral;
