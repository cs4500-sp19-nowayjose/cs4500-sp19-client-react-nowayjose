import ServiceAnswerService from './ServiceAnswerService'
import setUp from './ServiceAnswer.mock.js'
const Service = ServiceAnswerService.getInstance()

beforeAll(function() {
  setUp()
})

test('fetch by id', function() {
  return Service.findServiceAnswerById(1)
    .then(response => {
      expect(response).toBeDefined()
      expect(response.id).toBe(1)
      expect(response.minRangeAnswer).toBe(600)
      expect(response.maxRangeAnswer).toBe(25000)
    })
})
