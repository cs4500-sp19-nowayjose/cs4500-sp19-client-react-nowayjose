import React from 'react'
import ServiceQuestionService from '../services/ServiceQuestionService'
class ServiceQuestions extends React.Component {
    constructor(props) {
        super(props)
        this.serviceQuestionService = ServiceQuestionService.getInstance()
        this.state = {
            serviceQuestions: []
        }
    }
    componentDidMount() {
        this.serviceQuestionService
            .findAllServiceQuestions()
            .then(serviceQuestions =>
                this.setState({
                    serviceQuestions: serviceQuestions
                })
            )
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
                                  <span onClick={() => this.serviceQuestionService.delete(serviceQuestion.id)}>X</span>
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
