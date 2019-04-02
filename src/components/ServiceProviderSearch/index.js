import React from 'react'
import ProviderSearchService from '../../services/ProviderSearchService'
import ProviderSearchService from '../../services/ServiceAnswerService'
import ProviderResultsList from './providerResultsList'
import FiltersList from './filtersList'

class ServiceProviderSearch extends React.Component {
  constructor(props) {
    super(props)
    this.providerSearchService = ProviderSearchService.getInstance()
    this.serviceAnswerService = ServiceQuestionService.getInstance()
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
    let searchQuery = Object.getOwnPropertyNames(this.state.questionAnswers).map(qid => {
      return {questionId: qid, answer: this.state.questionAnswers[qid] || null}
    })
    this.providerSearchService.findMatchingProviders(this.serviceId, searchQuery)
      .then(providers =>
        this.setState({
          questionAnswers: answers,
          providers: providers
        });
      )
  }

  componentDidMount() {
    this.serviceQuestionService
      .findServiceQuestionsForService(this.serviceId)
      .then(questions => this.setState({serviceQuestions: questions}))
    this.providerSearchService
      .findMatchingProviders(this.serviceId, {})
      .then(providers => this.setState({providers: providers}))
  }

  render() {
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
