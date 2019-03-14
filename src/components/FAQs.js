import React from 'react'
import FAQService from '../services/FAQService'
class FAQs extends React.Component {
    constructor(props) {
        super(props)
        this.faqService = FAQService.getInstance()
        this.state = {
            faqs: [],
            title: '',
            question: '',
            updateId: -1,
            recordsNumber: 10,
            page: 1,
            filter: {},
        }

        this.editFAQ = this.editFAQ.bind(this)
        this.deleteFAQ = this.deleteFAQ.bind(this)
        this.createFAQ = this.createFAQ.bind(this)
        this.updateFAQ = this.updateFAQ.bind(this)
        this.getPageNumbers = this.getPageNumbers.bind(this);
        this.passesFilter = this.passesFilter.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleQuestionChange = this.handleQuestionChange.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this)
        this.handleRecordsNumberChange = this.handleRecordsNumberChange.bind(this)
        this.handleFilterChange = this.handleFilterChange.bind(this)

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
  
    passesFilter(faq) {
        var pass = true;
        for(var i = 0; i < Object.keys(this.state.filter).length; i++) {
          var prop = Object.keys(this.state.filter)[i];
          pass &= faq[prop].toLowerCase().indexOf(this.state.filter[prop].toLowerCase()) >= 0;
        }
        return pass;
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
  
    handleFilterChange(event) {
        var newFilter = {};
        if(this.state.filter.question == undefined && this.state.filter.title == undefined) {
          if(this.state.question != "") newFilter.question = this.state.question;
          if(this.state.title != "") newFilter.title = this.state.title;
        }
        else {
          this.state.title = "";
          this.state.question = "";
        }

        this.setState({
          filter: newFilter
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
                            <th> <input type="text" onChange={this.handleTitleChange} value={this.state.title} placeholder="Title" /> </th>
                            <th> <input type="text" onChange={this.handleQuestionChange} value={this.state.question} placeholder="Question" /> </th>
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
                                .filter(this.passesFilter)
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
                                <button onClick={this.handlePageChange} disabled={this.state.page == Math.round(this.state.faqs.length/this.state.recordsNumber)}>Next</button>
                            </td>
                            <td>
                                <button onClick={this.handleFilterChange}>
                                    {    
                                        (this.state.filter.question == undefined && this.state.filter.title == undefined) ? 'Search' : 'Clear Search'
                                    }
                                </button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default FAQs