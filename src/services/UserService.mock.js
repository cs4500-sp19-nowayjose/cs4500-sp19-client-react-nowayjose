import userMockData from '../data/users.mock.json'

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
                    return handlePost(url)
                default:
                    return { "default": "default" }
            }
        });
}

function handleGet(url) {
    const returnData = {};
    // mock findUserById
    if (url.search(/\/api\/users\/\d+/) !== -1) {
        const userId = parseInt(url.slice(url.search(/\/\d+\b/) + 1));
        returnData.json = function() {
            return userMockData.filter(({ id }) => id === userId)[0];
        }
        // mock findAllUsers
    } else if (url.indexOf('api/users/') !== -1) {
        returnData.json = function() {
            return userMockData;
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

export default setUp;
