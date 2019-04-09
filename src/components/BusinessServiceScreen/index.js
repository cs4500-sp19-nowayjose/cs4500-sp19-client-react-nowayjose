import React from 'react'
import ServiceSelectSidebar from './serviceSelectSidebar'
import ServiceQuestionsForm from './serviceQuestionsForm'
import ServiceQuestionService from '../../services/ServiceQuestionService'
import serviceAnswerService from '../../services/ServiceAnswerService'

class BusinessServiceScreen extends React.Component {
  serviceQuestionService = ServiceQuestionService.getInstance()
  serviceAnswersService = ServiceQuestionService.getInstance()
  state = {
    selectedServices: [],
    possibleServices: [],
    activeServiceId: null,
    query: "",
    selectedServiceQuestions: {},
    serviceQuestionAnswers: {}
  }

  addService(service) {
    this.setState(s => ({
      selectedServices: [service, ...s.selectedServices]
    }))
  }

  removeService(id) {
    this.setState(s => {
      var activeId = s.activeServiceId
      if (activeId === id) activeId = null
      let u = {}
      u[id] = undefined
      return {
        selectedServices: s.selectedServices.filter(s => s.id !== id),
        activeServiceId: activeId,
        selectedServiceQuestions: Object.assign(s.selectedServiceQuestions, u)
      }
    })
  }

  selectService(id) {
    this.setState({
      activeServiceId: id
    })
  }

  setAnswer(questionId, answer) {
    let a = {}
    a[questionId] = answer
    this.setState(s => {
      serviceQuestionAnswers: Object.assign(s.serviceQuestionAnswers, a)
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-3">
          <ServiceSelectSidebar
            query={this.state.query}
            setQuery={q => this.setState({query: q})}
            possibleServices={this.state.possibleServices}
            setPossibleServices={s => this.setState({possibleServices: s})}
            activeServiceId={this.state.activeServiceId}
            addService={this.addService.bind(this)}
            removeService={this.removeService.bind(this)}
            selectService={this.selectService.bind(this)}
            selectedServices={this.state.selectedServices} />
        </div>
        <div className="col-9">
          <ServiceQuestionsForm
            submitAnswers={console.log(this.state.serviceQuestionAnswers)}
            serviceQuestions={this.state.selectedServiceQuestions[this.activeServiceId] || []}
            answers={this.state.serviceQuestionAnswers}
            answerQuestion={this.answerQuestion} />
        </div>
      </div>
    )
  }

}

export default BusinessServiceScreen
