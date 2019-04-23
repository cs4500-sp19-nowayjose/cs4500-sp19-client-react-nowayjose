import React from 'react'
import FAQService from '../services/FAQService'
import FAQDetails from '../components/FAQDetails'

class FAQDetailsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.faqService = FAQService.getInstance()
        this.state = {
            faqs: [],
            faq: {
                choiceAnswer: '',
                id: 1
            }
        }
    }
    componentDidMount() {
        this.faqService
            .findAllFAQs()
            .then(faqs => {
                this.faqService.findFAQById(this.props.match.params.id).then(faq => {
                    this.setState({
                        faqs: faqs,
                        faq: faq
                    })
                })
            }
            )
    }

    selectFAQ = id =>
        this.faqService
            .findFAQById(id)
            .then(faq => {
                this.props.history.push("/admin/faqs/" + id)
                this.setState({
                    faq: faq
                })
            }
            )

    handleTitleChange(event) {
        var faq = this.state.faq
        faq.title = event.target.value
        this.setState({
            faq: faq
        })
    }

    handleQuestionChange(event) {
        var faq = this.state.faq
        faq.question = event.target.value
        this.setState({
            faq: faq
        })
    }



    render() {
        return (
            <FAQDetails
                faqs={this.state.faqs}
                faq={this.state.faq}
                selectFAQ={this.selectFAQ}
                create={this.createFAQ}
                update={this.updateFAQ}
                remove={this.deleteFAQ}
                handleTitleChange={this.handleTitleChange}
                handleQuestionChange={this.handleQuestionChange}
            />
        )
    }
}

export default FAQDetailsContainer