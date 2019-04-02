import UserService from './UserService'

test('test find all', async () => {
    const Service = UserService.getInstance()
    const users = await Service.findAllUsers()
    expect(users.length).toBe(5)
})

test('test find by id', async () => {
    const Service = UserService.getInstance()
    const user1 = {
        username: 'jsmith',
        firstName: 'Joe',
        lastName: "Smith"
    }
    const user2 = await Service.createUser(user1)
    const user3 = await Service.findUserById(user2.id)
    expect(user3.username).toBe(user1.username)
    expect(user3.firstName).toBe(user1.firstName)
    expect(user3.lastName).toBe(user1.lastName)
    await Service.deleteUser(user2.id)
})

test('test create', async () => {
    const Service = UserService.getInstance()
    const user1 = {
        username: 'jsmith',
        firstName: 'Joe',
        lastName: "Smith"
    }
    const user2 = await Service.createUser(user1)
    expect(user1.username).toBe(user2.username)
    expect(user1.firstName).toBe(user2.firstName)
    expect(user1.lastName).toBe(user2.lastName)

    await Service.deleteUser(user2.id)
})

test('test delete', async () => {
    const Service = UserService.getInstance()
    const user1 = {
        username: 'jsmith',
        firstName: 'Joe',
        lastName: "Smith"
    }
    const user2 = await Service.createUser(user1)
    await Service.deleteUser(user2.id)
})

test('test update', async () => {
    const Service = UserService.getInstance()
    const user1 = {
        username: 'jsmith',
        firstName: 'Joe',
        lastName: "Smith"
    }
    const user2 = await Service.createUser(user1)

    user2.username = 'joseph_smith'
    user2.firstName = 'Joseph'

    const user3 = await Service.updateUser(user2)

    expect(user3.username).toBe(user2.username)
    expect(user3.firstName).toBe(user2.firstName)

    await Service.deleteUser(user2.id)
})