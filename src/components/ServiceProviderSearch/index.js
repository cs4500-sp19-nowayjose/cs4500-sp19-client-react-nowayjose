import React from 'react'
import ProviderSearchService from '../../services/ProviderSearchService'
import ServiceQuestionService from '../../services/ServiceQuestionService'
import ProviderResultsList from './providerResultsList'
import SearchBar from '../SearchBar/SearchBar'
import FiltersList from './filtersList'

class ServiceProviderSearch extends React.Component {
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
    let searchQuery = {
      filters: answers
    }
    this.providerSearchService.findMatchingProviders(searchQuery)
      .then(providers => this.setState({providers: providers}))
  }

  onSubmit = async (e) => {
    if (e) e.preventDefault();
    const data = await this.providerSearchService.searchProviders(this.state.zipSearch, this.state.providerSearch)
    this.setState({ providerSearch: '', zipSearch: '', providers: data });
  }

  onChange = (e, target) => {
    this.setState({ [`${target}Search`]: e.target.value });
  }

  render() {
    const { providerSearch, zipSearch } = this.state;
    return (
      <div>
        <SearchBar
          onSubmit={this.onSubmit} 
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          providerValue={providerSearch}
          zipValue={zipSearch}
        />
        <FiltersList
          serviceQuestions={this.state.serviceQuestions}
          questionAnswers={this.state.questionAnswers}
          updateFilter={this.updateFilter} />
        <ProviderResultsList providers={this.state.providers} />
      </div>
    )
  }
}

export default ServiceProviderSearch
