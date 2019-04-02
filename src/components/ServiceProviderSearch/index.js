import React from 'react'
import ProviderSearchService from '../../services/ProviderSearchService'
import ProviderResultsList from './providerResultsList'
import FiltersList from './filtersList'

class ServiceProviderSearch extends React.Component {
  constructor(props) {
    super(props)
    this.providerSearchService = ProviderSearchService.getInstance()
    this.serviceId = props.serviceId
    this.state = {
      providers: [],
      serviceQuestions: [
        {
          id: 1,
          questionType: "YESORNO",
          title: "Do you take cash?",
          description: "Hmm?"
        },
        {
          id: 2,
          questionType: "MINMAX",
          title: "title",
          description: "description?"
        },
        {
          id: 3,
          questionType: "other",
          title: "a",
          description: "blah?",
          choiceOptions: ["a", "b", "c"]
        },
      ],
      questionAnswers: {
        1: false
      }
    }
  }

  updateFilter(questionId, answer) {
    let answers = {}
    answers[questionId] = answer
    answers = Object.assign(this.state.questionAnswers, answers)
    console.log(answers)
    this.setState({
      questionAnswers: answers
    });
  }

  componentDidMount() {
    // TODO get service questions
    // this.providerSearchService
    //   .findAllProvidersForServiceId(this.serviceId)
    //   .then(providers => this.setState({providers: providers}))
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
