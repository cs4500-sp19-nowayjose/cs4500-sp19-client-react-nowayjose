import React from 'react'
import ServiceAnswerService from '../../services/ServiceAnswerService'
import ServiceAnswerDetailsForm from './ServiceAnswerDetailsForm'

class ServiceAnswerDetails extends React.Component {
    constructor(props) {
        super(props)
        this.serviceAnswerService = ServiceAnswerService.getInstance()
        this.state = {
            serviceAnswers: [],
            serviceAnswer: {
                choiceAnswer: '',
                id: 1
            }
        }
    }
    componentDidMount() {
        this.serviceAnswerService
            .findAllServiceAnswers()
            .then(serviceAnswers => {
                    this.props.history.push("/admin/service-answers/" + serviceAnswers[0].id)
                    this.setState({
                        serviceAnswers: serviceAnswers,
                        serviceAnswer: serviceAnswers[0]
                    })
                }
            )
    }
    selectServiceAnswer = id =>
        this.serviceAnswerService
            .findServiceAnswerById(id)
            .then(serviceAnswer => {
                    this.props.history.push("/admin/service-answers/" + id)
                    this.setState({
                        serviceAnswer: serviceAnswer
                    })
                }
            )
    render() {
      return <ServiceAnswerDetailsForm
          serviceAnswers={this.state.serviceAnswers}
          serviceAnswer={this.state.serviceAnswer}
          selectServiceAnswer={this.selectServiceAnswer} />

    }
}

export default ServiceAnswerDetails
