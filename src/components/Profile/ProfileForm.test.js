import React from 'react'
import TestRenderer from 'react-test-renderer'
import ProfileForm from './ProfileForm'

test('renders with correct values in form fields', () => {
		var user = {
				"id": 1,
				"username": "dduck",
				"firstName": "donald",
				"lastName": "duck",
				"dob": "1-1-2001",
				"addStreet": "A",
				"addCity": "A",
				"addState": "AL",
				"addZip": 1,
		}
		
    const renderer = TestRenderer.create(
				<ProfileForm
						user = {user}
						firstName = {user.firstName}
						lastName = {user.lastName}
						dobMonth = {user.dob.split("-")[1]h}
						dobDay = {user.dob.split("-")[2]
						dobYear = {user.dob.split("-")[0]}
						addStreet = {user.addStreet}
						addCity = {user.addCity}
						addState = {user.addState}
						addZip = {user.addZip}
						username = {user.username}

						handleChange = {}
						handleUpdate = {}
    />)

    const testInstance = renderer.root
    expect(testInstance.findByProps({id: 'firstName'})).toBeDefined()
    expect(testInstance.findByProps({id: 'firstName'}).value).toBe(user.firstName)
    expect(testInstance.findByProps({id: 'lastName'})).toBeDefined()
    expect(testInstance.findByProps({id: 'lastName'}).value).toBe(user.lastName)
    expect(testInstance.findByProps({id: 'dobMonth'})).toBeDefined()
    expect(testInstance.findByProps({id: 'dobMonth'}).value).toBe(user.dobMonth)
    expect(testInstance.findByProps({id: 'dobDay'})).toBeDefined()
    expect(testInstance.findByProps({id: 'dobDay'}).value).toBe(user.dobDay)
    expect(testInstance.findByProps({id: 'dobYear'})).toBeDefined()
    expect(testInstance.findByProps({id: 'dobYear'}).value).toBe(user.dobYear)
    expect(testInstance.findByProps({id: 'addStreet'})).toBeDefined()
    expect(testInstance.findByProps({id: 'addStreet'}).value).toBe(user.addStreet)
    expect(testInstance.findByProps({id: 'addCity'})).toBeDefined()
    expect(testInstance.findByProps({id: 'addCity'}).value).toBe(user.addCity)
    expect(testInstance.findByProps({id: 'addState'})).toBeDefined()
    expect(testInstance.findByProps({id: 'addState'}).value).toBe(user.addState)
    expect(testInstance.findByProps({id: 'addZip'})).toBeDefined()
    expect(testInstance.findByProps({id: 'addZip'}).value).toBe(user.addZip)
    expect(testInstance.findByProps({id: 'username'})).toBeDefined()
    expect(testInstance.findByProps({id: 'username'}).value).toBe(user.username)
})

test('renders with correct values in form fields', () => {
		var user = {
				"id": 1,
				"username": "dduck",
				"firstName": "donald",
				"lastName": "duck",
				"dob": "1-1-2001",
				"addStreet": "A",
				"addCity": "A",
				"addState": "AL",
				"addZip": 1,
		}
		
    const renderer = TestRenderer.create(
				<ProfileForm
						user = {user}
						firstName = {user.firstName}
						lastName = {user.lastName}
						dobMonth = {user.dob.split("-")[1]h}
						dobDay = {user.dob.split("-")[2]
						dobYear = {user.dob.split("-")[0]}
						addStreet = {user.addStreet}
						addCity = {user.addCity}
						addState = {user.addState}
						addZip = {user.addZip}
						username = {user.username}

						handleChange = {}
						handleUpdate = {}
    />)

    const testInstance = renderer.root
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
})