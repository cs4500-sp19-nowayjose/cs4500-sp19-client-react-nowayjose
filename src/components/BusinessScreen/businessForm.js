import React from 'react'

const Business = () =>
    <div className="container">
        <h1>Business</h1>
        <br/>
        <div>
            <div className="row">
                <div className="col-12">
                    <label for="first-name">Business name</label>
                    <input id="first-name" className="form-control"/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <label for="first-name">Year founded</label>
                    <input id="first-name" className="form-control"/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <label for="first-name">Number of employees</label>
                    <input id="first-name" className="form-control"/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <label for="email">Email</label>
                    <input id="email" className="form-control"/>
                </div>
            </div>
            <br/>
            <h4>Business address (optional)</h4>
            <div className="row">
                <div className="col-12">
                    <label for="first-name">Street</label>
                    <input id="first-name" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <br/>
                    <label for="first-name">City</label>
                    <input id="first-name" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <br/>
                    <label for="first-name">State</label>
                    <select className="form-control">
                        <option>MA</option>
                        <option>NH</option>
                        <option>NY</option>
                        <option>CA</option>
                    </select>
                </div>
                <div className="col-6">
                    <br/>
                    <label for="first-name">Zip</label>
                    <input id="first-name" className="form-control"/>
                </div>
            </div>
            <br/>
            <h4>Payment methods accepted</h4>
            <div className="row">
                <div className="col-12">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <label><input type="checkbox"/> Credit card</label>
                        </li>
                        <li className="list-group-item">
                            <label><input type="checkbox"/> Cash</label>
                        </li>
                        <li className="list-group-item">
                            <label><input type="checkbox"/> Check</label>
                        </li>
                        <li className="list-group-item">
                            <label><input type="checkbox"/> Venmo</label>
                        </li>
                        <li className="list-group-item">
                            <label><input type="checkbox"/> Paypal</label>
                        </li>
                        <li className="list-group-item">
                            <label><input type="checkbox"/> Square</label>
                        </li>
                    </ul>
                </div>
            </div>
            <br/>
            <h4>Social media</h4>
            <div className="row">
                <div className="col-12">
                    <label>Facebook</label>
                    <input
                        placeholder="Enter Facebook URL"
                        className="form-control"/>
                </div>
                <div className="col-12">
                    <br/>
                    <label>Instagram</label>
                    <input
                        placeholder="Enter Instagram URL"
                        className="form-control"/>
                </div>
                <div className="col-12">
                    <br/>
                    <label>Twitter</label>
                    <input
                        placeholder="Enter Twitter URL"
                        className="form-control"/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <a className="btn btn-success btn-block">
                        Save
                    </a>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    </div>

export default Business