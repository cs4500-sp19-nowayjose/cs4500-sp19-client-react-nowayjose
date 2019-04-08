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

