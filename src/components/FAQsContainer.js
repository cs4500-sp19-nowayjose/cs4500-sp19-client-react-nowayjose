import React from 'react'
import FAQService from '../services/FAQService'
import FAQsList from './FAQsList'

class FAQsContainer extends React.Component {
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
        this.selectFAQ = this.selectFAQ.bind(this)
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
    
    selectFAQ(id) {
        this.props.history.push('/admin/faqs/' + id)
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
        if(event.target.innerHTML == "Previous") newPage = Math.max(newPage - 1, 1);
        else if(event.target.innerHTML == "Next") newPage = Math.min(newPage + 1, Math.ceil(this.state.faqs.length/this.state.recordsNumber));
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
  
    render () {
        return(
            <FAQsList
                faqs={this.state.faqs}
                title={this.state.title}
                question={this.state.question}
                updateId={this.state.updateId}
                recordsNumber={this.state.recordsNumber}
                page={this.state.page}
                filter={this.state.filter}
          
                editFAQ = {this.editFAQ}
                deleteFAQ = {this.deleteFAQ}
                createFAQ = {this.createFAQ}
                updateFAQ = {this.updateFAQ}
                getPageNumbers = {this.getPageNumbers}
                passesFilter = {this.passesFilter}
                selectFAQ = {this.selectFAQ}
                handleTitleChange = {this.handleTitleChange}
                handleQuestionChange = {this.handleQuestionChange}
                handlePageChange = {this.handlePageChange}
                handleRecordsNumberChange = {this.handleRecordsNumberChange}
                handleFilterChange = {this.handleFilterChange}
            />
        )
    }
}

export default FAQsContainer