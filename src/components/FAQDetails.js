import React from 'react'
import FAQService from '../services/FAQService'
class FAQDetails extends React.Component {
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
    render() {
        return(
            <div>
                <h3>FAQ Details</h3>
                <select
                    value={this.state.faq.id}
                    onChange={(e) => this.selectFAQ(e.target.value)}
                    className="form-control">
                    {
                        this.state.faqs
                            .map(faq =>
                                <option
                                    value={faq.id}
                                    key={faq.id}>
                                    {faq.id}
                                </option>
                            )
                    }
                </select>
                <br/>
                <input
                    onChange={() => {}}
                    className="form-control"
                    value={this.state.faq.title}/>
                <br/>
                <input
                    onChange={() => {}}
                    className="form-control"
                    value={this.state.faq.question}/>
            </div>
        )
    }
}

export default FAQDetails