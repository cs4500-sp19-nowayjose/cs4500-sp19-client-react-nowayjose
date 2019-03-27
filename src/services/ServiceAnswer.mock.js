import serviceAnswerMockData from '../data/serviceAnswers.mock.json'

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
        default:
          return { "default": "default" }
      }
    });
}

function handleGet(url) {
  const returnData = {};
  // mock findServiceAnswerById
  if (url.search(/\/api\/service_question_answers\/\d+/) !== -1) {
    const questionId = parseInt(url.slice(url.search(/\/\d+\b/) + 1));
    returnData.json = function() {
      return serviceAnswerMockData.filter(({ id }) => id === questionId)[0];
    }
  // mock findAllServiceAnswers
  } else if (url.indexOf('api/service_question_answers') !== -1) {
    returnData.json = function() {
      return serviceAnswerMockData
    }
  }
  return new Promise(resolve => resolve(returnData))
}

function handleDelete(url) {
  // delete is a void function
  return new Promise(resolve => resolve());
}

export default setUp;
