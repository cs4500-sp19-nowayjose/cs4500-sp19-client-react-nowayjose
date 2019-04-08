import React from 'react'
import RegisterContainer from './RegisterContainer'
import TestRenderer from 'react-test-renderer';

test('[RegisterContainer renders correctly]', () => {
    const testRenderer = TestRenderer.create(
        <RegisterContainer/>)
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
})

test('[RegisterContainer renders correctly after hitting create]', () => {
    const testRenderer = TestRenderer.create(
        <RegisterContainer/>)
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance   = testRenderer.root
    let   createButton    = testInstance.findAllByProps({className: 'btn btn-primary btn-block'})

    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
})