import serviceMockData from '../data/services.mock.json'

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
    // mock findServiceById
    if (url.search(/\/api\/services\/\d+/) !== -1) {
        const questionId = parseInt(url.slice(url.search(/\/\d+\b/) + 1));
        returnData.json = function() {
            return serviceMockData.filter(({ id }) => id === questionId)[0]
        }
        // mock findAllServices
    } else if (url.indexOf('api/services') !== -1) {
        returnData.json = function() {
            return serviceMockData
        }
    }
    return new Promise(resolve => resolve(returnData))
}

function handleDelete(url) {
    // delete is a void function
    return new Promise(resolve => resolve());
}

export default setUp;