import ServiceQuestionService from './ServiceQuestionService'
import setUp from './ServiceQuestion.mock.js'
const Service = ServiceQuestionService.getInstance()

beforeAll(function() {
  setUp()
})

test('fetch by id', function() {
  return Service.findServiceQuestionById(1)
    .then(response => {
      expect(response).toBeDefined()
      expect(response.title).toBe("What size houses can you clean (in square feet)?")
      expect(response.service_id).toBe(902)
    })
})

test('fetch all questions', function() {
  return Service.findAllServiceQuestions()
    .then(response => {
      expect(response.length).toBe(2)
      expect(response[0].id).toBe(1)
    })
})

test('delete a question', function() {
  return Service.delete(1)
    .then(response => {
      expect(response).toBeUndefined()
    })
})

test('filtering title and description should return a filtered list', function() {
  return Service.findServiceQuestionByCriteria({ title: 'size', description: 'min' })
    .then(response => {
      expect(response.length).toBe(1);
      expect(response[0].title.includes('size')).not.toBe(-1)
    })
})

test('filtering only title should return a filtered list', function() {
  return Service.findServiceQuestionByCriteria({ title: 'you', })
    .then(response => {
      expect(response.length).toBe(2);
      expect(response[0].title.includes('you')).not.toBe(-1)
    })
})

test('filtering only description should return a filtered list', function() {
  return Service.findServiceQuestionByCriteria({ description: 'house', })
    .then(response => {
      expect(response.length).toBe(1);
      expect(response[0].description.includes('house')).not.toBe(-1)
    })
})