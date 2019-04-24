import React from 'react'

const ProfileNavigate = props =>
    <div className="container">
        <h1>Profile Updated!</h1>
        <br/>
        <h4>Where to next?</h4>
        <div className="row">
            <div className="col-3">
                <a href="/business"><button className="btn btn-primary btn-block">Business</button></a>
            </div>
            <div className="col-3">
                <a href="/service-questions"><button className="btn btn-primary btn-block">Services</button></a>
            </div>
            <div className="col-3">
                <a href="/logout"><button className="btn btn-danger btn-block">Logout</button></a>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>

export default ProfileNavigate