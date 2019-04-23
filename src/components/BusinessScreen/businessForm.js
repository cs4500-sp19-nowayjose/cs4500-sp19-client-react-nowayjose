import React from 'react'

const paymentOptions = [
  'Credit Card',
  'Cash',
  'Check',
  'Venmo',
  'Paypal',
  'Square',
]

const Business = ({ data, onChange, onSave }) => {
  const { 
    businessName,
    yearInBusiness = 0,
    employees,
    email,
    street,
    city,
    zip,
    payments = [],
    instagramUrl,
    facebookUrl,
    twitterUrl
  } = data;
  return (
    <div className="container" testID="business-info-form">
      <h1>Business</h1>
      <br/>
      <div>
        <div className="row">
          <div className="col-12">
            <label for="business-name">Business name</label>
            <input className="form-control" value={businessName} />
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-12">
            <label for="year-founded">Year founded</label>
            <input className="form-control" testID="year-in-business-field" value={2019 - yearInBusiness}/>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-12">
            <label for="employees">Number of employees</label>
            <input lassName="form-control" value={employees}/>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-12">
              <label for="email">Email</label>
              <input className="form-control" value={email}/>
            </div>
          </div>
          <br/>
          <h4>Business address (optional)</h4>
            <div className="row">
              <div className="col-12">
                <label for="street">Street</label>
                <input className="form-control" value={street} />
              </div>
            </div>
          <div className="row">
            <div className="col-12">
              <br/>
              <label for="city">City</label>
              <input className="form-control" value={city} />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <br/>
              <label for="state">State</label>
              <select className="form-control">
                <option selected>MA</option>
                <option>NH</option>
                <option>NY</option>
                <option>CA</option>
              </select>
            </div>
            <div className="col-6">
              <br/>
              <label for="zip">Zip</label>
              <input className="form-control" value={zip} />
            </div>
            </div>
            <br/>
            <h4>Payment methods accepted</h4>
            <div className="row">
              <div className="col-12">
                <ul className="list-group">
                  {
                    paymentOptions.map(payment => {
                      return (
                        <li className="list-group-item" 
                              key={`${payment}_choice`} >
                          <label>
                            <input 
                              testID={`${payment}_choice`} 
                              type="checkbox" 
                              checked={payments.includes(payment)}
                            />
                            {payment}
                          </label>
                        </li>
                      )
                    })
                  }
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
                  className="form-control"
                  value={facebookUrl}
                  />
              </div>
              <div className="col-12">
                <br/>
                <label>Instagram</label>
                <input
                  placeholder="Enter Instagram URL"
                  className="form-control"
                  value={instagramUrl}
                />
              </div>
              <div className="col-12">
                <br/>
                <label>Twitter</label>
                <input
                  placeholder="Enter Twitter URL"
                  className="form-control"
                  value={twitterUrl}
                />
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
  )
}

export default Business