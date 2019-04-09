import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom'

import ServiceList from './ServiceList';
import SearchBar from './SearchBar';

describe('search bar test suite', () => {
  let component;
  beforeEach(() => {
    component = renderer.create(
      <Router>
        <SearchBar
          className="col-10"
        />
      </Router>
    )
  })

  test('render search bar correctly without any input', function() {
    const testInstance = component.root;
    expect(testInstance.findByProps({ className: "needs-validation"})).toBeDefined();
    expect(testInstance.findAllByProps({ className: "form-control service-name "})).toHaveLength(1);
    expect(testInstance.findAllByProps({ className: "form-control zip-code "})).toHaveLength(1);
  })

  test('render data list when user is typing typing', function() {
    const testInstance = component.root;
    const titleInput = testInstance.findByProps({ list: "provider-search-list" })
    expect(titleInput).toBeDefined();
    titleInput.props.onChange({ target: { value: 'f' }});
    const datalist = testInstance.findByProps({ id: "provider-search-list" });
    expect(datalist).toBeDefined();
  })

  test('service list test', function() {
    component = renderer.create(
      <ServiceList
        services={[
          { serviceName: 'hey', id: 'wow' },
          { serviceName: 'fish', id: 'hoho'}
        ]}
      />
    );
    
    expect(component.root.findByProps({ id: 'wow' })).toBeDefined();
    expect(component.root.findByProps({ id: 'hoho' })).toBeDefined();
  })

  test('render invalid field when service input is incorrect', function() {
    component = renderer.create(
      <Router>
        <SearchBar
          className="col-10"
          testData={[
            { serviceName: 'home cleaning', id: 4, },
            { serviceName: 'house improvements', id: 5},
          ]}
        />
      </Router>
    )
    const testInstance = component.root;
    const titleInput = testInstance.findByProps({ className: "form-control service-name " })
    titleInput.props.onChange({ target: { value: 'h' }});
    expect(testInstance.findByProps({ value: 'home cleaning' }));
    expect(testInstance.findByProps({ value: 'house improvements' }));
    const submitField = testInstance.findByProps({ testID: "search-submit-button" })
    submitField.props.onClick({ preventDefault: () => {}, stopPropagation: () => {} });
    expect(testInstance.findByProps({ className: "form-control service-name is-invalid"}))
    expect(testInstance.findByProps({ className: "form-control zip-code "}))
  })

  test('render invalid field when service input is correct', function() {
    component = renderer.create(
      <Router>
        <SearchBar
          className="col-10"
          testData={[
            { serviceName: "home cleaning", id: '4', },
            { serviceName: "house improvements", id: '5' },
          ]}
        />
      </Router>
    )
    const testInstance = component.root;
    const titleInput = testInstance.findByProps({ className: "form-control service-name " })
    titleInput.props.onChange({ target: { value: 'home cleaning' }});
    expect(document.location.pathname.includes('/provider-search')).toBe(false)
    const submitField = testInstance.findByProps({ testID: "search-submit-button" })
    submitField.props.onClick({ preventDefault: () => {}, stopPropagation: () => {} });
    expect(document.location.pathname.includes('/provider-search/5')).toBe(false)
    expect(document.location.pathname.includes('/provider-search/4')).toBe(true)
  })

})
  