export default class FAQAnswerService {
    baseurl = "http://localhost:8080"
    static instance = null;
    static getInstance() {
        if(FAQAnswerService.instance === null) {
            FAQAnswerService.instance = new FAQAnswerService()
        }
        return this.instance
    }

    findFAQAnswerById = id =>
        fetch(this.baseurl + `/api/faq-answers/${id}`)
            .then(response => response.json())

    findAllFAQAnswers = () =>
        fetch(this.baseurl + "/api/faq-answers")
            .then(response => response.json())
    
    createFAQAnswer(faqAnswer) {
        return fetch(this.baseurl + "/api/faq-answers", {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(faqAnswer)
        })
        .then(response => response.json())
    }

    deleteFAQAnswer(faqAnswer) {
        return fetch(this.baseurl + "/api/faq-answers/" + faqAnswer.id, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    updateFAQAnswer(faqAnswer) {
        return fetch(this.baseurl + "/api/faq/" + faqAnswer.id, {
            method: 'put',
            body: JSON.stringify(faqAnswer),
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(function (response) {
            return response.json()
        })
    }
}