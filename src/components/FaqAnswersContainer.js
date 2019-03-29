import React from 'react'
import FAQAnswers from './FaqAnswers'
import FAQAnswerService from '../services/FAQAnswerService'

class FAQAnswersContainer extends React.Component {
    constructor(props) {
        super(props)
        this.faqAnswerService = FAQAnswerService.getInstance()
        this.state = {
            faqAnswers: [],
            username: 'Username',
            question: 'Question',
            answer: 'New answer',
            updateId: -1
        }
        this.editFAQAns = this.editFAQAns.bind(this)
        this.deleteFAQAns = this.deleteFAQAns.bind(this)
        this.createFAQAns = this.createFAQAns.bind(this)
        this.updateFAQAns = this.updateFAQAns.bind(this)
        this.handleAnswerChange = this.handleAnswerChange.bind(this)
        this.handleQuestionChange = this.handleQuestionChange.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
    }

    componentDidMount() {
        this.faqAnswerService
            .findAllFAQAnswers()
            .then(faqAnswers =>
                this.setState({
                    faqAnswers: faqAnswers
                })
            )
    }

    editFAQAns(ans, e) {
        e.stopPropagation();
        this.setState({
            username: ans.username,
            question: ans.question,
            answer: ans.answer,
            updateId: ans.id
        })
    }

    deleteFAQAns(ans, e) {
        e.stopPropagation();
        this.faqAnswerService.deleteFAQAnswer(ans).then(() => 
        this.faqAnswerService.findAllFAQAnswers()
        .then(faqAnswers =>
            this.setState({
                faqAnswers: faqAnswers
            })));
    }

    createFAQAns() {
        var newFAQAns = {
            username: this.state.username,
            question:this.state.question,
            answer:this.state.answer
        };

        this.faqAnswerService.createFAQAnswer(newFAQAns).then(() => 
        this.faqAnswerService.findAllFAQAnswers()
        .then(faqAnswers =>
            this.setState({
                faqAnswers: faqAnswers
            })));
    }

    updateFAQAns() {
        var updatedFaqAns = {
            username: this.state.username,
            question: this.state.question,
            answer: this.state.answer,
            id: this.state.updateId
        };

        this.faqAnswerService.updateFAQAnswer(updatedFaqAns).then(() => 
        this.faqAnswerService.findAllFAQAnswers()
        .then(faqAnswers =>
            this.setState({
                faqAnswers: faqAnswers
            })));
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleQuestionChange(event) {
        this.setState({
            question: event.target.value
        })
    }

    handleAnswerChange(event) {
        this.setState({
            answer: event.target.value
        })
    }

    render() {
        return(
            <FAQAnswers
                faqAnswers={this.state.faqAnswers}
                username={this.state.username}
                question={this.state.question}
                answer={this.state.answer}
                updateId={this.state.updateId}
                handleAnswerChange={this.handleAnswerChange}
                handleQuestionChange={this.handleQuestionChange}
                handleUsernameChange={this.handleUsernameChange}
                createFAQAns={this.createFAQAns}
                deleteFAQAns={this.deleteFAQAns}
                updateFAQAns={this.updateFAQAns}
                editFAQAns={this.editFAQAns}
            />
        )
    }
}