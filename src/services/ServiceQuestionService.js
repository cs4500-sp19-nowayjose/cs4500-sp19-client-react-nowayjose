export default class ServiceQuestionService {
    static instance = null;
    // static host = 'http://localhost:8080'
    static host = 'https://cs4500-sp19-nowayjose.herokuapp.com'
    static getInstance() {
        if(ServiceQuestionService.instance === null) {
            ServiceQuestionService.instance = new ServiceQuestionService()
        }
        return this.instance
    }
    findServiceQuestionsForService = id =>
        fetch(`${ServiceQuestionService.host}/api/service_question/byService/${id}`)
            .then(response => response.json())
    findServiceQuestionById = id =>
        fetch(`${ServiceQuestionService.host}/api/service_question/${id}`)
            .then(response => response.json())
    findAllServiceQuestions = () =>
        fetch(`${ServiceQuestionService.host}/api/service_question`)
            .then(response => response.json())
    delete = id =>
        fetch(`${ServiceQuestionService.host}/api/service_question/${id}`, {method: "DELETE"})
            .then(response => {
                console.log(response);
                return;
            })
    findServiceQuestionByCriteria = (body) =>
        fetch(`${ServiceQuestionService.host}/api/service_question/filter`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }).then(response => response.json())
}
