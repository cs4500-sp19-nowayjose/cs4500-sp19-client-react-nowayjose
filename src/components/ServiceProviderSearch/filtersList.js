import React from 'react'
import {Link} from 'react-router-dom'

class ProviderFilters({serviceQuestions, updateFilters}) {
  constructor(props) {
    super(pros)
    let state = {
      answers = []
    }

  }

  updateFilter(questionId, answer) {
    this.setState(state => {
      const list = state.list.map((currentAnswer, index) => {
        if (index === questionId) {
          return answer
        } else {
          return currentAnswer;
        }
      });

      return {
        answers: list
      };
    });
  }
  return (
    <div>
      {{
        serviceQuestions.map(question =>
          <ServiceQuestionFilter
            question={question}
            answer={this.state.answers[question.id]}
            updateFilter={(value) => updateFilter(question.id, value)} />
        )
      }}
    </div>
  )
}
