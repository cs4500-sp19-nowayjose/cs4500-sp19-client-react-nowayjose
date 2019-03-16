import React from 'react'
import ServiceQuestionService from '../services/ServiceQuestionService'
import { Link } from 'react-router-dom'

class ServiceQuestions extends React.Component {
    constructor(props) {
        super(props)
        this.serviceQuestionService = ServiceQuestionService.getInstance()
        this.state = {
            serviceQuestions: [{
              id: 1288345,
              title: "Hi there"
            }],
            page: 0,
            resultsPerPage: 10,
            filter: {
              title: '',
              description: '',
            }
        }
    }
    incrPage(incr) {
      this.setPage(this.state.page + incr)
    }
    setPage(pageNumber) {
      if (pageNumber >= 0 && pageNumber < Math.ceil(this.state.serviceQuestions.length / this.state.resultsPerPage)) {
        this.setState(Object.assign(this.state, {
          page: pageNumber
        }))
      }
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
      // this.serviceQuestionService
      //     .findAllServiceQuestions()
      //     .then(serviceQuestions => {
      //       if (serviceQuestions.status === 500) {
      //         return;
      //       }
      //       this.setState(Object.assign(this.state, {
      //           serviceQuestions: serviceQuestions
      //       }))
      //     })
    }

    deleteQuestion(id) {
      this.serviceQuestionService.delete(id)
      this.setState(Object.assign(this.state, {
        serviceQuestions: this.state.serviceQuestions.filter(question => question.id != id)
      }))
    }

    renderTitleHeader() {
      return (
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Type</th>
          <th> </th>
        </tr>
      )
    }

    handleFilterChange = (event, type) => {
      const { value } = event.target;
      this.setState(prevState => {
        return {
          filter: {
            ...prevState.filter,
            [type]: value,
          }
        }
      });
    }

    handleQuestionTypeChange = (event) => {
      const { value } = event.target;
    }

    renderFilterHeader() {
      const { filter: { title, description, serviceQuestionType} } = this.state;
      return (
        <tr>
          <th><input type="text" value={title} onChange={(e) => this.handleFilterChange(e, 'title')}/></th>
          <th><input type="text" value={description} onChange={(e) => this.handleFilterChange(e, 'description')}/></th>
          <th><input type="text" value={serviceQuestionType} onChange={this.handleQuestionTypeChange}/></th>

          <th>
              <button type="button" className="btn btn-primary">Add</button>
          </th>
          <th>
              <button type="button" className="btn btn-success">Save</button>
          </th>
        </tr>
      )
    }

    filterData = async () => {
      const result = await this.serviceQuestionService.findServiceQuestionByCriteria(this.state.filter);
      this.setState({
        serviceQuestions: result.length ? result : [],
        page: 0,
        resultsPerPage: 10,
        filter: { title: '', description: '' },
      })
    }

    renderFilterButton() {
      return (
        <button
          onClick={this.filterData}
          className="btn-lg btn"
          style={{ position: 'fixed', right: 10, color: '#FEC107'}}
        >
          <i className="fas fa-search fa-2x"></i>
        </button>
      )
    }

    render() {
        return(
            <div>
                <h3>Service Questions</h3>
                <table className="table">
                  <thead>
                    {this.renderTitleHeader()}
                    {this.renderFilterHeader()}
                  </thead>
                    <tbody>
                    {
                        this.state.serviceQuestions
                            .slice(this.state.page * this.state.resultsPerPage, (this.state.page + 1) * this.state.resultsPerPage)
                            .map(serviceQuestion =>
                                <tr key={serviceQuestion.id}>
                                    <td>
                                    to={`/admin/service-questions/${serviceQuestion.id}`}>
                                    {serviceQuestion.title}</td>
                                  <td>{serviceQuestion.description}</td>
                                  <td>{serviceQuestion.serviceQuestionType}</td>
                                  <span onClick={() => this.deleteQuestion(serviceQuestion.id)}>X</span>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
                <div>
                  <span onClick={() => this.incrPage(-1)}>Prev</span>
                  {
                    [...Array(Math.ceil(this.state.serviceQuestions.length / this.state.resultsPerPage)).keys()].map(pageNumber =>
                      <span key={`${pageNumber}pageNumberQuestionService`} onClick={() => this.setPage(pageNumber)}>{pageNumber + 1} </span>
                    )
                  }
                  <span onClick={() => this.incrPage(1)}>Next</span>
                  <select onChange={(e) => this.setResultsPerPage(e.target.value)}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="all">all</option>
                  </select>
                  {this.renderFilterButton()}
                </div>
            </div>
        )
    }
}

export default ServiceQuestions
