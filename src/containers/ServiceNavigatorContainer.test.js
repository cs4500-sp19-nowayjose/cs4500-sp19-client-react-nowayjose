import React from 'react'
import ServiceNavigatorContainer from './ServiceNavigatorContainer'
import TestRenderer from 'react-test-renderer';

test('[ServiceNavigatorContainer renders correctly]', () => {
    const testRenderer = TestRenderer.create(
        <ServiceNavigatorContainer/>)
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
})

test('[ServiceNavigatorContainer renders correctly after selecting different category]', () => {
    const testRenderer = TestRenderer.create(
        <ServiceNavigatorContainer/>)
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance   = testRenderer.root
    let   selectCategory    = testInstance.findAllByProps({className: 'service-categories list-group-item no-border'})
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
})