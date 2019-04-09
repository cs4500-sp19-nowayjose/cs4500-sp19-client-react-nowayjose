import React from 'react'
import ServiceQuestion from './ServiceQuestion'

class ServiceQuestionsForm extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.serviceQuestions.map(question => (
            <ServiceQuestion
              question={question}
              answer={this.props.answers[question.id]}
              setAnswer={answer => this.props.answerQuestion(question.id, answer)} />
          ))
        }
        <button onClick={() => this.props.submitAnswers()} className="btn btn-primary">Save</button>
      </div>
    )
  }
}

export default ServiceQuestionsForm
