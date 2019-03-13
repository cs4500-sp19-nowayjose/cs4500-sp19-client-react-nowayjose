export default class FAQService {
    static instance = null;
    static getInstance() {
        if(FAQService.instance === null) {
            FAQService.instance = new FAQService()
        }
        return this.instance
    }
   
    findFAQById = id =>
        fetch(`https://cs4500-sp19-nowayjose.herokuapp.com/api/faqs/${id}`)
            .then(response => response.json())
    findAllFAQs = () =>
        fetch("https://cs4500-sp19-nowayjose.herokuapp.com/api/faqs")
            .then(response => response.json())

    createFAQ(faq) {
        return fetch('https://cs4500-sp19-nowayjose.herokuapp.com/api/faqs', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(faq)
        })
        .then(response => response.json())
    }

    deleteFAQ(faq) {
        return fetch('https://cs4500-sp19-nowayjose.herokuapp.com/api/faq/' + faq.id, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
            });
    }

    updateFAQ(faq) {
        return fetch('https://cs4500-sp19-nowayjose.herokuapp.com/api/faq/' + faq.id, {
            method: 'put',
            body: JSON.stringify(faq),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(function (response) {
                return response.json();
            });
    }
}