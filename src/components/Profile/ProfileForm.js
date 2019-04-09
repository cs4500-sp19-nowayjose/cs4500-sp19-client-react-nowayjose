import React from 'react'

var states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

const ProfileForm = (props) =>
    <div className="container">
        <h1>Profile</h1>
        <br/>
        <div>
            <h4>Legal name</h4>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="firstName">First name</label>
                    <input id="firstName" className="form-control" type="text" onChange={props.handleChange} value={props.firstName} />
                </div>
                <div className="col-6">
                    <label htmlFor="lastName">Last name</label>
                    <input id="lastName" className="form-control" type="text" onChange={props.handleChange} value={props.lastName} />
                </div>
            </div>
            <br/>
            <h4>Date of birth</h4>
            <div className="row">
                <div className="col-4">
                    <label htmlFor="dobMonth">Month</label>
                    <input id="dobMonth" className="form-control" type="number" onChange={props.handleChange} value={props.dobMonth} />
                </div>
                <div className="col-4">
                    <label htmlFor="dobDay">Day</label>
                    <input id="dobDay" className="form-control" type="number" onChange={props.handleChange} value={props.dobDay} />
                </div>
                <div className="col-4">
                    <label htmlFor="dobYear">Year</label>
                    <input id="dobYear" className="form-control" type="number" onChange={props.handleChange} value={props.dobYear} />
                </div>
            </div>
            <br/>
            <h4>Home address</h4>
            <div className="row">
                <div className="col-12">
                    <label htmlFor="addStreet">Street</label>
                    <input id="addStreet" className="form-control" type="text" onChange={props.handleChange} value={props.addStreet} />
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <label htmlFor="addCity">City</label>
                    <input id="addCity" className="form-control" type="text" onChange={props.handleChange} value={props.addCity} />
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="addState">State</label>
                    <select id="addState" className="form-control" type="text" onChange={props.handleChange} value={props.addState} >
                        {
                            states.map(stateName =>
                                <option key={stateName}>{stateName}</option>
                            )
                        }
                    </select>
                </div>
                <div className="col-6">
                    <label htmlFor="addZip">Zip</label>
                    <input id="addZip" className="form-control" type="number" onChange={props.handleChange} value={props.addZip} />
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <label htmlFor="email">Email</label>
                    <input id="email" className="form-control" value={props.email} disabled />
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <button onClick={props.handleUpdate} className="btn btn-success btn-block">
                        Update Account
                    </button>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    </div>

export default ProfileForm