import React from 'react'
import ServiceSelectSidebar from './serviceSelectSidebar'
import ServiceQuestionsForm from './serviceQuestionsForm'
import ServiceQuestionService from '../../services/ServiceQuestionService'
import ServiceAnswerService from '../../services/ServiceAnswerService'

class BusinessServiceScreen extends React.Component {
  serviceQuestionService = ServiceQuestionService.getInstance()
  serviceAnswersService = ServiceAnswerService.getInstance()
  providerId = this.props.match.params.providerId
  state = {
    selectedServices: [],
    possibleServices: [],
    activeServiceId: null,
    query: "",
    selectedServiceQuestions: {},
    serviceQuestionAnswers: {}
  }

  addService(service) {
    this.serviceQuestionService.findServiceQuestionsForService(service.id)
      .then(questions => {
        this.setState(s => {
          let q = {}
          q[service.id] = questions
          return {
            selectedServices: [service, ...s.selectedServices],
            selectedServiceQuestions: Object.assign(s.selectedServiceQuestions, q),
            possibleServices: []
          }
        })
      })
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
    this.setState(s => ({
      serviceQuestionAnswers: Object.assign(s.serviceQuestionAnswers, a)
    }))
  }

  submitAnswers() {
    let questions = (this.state.selectedServiceQuestions[this.state.activeServiceId] || [])
    let requests = questions.map(question => {
      let answer = this.state.serviceQuestionAnswers[question.id]
      let newAnswerBody = {
        "trueFalseAnswer": null,
        "minRangeAnswer": null,
        "maxRangeAnswer": null,
        "choiceAnswer": null,
        "serviceQuestion": {"id": question.id},
        "serviceProvider": {"id": this.providerId}
      }
      if (question.serviceQuestionType === "MINMAX") {
        newAnswerBody["minRangeAnswer"] = answer["min"]
        newAnswerBody["maxRangeAnswer"] = answer["max"]
      } else if (question.serviceQuestionType === "YESORNO") {
        newAnswerBody["trueFalseAnswer"] = answer
      } else if (question.serviceQuestionType === "MULTIPLECHOICES"){
        newAnswerBody["choiceAnswer"] = answer
      } else {
        console.log("Weird", question, answer)
      }
      console.log("create answer", newAnswerBody)
      return this.serviceAnswersService.create(newAnswerBody)
    })
    return Promise.all(requests)
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
            submitAnswers={this.submitAnswers.bind(this)}
            serviceQuestions={this.state.selectedServiceQuestions[this.state.activeServiceId] || []}
            answers={this.state.serviceQuestionAnswers}
            answerQuestion={this.setAnswer.bind(this)} />
        </div>
      </div>
    )
  }

}

export default BusinessServiceScreen
