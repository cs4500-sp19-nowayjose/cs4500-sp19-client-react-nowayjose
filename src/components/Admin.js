
import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import FAQs from './FAQs'

const Admin = () =>
<div>
    <h2>Admin</h2>
    <Router>
        <div className="row">
            <div className="col-3">
                <Link to="/admin/faqs">FAQs</Link>
                <br/>
            </div>
            <div className="col-9">
                <Route
                    path="/admin/faqs"
                    exact
                    component={FAQs}/>
            </div>
        </div>
    </Router>
</div>

export default Admin