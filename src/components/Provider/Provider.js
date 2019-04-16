import React from 'react'
import Rating from './Rating'
import Review from './Review'
// import FAQ from './FAQ'

const Provider = ({provider}) =>
    <div>
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
        <hr/>
        <div className="row">
            <div className="col-8">
                <a name="reviews"/>
                <h3>
                    Reviews
                </h3>
            </div>
            <hr/>
            <div className="col-4">
                <select className="form-control float-right">
                    <option>Recommended</option>
                    <option>Highest rated</option>
                    <option>Lowest rated</option>
                    <option>Newest first</option>
                    <option>Oldest first</option>
                </select>
                <br/>
                <br/>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <h4>
                    {provider.rating ? provider.rating : ''}
                </h4>
                <i className="fa fa-star cs4500-yellow wd-font-size-2-em"/>
                <i className="fa fa-star cs4500-yellow wd-font-size-2-em"/>
                <i className="fa fa-star cs4500-yellow wd-font-size-2-em"/>
                <i className="fa fa-star cs4500-yellow wd-font-size-2-em"/>
                <i className="fa fa-star cs4500-yellow wd-font-size-2-em"/>
                <br/>
                {
                    provider.reviewsOfMe ?
                        provider.reviewsOfMe.length : ''
                } reviews
            </div>
            <div className="col-8">
                {
                    provider.ratingScores ?
                        provider.ratingScores.map((score, index) =>
                            <Rating key={index}
                                    index={5-index}
                                    score={score}/>
                        ) : ''
                }
            </div>
        </div>
        <br/>
        <div>
            {   provider.reviewsOfMe ?
                provider.reviewsOfMe.map(review =>
                    <Review key={review.id} review={review}/>
                ) : ''
            }
            <div className="center">
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <span className="page-link">Previous</span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active" aria-current="page">
                              <span className="page-link">
                                2
                                <span className="sr-only">(current)</span>
                              </span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>


export default Provider