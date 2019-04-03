import React from 'react'
import ProviderSearchService from '../../services/ProviderSearchService'
import ServiceQuestionService from '../../services/ServiceQuestionService'
import ProviderResultsList from './providerResultsList'
import FiltersList from './filtersList'

class ServiceProviderSearch extends React.Component {
  constructor(props) {
    super(props)
    this.providerSearchService = ProviderSearchService.getInstance()
    this.serviceQuestionService = ServiceQuestionService.getInstance()
    this.serviceId = props.match.params.id
    this.state = {
      providers: [],
      serviceQuestions: [],
      questionAnswers: {}
    }
  }

  updateFilter(questionId, answer) {
    let answers = {}
    answers[questionId] = answer
    answers = Object.assign(this.state.questionAnswers, answers)
    this.setState({
      questionAnswers: answers
    })
    let searchQuery = {
      filters: answers
    }
    this.providerSearchService.findMatchingProviders(searchQuery)
      .then(providers => this.setState({providers: providers}))
  }

  componentDidMount() {
    this.serviceQuestionService
      .findServiceQuestionsForService(this.serviceId)
      .then(questions => this.setState({serviceQuestions: questions}))
    this.providerSearchService
      .findAllProviders()
      .then(providers => this.setState({providers: providers}))
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <FiltersList
          serviceQuestions={this.state.serviceQuestions}
          questionAnswers={this.state.questionAnswers}
          updateFilter={this.updateFilter.bind(this)} />
        <ProviderResultsList providers={this.state.providers} />
      </div>
    )
  }
}

export default ServiceProviderSearch
