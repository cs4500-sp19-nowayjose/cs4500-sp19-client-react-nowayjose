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

    editFAQ(faq) {
        this.setState({
            title: faq.title,
            question: faq.question,
            updateId: faq.id
        })
    }

    deleteFAQ(faq) {
        this.faqService.deleteFAQ(faq).then(() => 
        this.faqService.findAllFAQs()
        .then(faqs =>
            this.setState({
                faqs: faqs
            })));
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
                                    <tr key={faq.id}>
                                        <td>{faq.title}</td>
                                        <td>{faq.question}</td>
                                        <th> <button type="button" onClick={() => this.editFAQ(faq)} class="btn btn-primary btn-block">Edit</button>  </th>
                                        <th> <button type="button" onClick={() => this.deleteFAQ(faq)} class="btn btn-primary btn-block">Delete</button>    </th>
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