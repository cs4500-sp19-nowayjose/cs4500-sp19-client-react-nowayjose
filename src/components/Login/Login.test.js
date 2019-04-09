import React from 'react'
import TestRenderer from 'react-test-renderer'
import Login from './Login'

test('render login button correctly', () => {
    const renderer = TestRenderer.create(<Login 
        handleChange={() => {}}
        handleLogin={() => {}}
    />)

    const testInstance = renderer.root
    expect(testInstance.findByProps({id: 'loginBtn'})).toBeDefined()
})