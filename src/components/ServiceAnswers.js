import React from 'react'
import ServiceAnswerService from '../services/ServiceAnswerService'
class ServiceAnswers extends React.Component {
    constructor(props) {
        super(props)
        this.serviceAnswerService = ServiceAnswerService.getInstance()
        this.state = {
            serviceAnswers: []
        }
    }

    componentDidMount() {
        this.serviceAnswerService
            .findAllServiceAnswers()
            .then(serviceAnswers =>
                this.setState({
                    serviceAnswers: serviceAnswers
                })
            )
    }

    renderTableHeaders() {
        return (
            <thead>
                <tr>
                <th>User ID</th>
                <th>Service Question ID</th>
                <th>Choice Answer</th>
                <th>T/F</th>
                <th>Min Range</th>
                <th>Max Range</th>
                </tr>
            </thead>
        )
    }

    render() {
        return(
            <div>
                <h3>Service Answers</h3>
                <table className="table">
                    {this.renderTableHeaders()}
                    <tbody>
                    {
                        this.state.serviceAnswers

                            .map(serviceAnswer =>
                                <tr key={serviceAnswer.id}>
                                    <td><Link
                                    to={`/admin/service-answers/${serviceAnswer.id}`}>
                                    {serviceAnswer.choiceAnswer}</Link></td>
                                </tr>
                            )

                            .map(serviceAnswer => {
                                const {
                                    id,
                                    serviceQuestion,
                                    choiceAnswer,
                                    trueFalseAnswer,
                                    maxRangeAnswer,
                                    minRangeAnswer,
                                    user,
                                } = serviceAnswer;
                                return (
                                    <tr key={id}>
                                        <td align="center">{user ? user.id : ""}</td>
                                        <td align="center">{serviceQuestion ? serviceQuestion.id : ""}</td>
                                        <td align="center">{choiceAnswer}</td>
                                        <td align="center">{trueFalseAnswer}</td>
                                        <td align="center">{maxRangeAnswer}</td>
                                        <td align="center">{minRangeAnswer}</td>
                                        
                                    </tr>
                                );
                            })

                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

const style = {

}

export default ServiceAnswers