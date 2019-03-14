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
            updateId: -1,
            recordsNumber: 10,
            page: 1,
        }

        this.editFAQ = this.editFAQ.bind(this)
        this.deleteFAQ = this.deleteFAQ.bind(this)
        this.createFAQ = this.createFAQ.bind(this)
        this.updateFAQ = this.updateFAQ.bind(this)
        this.getPageNumbers = this.getPageNumbers.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleQuestionChange = this.handleQuestionChange.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this)
        this.handleRecordsNumberChange = this.handleRecordsNumberChange.bind(this)

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
  
    getPageNumbers() {
        var nums = [];
        for(var i = Math.max(1, this.state.page - 3); i < Math.min(this.state.page + 3, this.state.faqs.length/this.state.recordsNumber + 1); i++) {
            nums.push(i)
        }
        return nums
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

    handleRecordsNumberChange(event) {
        this.setState({
            recordsNumber: event.target.value != "All" ? event.target.value : this.state.faqs.length
        })
    }

    handlePageChange(event) {
        var newPage = this.state.page;
        if(event.target.value == "Previous") newPage--;
        else if(event.target.value == "Next") newPage++;
        else newPage = event.target.innerHTML;
        
        this.setState({
            page: newPage
        })
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
                            <th> <button type="button" onClick={this.updateFAQ} className="btn btn-primary btn-block">Save</button> </th>
                            <th> <button type="button" onClick={this.createFAQ} className="btn btn-primary btn-block">Create</button> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.faqs
                                .slice((this.state.page-1)*this.state.recordsNumber,
                                        Math.min(this.state.page*this.state.recordsNumber,
                                                this.state.faqs.length))
                                .map(faq =>
                                    <tr key={faq.id}>
                                        <td>{faq.title}</td>
                                        <td>{faq.question}</td>
                                        <th> <button type="button" onClick={() => this.editFAQ(faq)} className="btn btn-primary btn-block">Edit</button>  </th>
                                        <th> <button type="button" onClick={() => this.deleteFAQ(faq)} className="btn btn-primary btn-block">Delete</button>    </th>
                                    </tr>
                                )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                <select onChange={this.handleRecordsNumberChange} value={this.state.recordsNumber}>
                                    <option>10</option>
                                    <option>25</option>
                                    <option>50</option>
                                    <option>100</option>
                                    <option>All</option>
                                </select>
                            </td>
                            <td>
                                <button onClick={this.handlePageChange} disabled={this.state.page == 1}>Previous</button>
                                {
                                    this.getPageNumbers().map(num =>
                                        <button key={num} onClick={this.handlePageChange}>{num}</button>
                                    )
                                }
                                <button onClick={this.handlePageChange} disabled={this.state.page == this.state.faqs.length}>Next</button>
                            </td>
                            <td><button>Search</button></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default FAQs