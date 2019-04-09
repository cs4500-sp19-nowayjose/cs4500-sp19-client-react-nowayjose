import React from 'react'
// import Rating from './Rating'
// import Review from './Review'
// import FAQ from './FAQ'

const Provider = ({provider}) =>
    <div>
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
            </li>
        </ul>
        <div className="row">
            <div className="col-2">
                <a name="about"/>
                <img src="https://picsum.photos/150/150"/>
            </div>
            <div className="col-10">
                <h3>{provider.title}</h3>
                {provider.rating}
                <i className="fa fa-star cs4500-yellow"/>
                <i className="fa fa-star cs4500-yellow"/>
                <i className="fa fa-star cs4500-yellow"/>
                <i className="fa fa-star cs4500-yellow"/>
                <i className="fa fa-star cs4500-yellow"/>
                ({provider.reviewsOfMe ? provider.reviewsOfMe.length : ''})
            </div>
        </div>
        <div>
            <br/>
            <p>
                {provider.introduction}
            </p>
        </div>
        <div className="row">
            <div className="col-6">
                <h4>Overview</h4>
                <i className="fa fa-trophy"/>
                &nbsp;
                Hired {provider.hires} times
                <br/>
                <i className="fa fa-lock"/>
                &nbsp;
                {provider.backgroundChecked ? 'Background checked' : ''}
                <br/>
                <i className="fa fa-users"/>
                &nbsp;
                {provider.employees} Employees
                <br/>
                <i className="fa fa-briefcase"/>
                &nbsp;
                {provider.yearsInBusiness} Years in business
            </div>
            <div className="col-6">
                <h4>Payment methods</h4>
                <i className="fa fa-usd"/>
                &nbsp;
                {provider.paymentMethods}
            </div>
        </div>
        <hr/>
        <br/>
    </div>

export default Provider