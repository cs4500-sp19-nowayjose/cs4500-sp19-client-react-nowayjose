import React from 'react'
import ServiceQuestionService from '../services/ServiceQuestionService'
class ServiceQuestions extends React.Component {
    constructor(props) {
        super(props)
        this.serviceQuestionService = ServiceQuestionService.getInstance()
        this.state = {
            serviceQuestions: [{
              id: 1288345,
              title: "Hi there"
            }]
        }
    }
    componentDidMount() {
        // this.serviceQuestionService
        //     .findAllServiceQuestions()
        //     .then(serviceQuestions =>
        //         this.setState({
        //             serviceQuestions: serviceQuestions
        //         })
        //     )
    }

    deleteQuestion(id) {
      this.serviceQuestionService.delete(id)
      this.setState(Object.assign(this.state, {
        serviceQuestions: this.state.serviceQuestions.filter(question => question.id != id)
      }))
    }

    render() {
        return(
            <div>
                <h3>Service Questions</h3>
                <table className="table">
                    <tbody>
                    {
                        this.state.serviceQuestions
                            .map(serviceQuestion =>
                                <tr key={serviceQuestion.id}>
                                    <td>
                                    to={`/admin/service-questions/${serviceQuestion.id}`}>
                                    {serviceQuestion.title}</td>
                                  <span onClick={() => this.deleteQuestion(serviceQuestion.id)}>X</span>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ServiceQuestions
