export default class ServiceAnswerService {
    static instance = null
    static url = 'https://cs4500-sp19-nowayjose.herokuapp.com/'
    static getInstance() {
        if(ServiceAnswerService.instance === null) {
            ServiceAnswerService.instance = new ServiceAnswerService()
        }
        return this.instance
    }
    findServiceAnswerById = id =>
        fetch(`${this.url}api/service_question_answers"/${id}`)
            .then(response => response.json())
    findAllServiceAnswers = () =>
        fetch(`${this.url}api/service_question_answers"`)
            .then(response => response.json())
}