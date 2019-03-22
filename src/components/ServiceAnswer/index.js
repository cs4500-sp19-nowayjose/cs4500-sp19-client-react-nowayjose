import React from 'react'
import ServiceAnswerService from '../../services/ServiceAnswerService'
import AnswerTable from './answerTable'
import PaginationTool from './paginationTool'

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

  deleteQuestion = (id) => {
    this.serviceQuestionService.delete(id)
    this.setState(Object.assign(this.state, {
      serviceQuestions: this.state.serviceQuestions.filter(question => question.id !== id)
    }))
  }

  render() {
    const { page, resultsPerPage, serviceAnswers } = this.state;
    return (
      <div>
        <h3>Service Question Answers</h3>
        <AnswerTable
          pageState={{ page, resultsPerPage }}
          deleteAnswer={this.deleteAnswer}
          serviceAnswers={serviceAnswers}
        />
        <div>
          <PaginationTool
            incrPage={this.incrPage}
            setResultsPerPage={this.setResultsPerPage}
            setPage={this.setPage}
            paginationNumbers={[...Array(Math.ceil(serviceAnswers.length / resultsPerPage)).keys()]}
          />
        </div>
      </div>
    )
  }
}

export default ServiceAnswers
