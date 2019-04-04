import serviceCategoryMockData from '../data/service-categories.mock.json'

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
  // mock findAllServiceForCategory
  if (url.search(/\/api\/categories\/\d+/) !== -1) {
    const categoryId = parseInt(url.slice(url.search(/\/\d+\b/) + 1));
    returnData.json = function() {
      return serviceCategoryMockData.filter(({ id }) => id === categoryId)[0]
    }
  // mock findAllServiceCategories
  } else if (url.indexOf('api/categories') !== -1) {
    returnData.json = function() {
      return serviceCategoryMockData
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
//   const { title, description } = JSON.parse(body);
//   // mock findServiceQuestionByCriteria
//   if (url.indexOf('api/service_question/filter') !== -1) {
//     returnData.json = function() {
//       return serviceQuestionMockData.filter(q => {
//         return q.title.indexOf(title || '') !== -1 && q.description.indexOf(description || '') !== -1
//       })
//     }
//   }
  return new Promise(resolve => resolve(returnData));
}

export default setUp;