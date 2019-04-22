import React from 'react';
import renderer from 'react-test-renderer';
import userData from '../data/users.mock.json'
import UserDetails from './userDetails';

test('render user details correctly', function() {
    const component = renderer.create(
      <UserDetails
        selectUser={() => {}}
        user={{
            "username": "alicew",
            "id": 6,
            "firstName": "Alice",
            "lastName": "Wonderland"
        }}
        users={userData}

      />
    )
    const testInstance = component.root;
    expect(testInstance.findByProps({ className: "selectedUser form-control"})).toBeDefined();
    expect(testInstance.findByProps({ className: "username form-control" })).toBeDefined();
    expect(testInstance.findByProps({ className: "firstName form-control" })).toBeDefined()
    expect(testInstance.findByProps({ className: "lastName form-control" })).toBeDefined()

})

  test('render user details correctly after changing first name', function() {
    const component = renderer.create(
      <UserDetails
        selectUser={() => {}}
        user={{
            "username": "alicew",
            "id": 6,
            "firstName": "Alice",
            "lastName": "Wonderland"
        }}
        users={userData}

      />
    )
    const testInstance = component.root;
    let   selectUser    = testInstance.findByProps({className: 'selectedUser form-control'})
    selectUser.props.onChange({target: {value: '4'}})
    expect(testInstance.findByProps({ className: "selectedUser form-control"})).toBeDefined();
    expect(testInstance.findByProps({ className: "username form-control" })).toBeDefined();
    expect(testInstance.findByProps({ className: "firstName form-control" })).toBeDefined();
    expect(testInstance.findByProps({ className: "lastName form-control" })).toBeDefined();

  })