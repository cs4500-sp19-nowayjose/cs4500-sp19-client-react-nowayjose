export default class ServiceAnswerService {
    static instance = null
    static url = 'https://cs4500-sp19-nowayjose.herokuapp.com/'
    static url = 'http://localhost:8080/'
    static getInstance() {
        if(ServiceAnswerService.instance === null) {
            ServiceAnswerService.instance = new ServiceAnswerService()
        }
        return this.instance
    }
    findServiceAnswerById = id =>
        fetch(`${ServiceAnswerService.url}api/service_question_answers/${id}`)
            .then(response => response.json())
    findAllServiceAnswers = () =>
        fetch(`${ServiceAnswerService.url}api/service_question_answers`)
            .then(response => response.json())
    delete = id =>
        fetch(`${ServiceAnswerService.url}api/service_question_answers/${id}`, {method: "DELETE"})
    create = body =>
        fetch(`${ServiceAnswerService.url}api/service_question_answers`,
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          })
}
