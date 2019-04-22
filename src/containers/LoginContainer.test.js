import React from 'react'
import LoginContainer from './LoginContainer'
import TestRenderer from 'react-test-renderer'

test('[LoginContainer renders correctly]', () => {
    const testRenderer = TestRenderer.create(<LoginContainer />)
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
})

test('[LoginContainer renders correctly after hitting login]', () => {
    const testRenderer = TestRenderer.create(<LoginContainer />)
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root
    let loginButton = testInstance.findByProps({id: 'loginBtn'})
    loginButton.props.onClick({})

    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
})