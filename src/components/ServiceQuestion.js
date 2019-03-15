import React from 'react'
import ServiceQuestionService from '../services/ServiceQuestionService'
import { Link } from 'react-router-dom'

class ServiceQuestions extends React.Component {
    constructor(props) {
        super(props)
        this.serviceQuestionService = ServiceQuestionService.getInstance()
        this.state = {
            serviceQuestions: [],
            page: 0,
            resultsPerPage: 10,
            filter: {
              title: '',
              description: '',
              serviceQuestionType: '',
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
        this.serviceQuestionService
            .findAllServiceQuestions()
            .then(serviceQuestions =>
                this.setState(Object.assign(this.state, {
                    serviceQuestions: serviceQuestions
                }))
            )
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

    handleFormChange = (event, type) => {
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

    renderFilterHeader() {
      const { filter: { title, description, serviceQuestionType} } = this.state;
      return (
        <tr>
          <th><input type="text" value={title} onChange={(e) => this.handleFormChange(e, 'title')}/></th>
          <th><input type="text" value={description} onChange={(e) => this.handleFormChange(e, 'description')}/></th>
          <th><input type="text" value={serviceQuestionType} onChange={(e) => this.handleFormChange(e, 'serviceQuestionType')}/></th>

          <th>
              <button type="button" class="btn btn-primary">Add</button>
          </th>
          <th>
              <button type="button" class="btn btn-success">Save</button>
          </th>
        </tr>
      )
    }

    filterData = async () => {
      const result = await this.serviceQuestionService().findServiceQuestionByCriteria(this.state.filter);
      this.setState({
        serviceQuestions: result,
        page: 0,
        resultsPerPage: 10,
        filter: { title: '', description: '', serviceQuestionType: ''},
      }) 
    }

    renderFilterButton() {
      return (
        <button 
          onClick={this.filterData}  
          class="btn-lg btn" 
          style={{ position: 'fixed', right: 10, color: '#FEC107'}}
        >
          <i class="fas fa-search fa-2x"></i>
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
                                    <Link to={`/admin/service-questions/${serviceQuestion.id}`}>
                                      {serviceQuestion.title}
                                    </Link>
                                  </td>
                                  <td>{serviceQuestion.description}</td>
                                  <td>{serviceQuestion.serviceQuestionType}</td>
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
