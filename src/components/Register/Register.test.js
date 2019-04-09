import React from 'react';
import renderer from 'react-test-renderer';

import Register from './Register';

test('render create button correctly', function () {
    const component = renderer.create(
        <Register
            handleCreate={(e) => { }}
            handleChange={(e) => { }}
        />
    )
    const testInstance = component.root;
    expect(testInstance.findByProps({ className: "btn btn-primary btn-block" })).toBeDefined();
})

test('render labels correctly', function () {
    const component = renderer.create(
        <Register
            handleCreate={(e) => { }}
            handleChange={(e) => { }}
        />
    )
    const testInstance = component.root;
    expect(testInstance.findByProps({ className: "first-name form-control" })).toBeDefined();
    expect(testInstance.findByProps({ className: "last-name form-control" })).toBeDefined();
    expect(testInstance.findByProps({ className: "email form-control" })).toBeDefined();
    expect(testInstance.findByProps({ className: "password form-control" })).toBeDefined();

})

test('render lablels after changing input correctly', function () {
    const component = renderer.create(
        <Register
            handleCreate={(e) => { }}
            handleChange={(e) => { }}
        />
    )
    const testInstance = component.root;
    testInstance.findByProps({ className: "first-name form-control" }).props.onChange()
    expect(testInstance.findByProps({ className: "first-name form-control" })).toBeDefined();
    expect(testInstance.findByProps({ className: "last-name form-control" })).toBeDefined();
    expect(testInstance.findByProps({ className: "email form-control" })).toBeDefined();
    expect(testInstance.findByProps({ className: "password form-control" })).toBeDefined();

})