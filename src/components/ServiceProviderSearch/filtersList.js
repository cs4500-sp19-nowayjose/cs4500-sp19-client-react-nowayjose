import React from 'react'
import ServiceQuestionFilter from './filter'

export default function providerFilters({serviceQuestions, questionAnswers, updateFilter}) {
  const questions = serviceQuestions.map(question =>
    <ServiceQuestionFilter
      question={question}
      answer={questionAnswers[question.id]}
      updateFilter={(value) => updateFilter(question.id, value)} />
  )

  return questions;
}
