import React from 'react'
import FAQAnswersDetails from './FAQAnswersDetails'
import FAQAnswerService from '../services/FAQAnswerService'

class FAQAnswersDetailsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.faqAnswerService = FAQAnswerService.getInstance()
        this.state = {
            faqAnswers: [],
            username: "Username",
            question: "Question",
            answer: "Answer",
            id: -1
        }
        this.handleAnswerChange = this.handleAnswerChange.bind(this)
        this.changeFaqAnswer = this.changeFaqAnswer.bind(this)
    }

    componentDidMount() {
        this.faqAnswerService
            .findAllFAQAnswers()
            .then(faqAnswers => {
                console.log(this.props)
                this.faqAnswerService.findFAQAnswerById(this.props.match.params.id)
                    .then(faq => {
                        this.setState({
                            faqAnswers: faqAnswers,
                            id: faq.id,
                            username: faq.username,
                            question: faq.question,
                            answer: faq.answer
                        })
                    })
            })
    }

    handleAnswerChange(event) {
        this.setState({
            answer: event.target.value
        })
    }

    changeFaqAnswer(e) {
        var newId = e.target.value
        this.faqAnswerService.findFAQAnswerById(newId)
            .then(faq => {
                this.setState({
                    id: newId,
                    username: faq.username,
                    question: faq.question,
                    answer: faq.answer
                })
            })
    }

    render() {
        return (
            <FAQAnswersDetails
                answer={this.state.answer}
                username={this.state.username}
                question={this.state.question}
                faqAnswers={this.state.faqAnswers}
                id={this.state.id}
                handleAnswerChange={this.handleAnswerChange}
                changeFaqAnswer={this.changeFaqAnswer} />
        )
    }
}

export default FAQAnswersDetailsContainer