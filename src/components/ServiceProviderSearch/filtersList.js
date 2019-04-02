import React from 'react'
import ServiceQuestionFilter from './filter'

export default function providerFilters({serviceQuestions, questionAnswers, updateFilter}) {
  return (
    <div>
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
