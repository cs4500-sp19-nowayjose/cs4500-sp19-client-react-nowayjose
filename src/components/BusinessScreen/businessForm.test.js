import React from 'react';
import renderer from 'react-test-renderer';

import BusinessForm from './businessForm';

describe('pagination toolbar rendering', function() {
  let component;
  const mockData = { 
    businessName: "hey",
    yearInBusiness: 5,
    employees: 5,
    email: "email@email.com",
    street: '360 Huntington Ave',
    city : "Boston",
    zip : "02115",
    payments : ['Credit Card', 'Paypal'],
    instagramUrl: "some@instagram.com",
    facebookUrl: "wow@facebook.com",
    twitterUrl: "wow@twitter.com"
  }

  beforeEach(() => {
    component = renderer.create(
      <BusinessForm
        data={mockData}
      />
    )
  })

  test('render business form with correct information', function() {
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = component.root;
    expect(testInstance.findByProps({ testID: "business-info-form" })).toBeDefined();
  })

  test('check if current check-boxes are checked for payment methods', function() {
    const testInstance = component.root;
    const creditCard = testInstance.findByProps({ testID: "Credit Card_choice" });
    const square = testInstance.findByProps({ testID: "Square_choice" });
    const paypal = testInstance.findByProps({ testID: "Paypal_choice" });
    expect(creditCard).toBeDefined();
    expect(paypal).toBeDefined();
    expect(square).toBeDefined();
    expect(creditCard.props.checked).toBeTruthy()
    expect(square.props.checked).toBeFalsy()
    expect(paypal.props.checked).toBeTruthy();
  })

  test('check if values are correctly populated', function() {
    const testInstance = component.root;
    const yearInBusiness = testInstance.findByProps({ testID: "year-in-business-field" });
    expect(yearInBusiness).toBeDefined();
    expect(yearInBusiness.props.value).toBe(2014)
  })

})





