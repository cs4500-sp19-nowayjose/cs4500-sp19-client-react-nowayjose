import React from 'react'
import {Link} from 'react-router-dom'

export default function providerResultsList({providers}) {
  if (!providers || !providers.length) return null;
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
              <Link to={`/providers/${provider.id}`}>{provider.title}</Link>
            </h4>
            <span>{provider.rating}</span>
            <span>{"*".repeat(Math.floor(provider.rating))}</span>
          </div>
          <div>{`${provider.yearsInBusiness}, ${provider.hires}`}</div>
          <div>{provider.introduction}</div>
        </div>
      ))
    } </div>
  )
}
