import React from 'react'

const paymentOptions = [
  'Credit Card',
  'Cash',
  'Check',
  'Venmo',
  'Paypal',
  'Square',
]

const Business = ({ data, onChangeValue, onSave, onChangePaymentMethod }) => {
  const { 
    title,
    yearsInBusiness = 0,
    employees,
    email,
    street,
    city,
    zipCode,
    paymentMethod = "",
    instagramLink,
    facebookLink,
    twitterLink
  } = data;

  return (
    <div className="container" testID="business-info-form">
      <h1>Business</h1>
      <br/>
      <div>
        <div className="row">
          <div className="col-12">
            <label htmlFor="business-name">Business name</label>
            <input onChange={(e) => onChangeValue('title', e)} className="form-control" value={title} />
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-12">
            <label htmlFor="year-founded">Year founded</label>
            <input onChange={(e) => onChangeValue('yearsInBusiness', e)} 
              className="form-control" testID="year-in-business-field" value={yearsInBusiness}/>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-12">
            <label htmlFor="employees">Number of employees</label>
            <input onChange={(e) => onChangeValue('employees', e)} className="form-control" value={employees}/>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-12">
              <label htmlFor="email">Email</label>
              <input onChange={(e) => onChangeValue('email', e)} className="form-control" value={email}/>
            </div>
          </div>
          <br/>
          <h4>Business address (optional)</h4>
            <div className="row">
              <div className="col-12">
                <label htmlFor="street">Street</label>
                <input onChange={(e) => onChangeValue('street', e)} className="form-control" value={street} />
              </div>
            </div>
          <div className="row">
            <div className="col-12">
              <br/>
              <label htmlFor="city">City</label>
              <input onChange={(e) => onChangeValue('city', e)} className="form-control" value={city} />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <br/>
              <label htmlFor="state">State</label>
              <select className="form-control" onChange={(e) => onChangeValue('state', e)}>
                <option selected>MA</option>
                <option>NH</option>
                <option>NY</option>
                <option>CA</option>
              </select>
            </div>
            <div className="col-6">
              <br/>
              <label for="zip">Zip</label>
              <input onChange={(e) => onChangeValue('zipCode', e)} className="form-control" value={zipCode} />
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
                              onChange={(e) => onChangePaymentMethod(e, payment)}
                              testID={`${payment}_choice`} 
                              type="checkbox" 
                              checked={(paymentMethod || "").toLowerCase().includes(payment.toLowerCase())}
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
                  onChange={(e) => onChangeValue('facebookLink', e)}
                  placeholder="Enter Facebook URL"
                  className="form-control"
                  value={facebookLink}
                  />
              </div>
              <div className="col-12">
                <br/>
                <label>Instagram</label>
                <input
                  onChange={(e) => onChangeValue('instagramLink', e)}
                  placeholder="Enter Instagram URL"
                  className="form-control"
                  value={instagramLink}
                />
              </div>
              <div className="col-12">
                <br/>
                <label>Twitter</label>
                <input
                  onChange={(e) => onChangeValue('twitterLink', e)}
                  placeholder="Enter Twitter URL"
                  className="form-control"
                  value={twitterLink}
                />
              </div>
            </div>
            <br/>
            <div className="row">
            <div className="col-12">
              <button className="btn btn-success btn-block" onClick={onSave}>
                Save
             </button>
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