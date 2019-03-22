import serviceQuestionMockData from '../data/serviceQuestions.mock.json'

function setUp() {
  global.fetch = jest.fn()
    .mockImplementation((url, config) => {
      if (!config) {
        return handleGet(url);
      }
      const { method, body } = config;
      switch (method.toUpperCase()) {
        case "DELETE":
          return handleDelete(url)
        case "POST":
          return handlePost(url, body)
        default:
          return { "default": "default" }
      }
    });
}

function handleGet(url) {
  const returnData = {};
  // mock findServiceQuestionById
  if (url.search(/\/api\/service_question\/\d+/) !== -1) {
    const questionId = parseInt(url.slice(url.search(/\/\d+\b/) + 1));
    returnData.json = function() {
      return serviceQuestionMockData.filter(({ id }) => id === questionId)[0]
    }
  // mock findAllServiceQuestions
  } else if (url.indexOf('api/service_question') !== -1) {
    returnData.json = function() {
      return serviceQuestionMockData
    }
  }
  return new Promise(resolve => resolve(returnData))
}

function handleDelete(url) {
  // delete is a void function
  return new Promise(resolve => resolve());
}

function handlePost(url, body) {
  const returnData = {};
  const { title, description } = JSON.parse(body);
  // mock findServiceQuestionByCriteria
  if (url.indexOf('api/service_question/filter') !== -1) {
    returnData.json = function() {
      return serviceQuestionMockData.filter(q => {
        return q.title.indexOf(title || '') !== -1 && q.description.indexOf(description || '') !== -1
      })
    }
  }
  return new Promise(resolve => resolve(returnData));
}

export default setUp;