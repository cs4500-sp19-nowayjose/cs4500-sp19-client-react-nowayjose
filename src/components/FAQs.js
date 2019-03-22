import React from 'react'
import FAQService from '../services/FAQService'

class FAQs extends React.Component {
    constructor(props) {
        super(props)
        this.faqService = FAQService.getInstance()
        this.state = {
            faqs: [],
            title: 'New title',
            question: 'New question',
            updateId: -1
        }

        this.editFAQ = this.editFAQ.bind(this)
        this.deleteFAQ = this.deleteFAQ.bind(this)
        this.createFAQ = this.createFAQ.bind(this)
        this.updateFAQ = this.updateFAQ.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleQuestionChange = this.handleQuestionChange.bind(this)
        this.selectFAQ = this.selectFAQ.bind(this)

    }
    
    componentDidMount() {
        this.faqService
            .findAllFAQs()
            .then(faqs =>
                this.setState({
                    faqs: faqs
                })
            )
    }

    editFAQ(faq, e) {
        e.stopPropagation();
        this.setState({
            title: faq.title,
            question: faq.question,
            updateId: faq.id
        })
    }

    deleteFAQ(faq, e) {
        e.stopPropagation();
        this.faqService.deleteFAQ(faq).then(() => 
        this.faqService.findAllFAQs()
        .then(faqs =>
            this.setState({
                faqs: faqs
            })));
    }

    createFAQ() {
        var newFAQ = {
            title: this.state.title,
            question:this.state.question,
        };

        this.faqService.createFAQ(newFAQ).then(() => 
        this.faqService.findAllFAQs()
        .then(faqs =>
            this.setState({
                faqs: faqs
            })));
    }

    updateFAQ() {
        var updatedFaq = {
            title: this.state.title,
            question:this.state.question,
            id: this.state.updateId
        };

        this.faqService.updateFAQ(updatedFaq).then(() => 
        this.faqService.findAllFAQs()
        .then(faqs =>
            this.setState({
                faqs: faqs
            })));
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleQuestionChange(event) {
        this.setState({
            question: event.target.value
        })
    }

    selectFAQ(id) {
        this.props.history.push('/admin/faqs/' + id)
    }


    render() {
        return (
            <div>
                <h3>Frequently Asked Questions:</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Question</th>
                            <th>&nbsp;</th>
                        </tr>
                        <tr>
                            <th> <input type="text" onChange={this.handleTitleChange} value={this.state.title} placeholder="title" /> </th>
                            <th> <input type="text" onChange={this.handleQuestionChange} value={this.state.question} placeholder="question" /> </th>
                            <th> <button type="button" onClick={this.updateFAQ} class="btn btn-primary btn-block">Save</button> </th>
                            <th> <button type="button" onClick={this.createFAQ} class="btn btn-primary btn-block">Create</button> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.faqs
                                .map(faq =>
                                    <tr onClick={() => this.selectFAQ(faq.id)}  key={faq.id}>
                                        <td>{faq.title}</td>
                                        <td align="center">{faq.question}</td>
                                        <th> <button type="button" onClick={(e) => this.editFAQ(faq, e)} class="btn btn-primary btn-block">Edit</button>  </th>
                                        <th> <button type="button" onClick={(e) => this.deleteFAQ(faq, e)} class="btn btn-primary btn-block">Delete</button>    </th>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default FAQs