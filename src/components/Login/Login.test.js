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

test('render inputs correctly', () => {
    const renderer = TestRenderer.create(<Login 
        handleChange={() => {}}
        handleLogin={() => {}}
    />)

    const testInstance = renderer.root
    expect(testInstance.findByProps({id: 'username'})).toBeDefined()
    expect(testInstance.findByProps({id: 'password'})).toBeDefined()
})

test('render inputs correctly after input changes', () => {
    const renderer = TestRenderer.create(<Login 
        handleChange={() => {}}
        handleLogin={() => {}}
    />)

    const testInstance = renderer.root
    testInstance.findByProps({id: 'username'}).props.onChange()
    expect(testInstance.findByProps({id: 'username'})).toBeDefined()
    expect(testInstance.findByProps({id: 'password'})).toBeDefined()
})