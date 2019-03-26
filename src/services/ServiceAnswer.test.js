import ServiceAnswerService from './ServiceAnswerService'
import setUp from './ServiceAnswer.mock.js'
const Service = ServiceAnswerService.getInstance()

beforeAll(function() {
  setUp()
})

test('fetch all questions', function() {
  return Service.findAllServiceAnswers()
    .then(response => {
      expect(response.length).toBe(2)
      expect(response[0].id).toBe(1)
      expect(response[1].id).toBe(2)
    })
})

test('delete a question', function() {
  return Service.delete(1)
    .then(response => {
      expect(response).toBeUndefined()
    })
})
