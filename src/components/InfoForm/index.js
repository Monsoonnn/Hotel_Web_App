import React from 'react';

const InfoForm = () => {
    return (
        <div className="" id="account-info">
            <div className="card-body pb-2">
                <div className="form-group">
                    <label className="form-label">Bio</label>
                    <textarea className="form-control" rows="5">...   ~~   0_o</textarea>
                </div>
                <div className="form-group">
                    <label className="form-label">Birthday</label>
                    <input type="text" className="form-control" value="Feb21, 2003" />
                </div>
                <div className="form-group">
                    <label className="form-label">Country</label>
                    <select className="custom-select">
                        <option selected>VietNam</option>
                        <option>USA</option>
                        <option>Canada</option>
                        <option>UK</option>
                        <option>Germany</option>
                        <option>France</option>
                    </select>
                </div>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body pb-2">
                <h6 className="mb-4">Contacts</h6>
                <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" value="+0 (123) 456 7891" />
                </div>
                <div className="form-group">
                    <label className="form-label">Website</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
        </div>
    );
}

export default InfoForm;
