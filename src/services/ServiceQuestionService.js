export default class ServiceQuestionService {
    static instance = null;
    static getInstance() {
        if(ServiceQuestionService.instance === null) {
            ServiceQuestionService.instance = new ServiceQuestionService()
        }
        return this.instance
    }
    findServiceQuestionById = id =>
        fetch(`https://cs4500-sp19-nowayjose.herokuapp.com/api/service_question/${id}`)
            .then(response => response.json())
    findAllServiceQuestions = () =>
        fetch("https://cs4500-sp19-nowayjose.herokuapp.com/api/service_question")
            .then(response => response.json())
    findServiceQuestionByCriteria = (body) =>
        fetch("https://cs4500-sp19-nowayjose.herokuapp.com/api/service_question/filter", {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }).then(response => response.json())
}
