import React from 'react';

const ConnectionsForm = () => {
    return (
        <div className="" id="account-connections">
            <hr className="border-light m-0" />
            <div className="card-body">
                <button type="button" className="btn btn-facebook">Kết nối với <strong>Email</strong></button>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body">
                <button type="button" className="btn btn-facebook">Kết nối với <strong>Facebook</strong></button>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body">
                <button type="button" className="btn btn-instagram">Kết nối với <strong>Instagram</strong></button>
            </div>
        </div>
    );
}

export default ConnectionsForm;
