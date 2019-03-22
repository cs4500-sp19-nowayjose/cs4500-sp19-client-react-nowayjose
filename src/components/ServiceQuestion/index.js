import React from 'react'
import ServiceQuestionService from '../../services/ServiceQuestionService'
import FilterButton from './filterButton'
import QuestionTable from './questionTable'
import PaginationTool from './paginationTool'

class ServiceQuestions extends React.Component {
  serviceQuestionService = ServiceQuestionService.getInstance()
  state = {
    serviceQuestions: [],
    page: 0,
    resultsPerPage: 10,
    filter: {
      title: '',
      description: '',
    }
  }


  componentDidMount() {
    this.serviceQuestionService
      .findAllServiceQuestions()
      .then(serviceQuestions => {
        if (serviceQuestions.status === 500) {
          return;
        }
        this.setState({ serviceQuestions });
      })
  }


  incrPage = (incr) => {
    this.setPage(this.state.page + incr)
  }

  setPage = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < Math.ceil(this.state.serviceQuestions.length / this.state.resultsPerPage)) {
      this.setState(Object.assign(this.state, {
        page: pageNumber
      }))
    }
  }

  setResultsPerPage = (e) => {
    const value = e.target.value;
    let resultsPerPage = this.state.serviceQuestions.length
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

  filterData = async () => {
    const result = await this.serviceQuestionService.findServiceQuestionByCriteria(this.state.filter);
    this.setState({
      serviceQuestions: result.length ? result : [],
      page: 0,
      resultsPerPage: 10,
      filter: { title: '', description: '' },
    })
  }

  render() {
    const { filter, page, resultsPerPage, serviceQuestions } = this.state;
    return (
      <div>
        <h3>Service Questions</h3>
        <QuestionTable 
          filterState={filter}
          pageState={{ page, resultsPerPage }}
          handleFilterChange={this.handleFilterChange}
          deleteQuestion={this.deleteQuestion}
          serviceQuestions={serviceQuestions}
        />
        <div>
          <PaginationTool
            incrPage={this.incrPage}
            setResultsPerPage={this.setResultsPerPage}
            setPage={this.setPage}
            paginationNumbers={[...Array(Math.ceil(serviceQuestions.length / resultsPerPage)).keys()]}
          />
          <FilterButton onClickFilterData={this.filterData} />
        </div>
      </div>
    )
  }
}

export default ServiceQuestions
