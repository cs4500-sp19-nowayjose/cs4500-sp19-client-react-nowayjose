import React from 'react'
import {Link} from 'react-router-dom'

export default function providerResultsList({providers}) {
  if (!providers || !providers.length) return null;

  const renderStars = (rating) => {
    const result = [];
    for (let i = 0; i < rating; i++) {
      result.push( <i className="fas fa-star fa-1x" style={{ color: '#FFD603' }}></i>)
    }
    return result;
  }


  const renderProviders = providers.map(provider => {
    const { yearsInBusiness, hires } = provider;
    return (
      <div className="row provider-card">
        <div className="col-2">
          <img
            style={{ maxWidth: '100%', maxHeight: '100%' }}
            src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
            alt=""
          />
        </div>
        <div className="col-7">
          <Link to={`/providers/${provider.id}`}>{provider.title}</Link>
          <div>
            {provider.rating}
            <span style={{ marginLeft: 5, marginRight: 5 }} />
            {renderStars(Math.floor(provider.rating))}
          </div>
          <div>
            <div>{`${yearsInBusiness} year${yearsInBusiness > 1 ? 's' : ''} in business, ${hires} hire${hires > 1 ? 's' : ''}`}</div>
          </div>
          <div>
            <div>{provider.introduction}</div>
          </div>
        </div>
        <div className="col-3">
          <div className="float-right">
            $75
          </div>
          <div className="float-right" style={{ position: 'absolute', bottom: 0, right: 0}}>
            <button className="btn-primary btn-lg btn">
              View Profile
            </button>
          </div>
        </div>
      </div>
    )
  })

  return renderProviders; 
}
