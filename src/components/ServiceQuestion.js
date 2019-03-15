import React from 'react'
import ServiceQuestionService from '../services/ServiceQuestionService'
class ServiceQuestions extends React.Component {
    constructor(props) {
        super(props)
        this.serviceQuestionService = ServiceQuestionService.getInstance()
        this.state = {
            serviceQuestions: [],
            page: 0,
            resultsPerPage: 10
        }
    }
    setPage(pageNumber) {
      this.setState(Object.assign(this.state, {
        page: pageNumber
      }))
    }
    setResultsPerPage(value) {
      var resultsPerPage = this.state.serviceQuestions.length
      if (value !== "all") {
        resultsPerPage = parseInt(value)
      }
      this.setState(Object.assign(this.state, {
        resultsPerPage: resultsPerPage
      }))
    }
    componentDidMount() {
        this.serviceQuestionService
            .findAllServiceQuestions()
            .then(serviceQuestions =>
                this.setState(Object.assign(this.state, {
                    serviceQuestions: serviceQuestions
                }))
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
                            .slice(this.state.page * this.state.resultsPerPage, (this.state.page + 1) * this.state.resultsPerPage)
                            .map(serviceQuestion =>
                                <tr key={serviceQuestion.id}>
                                    <td>
                                    to={`/admin/service-questions/${serviceQuestion.id}`}>
                                    {serviceQuestion.title}</td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
                <div>
                  {
                    [...Array(Math.ceil(this.state.serviceQuestions.length / this.state.resultsPerPage)).keys()].map(pageNumber =>
                      <a onClick={() => this.setPage(pageNumber)}>{pageNumber + 1} </a>
                    )
                  }
                  <select onChange={(e) => this.setResultsPerPage(e.target.value)}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="all">all</option>
                  </select>
                </div>
            </div>
        )
    }
}

export default ServiceQuestions
