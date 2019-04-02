import React from 'react'
import {Link} from 'react-router-dom'

export default function providerResultsList({providers}) {
  return (
    <div> {
      providers.map(provider => (
        <div className="media">
          <div className="media-left">
            <img
              className="media-object"
              src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"

            />
          </div>
          <div className="media-body">
            <h4 className="media-heading">
              <Link to={`/providers/${provider.id}`}>{provider.firstName + " " + provider.lastName}</Link>
            </h4>
            <span>{provider.starRating}</span>
            <span>{"*".repeat(Math.floor(provider.starRating))}</span>
            <span>0 reviews</span>
          </div>
          <div>0 years in business, 0 hires</div>
          <div>Pls hire me</div>
        </div>
      ))
    } </div>
  )
}
