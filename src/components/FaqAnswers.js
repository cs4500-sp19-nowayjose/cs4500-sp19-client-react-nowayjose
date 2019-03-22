import React from 'react'
import FAQAnswerService from '../services/FAQAnswerService'
class FAQAnswers extends React.Component {
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
            <div>
                <h3>FAQ Answers</h3>
                <table className="table">
                    <thread>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Question</th>
                            <th scope="col">Answer</th>
                            <th>&nbsp;</th>
                        </tr>
                        <tr>
                            <th> <input type="text" onChange={this.handleUsernameChange} value={this.state.username} placeholder="username"/></th>
                            <th> <input type="text" onChange={this.handleQuestionChange} value={this.state.question} placeholder="question"/></th>
                            <th> <input type="text" onChange={this.handleAnswerChange} value={this.state.answer} placeholder="answer"/></th>
                            <th> <button type="button" onClick={this.updateFAQAns} class="btn btn-primary btn-block">Save</button> </th>
                            <th> <button type="button" onClick={this.createFAQAns} class="btn btn-primary btn-block">Create</button> </th>
                        </tr>
                    </thread>
                    <tbody>
                    {
                        this.state.faqAnswers
                            .map(faqAnswer =>
                                <tr key={faqAnswer.id}>
                                    <td>{faqAnswer.username}</td>
                                    <td align="center">{faqAnswer.question}</td>
                                    <td align="center">{faqAnswer.answer}</td>
                                    <th> <button type="button" onClick={(e) => this.editFAQAns(faqAnswer, e)} class="btn btn-primary btn-block">Edit</button> </th>
                                    <th> <button type="button" onClick={(e) => this.deleteFAQAns(faqAnswer, e)} class="btn btn-primary btn-block">Delete</button> </th>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default FAQAnswers