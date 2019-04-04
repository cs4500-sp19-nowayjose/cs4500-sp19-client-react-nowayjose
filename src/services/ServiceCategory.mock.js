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



export default setUp;