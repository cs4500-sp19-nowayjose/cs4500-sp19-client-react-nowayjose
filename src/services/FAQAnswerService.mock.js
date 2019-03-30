import frequentlyAskedAnswers from '../data/frequentlyAskedAnswers.mock.json'

function setUp() {
    global.fetch = jest.fn()
        .mockImplementation((url, config) => {
            if (!config) {
                return handleGet(url);
            }
            const {method, body} = config;
            switch(method.toUpperCase()) {
                case "DELETE":
                    return handleDelete(url)
                case "POST":
                    return handlePost(url, body)
                default:
                    return {"default": "default"}
            }
        });
}

function handleGet(url) {
    const returnData = {};
    if (url.search(/\/api\/faq-answers\/d+/) !== -1) {
        const aid = parseInt(url.slice(url.search(/\/d+\b/) + 1))
        returnData.json = function() {
            return frequentlyAskedAnswers.filter(({id}) => id === aid)[0]
        }
    }
    else if (url.includes("/faq-answers")) {
        returnData.json = function() {
            return frequentlyAskedAnswers
        }
    }
    return new Promise(resolve => resolve(returnData))
}

function handleDelete(url) {
    return new Promise(resolve => resolve());
}

function handlePost(url, body) {
    let ans = JSON.parse(body);
    ans.id = (new Date()).getTime();
    frequentlyAskedAnswers.push(ans)
    return new Promise((resolve, reject) => {
        resolve({json: function() {
            return frequentlyAskedAnswers
        }})
    })
}

export default setUp