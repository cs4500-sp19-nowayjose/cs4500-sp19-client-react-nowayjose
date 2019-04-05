import React from 'react'
import ServiceQuestionFilter from './filter'

export default function providerFilters({cn, serviceQuestions, questionAnswers, updateFilter}) {
  return (
    <div className="col-3">
      {
        serviceQuestions.map(question =>
          <ServiceQuestionFilter
            question={question}
            answer={questionAnswers[question.id]}
            updateFilter={(value) => updateFilter(question.id, value)} />
        )
      }
    </div>
  )
}
