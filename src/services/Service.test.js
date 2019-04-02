import ServiceService from './ServiceService'
import setUp from './ServiceService.mock.js'
const Service = ServiceService.getInstance()

beforeAll(function() {
    setUp()
})

test('fetch all services', function() {
    return Service.findAllServices()
        .then(response => {
            expect(response.length).toBe(3)
            expect(response[0].id).toBe(1)
            expect(response[1].id).toBe(2)
        })
})

test('delete a service', function() {
    return Service.deleteService(1)
        .then(response => {
            expect(response).toBeUndefined()
        })
})
