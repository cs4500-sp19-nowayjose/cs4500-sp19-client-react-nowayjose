import React from 'react'
import ProviderSearchService from '../../services/ProviderSearchService'
import ServiceQuestionService from '../../services/ServiceQuestionService'
import ProviderResultsList from './providerResultsList'
import SearchBar from '../SearchBar/SearchBar'
import FiltersList from './filtersList'

class ServiceProviderSearch extends React.Component {
  serviceId = this.props.match.params.id
  providerSearchService = ProviderSearchService.getInstance()
  serviceQuestionService = ServiceQuestionService.getInstance()
  state = {
    providers: [],
    providerSearch: '',
    zipSearch: '',
    serviceQuestions: [],
    questionAnswers: {}
  }

  componentDidMount() {
    this.serviceQuestionService
      .findServiceQuestionsForService(this.serviceId)
      .then(questions => this.setState({serviceQuestions: questions}))
    this.providerSearchService
      .findAllProviders()
      .then(providers => this.setState({providers: providers}))
  }

  updateFilter = (questionId, answer) => {
    let answers = {}
    answers[questionId] = answer
    answers = Object.assign(this.state.questionAnswers, answers)
    this.setState({
      questionAnswers: answers
    })
    this.providerSearchService.findMatchingProviders({
      filters: answers,
      zip: this.state.zipSearch,
      title: this.state.providerSearch
    })
      .then(providers => this.setState({providers: providers}))
  }

  onSubmit = async (e) => {
    if (e) e.preventDefault();
    this.providerSearchService.findMatchingProviders({
      filters: this.state.questionAnswers,
      zip: this.state.zipSearch,
      title: this.state.providerSearch
    })
      .then(providers => this.setState({providers: providers}))
  }

  onChange = (e, target) => {
    this.setState({ [`${target}Search`]: e.target.value });
  }

  render() {
    const { providerSearch, zipSearch } = this.state;
    return (
      <div>
        <div className="row">
          <SearchBar
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            providerValue={providerSearch}
            zipValue={zipSearch}
          />
        </div>
        <div className="row">
          <FiltersList
            serviceQuestions={this.state.serviceQuestions}
            questionAnswers={this.state.questionAnswers}
            updateFilter={this.updateFilter} />
          <ProviderResultsList
            providers={this.state.providers} />
        </div>
      </div>
    )
  }
}

export default ServiceProviderSearch
