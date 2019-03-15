import React from 'react'
import ServiceAnswerService from '../services/ServiceAnswerService'
class ServiceAnswers extends React.Component {
    constructor(props) {
        super(props)
        this.serviceAnswerService = ServiceAnswerService.getInstance()
        this.state = {
            serviceAnswers: [],
            page: 0,
            resultsPerPage: 10
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
    incrPage(incr) {
      this.setPage(this.state.page + incr)
    }

    setPage(pageNumber) {
      if (pageNumber >= 0 && pageNumber < Math.ceil(this.state.serviceAnswers.length / this.state.resultsPerPage)) {
        this.setState(Object.assign(this.state, {
          page: pageNumber
        }))
      }
    }
    setResultsPerPage(value) {
      var resultsPerPage = this.state.serviceAnswers.length
      if (value !== "all") {
        resultsPerPage = parseInt(value)
      }
      this.setState(Object.assign(this.state, {
        resultsPerPage: resultsPerPage
      }))
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
                            .slice(this.state.page * this.state.resultsPerPage, (this.state.page + 1) * this.state.resultsPerPage)
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
                                    <tr key={id} to={`/admin/service-answers/${id}`}>
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
                <div>
                  <a onClick={() => this.incrPage(-1)}>Prev</a>
                  {
                    [...Array(Math.ceil(this.state.serviceAnswers.length / this.state.resultsPerPage)).keys()].map(pageNumber =>
                      <a onClick={() => this.setPage(pageNumber)}>{pageNumber + 1} </a>
                    )
                  }
                  <a onClick={() => this.incrPage(1)}>Next</a>
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

const style = {

}

export default ServiceAnswers
