import React from 'react'

const Register = ({handleChange, handleCreate}) =>
    <div>
        <h1>Create your account</h1>
        <br/>
        <div>
            <div className="row">
                <div className="col-6">
                    <label for="first-name">First name</label>
                    <input id="firstName" className="form-control" onChange={handleChange}/>
                </div>
                <div className="col-6">
                    <label for="last-name">Last name</label>
                    <input id="lastName" className="form-control" onChange={handleChange}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <label for="username">Username/Email</label>
                    <input id="username" className="form-control" onChange={handleChange}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <label for="password">Password</label>
                    <input id="password" className="form-control" onChange={handleChange}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <button onClick={handleCreate} className="btn btn-primary btn-block">
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    </div>

export default Register