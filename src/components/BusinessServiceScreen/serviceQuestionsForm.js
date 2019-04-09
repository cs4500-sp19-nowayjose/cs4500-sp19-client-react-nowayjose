import React from 'react'
import ServiceQuestion from './ServiceQuestion'

class ServiceQuestionsForm extends React.Component {

  render() {
    let renderSave = () => {
      if (this.props.serviceQuestions.length > 0) {
        return <button onClick={() => this.props.submitAnswers()} className="btn btn-primary">Save</button>
      }
    }

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
        {
          renderSave()
        }
      </div>
    )
  }
}

export default ServiceQuestionsForm
