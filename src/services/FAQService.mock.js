import frequentlyAskedQuestionData from '../data/frequentlyAskedQuestion.mock.json'

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
    if (url.search(/\/api\/faqs\/\d+/) !== -1) {
      const qid = parseInt(url.slice(url.search(/\/\d+\b/) + 1));
      returnData.json = function() {
        return frequentlyAskedQuestionData.filter(({ id }) => id === qid)[0]
      }
    } else if (url.includes("/faqs")) {
      returnData.json = function() {
        return frequentlyAskedQuestionData
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
    return new Promise(resolve => resolve(returnData));
  }

export default setUp 