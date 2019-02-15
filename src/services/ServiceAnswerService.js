export default class ServiceAnswerService {
    static instance = null
    static url = process.env.NODE_ENV || process.env.NODE_ENV === 'development' ?
        'http://localhost:8080/' :
        'https://cs4500-sp19-nowayjose.herokuapp.com/'
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
}