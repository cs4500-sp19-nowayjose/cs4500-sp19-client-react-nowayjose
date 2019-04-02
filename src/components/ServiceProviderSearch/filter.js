import React from 'react'
import {Link} from 'react-router-dom'

function BooleanFilter({title, description, answer, updateFilter}) {
  return (
    <div>
      <h4>{title}</h4>
      <div>{description}</div>
      <input type="checkbox" value={answer}
        onChange={(e) => updateFilter(e.target.value)}>
    </div>
  )
}

function MinMaxFilter({title, description, answer, updateFilter}) {
  return (
    <div>
      <h4>{title}</h4>
      <div>{description}</div>
      <input type="text" value={answer}
        onChange={(e) => updateFilter(e.target.value)}>
    </div>
  )
}

function MultipleChoiceFilter({title, description, choiceOptions, answer, updateFilter}) {
  return (
    <div>
      <h4>{title}</h4>
      <div>{description}</div>
      <select value={answer} onChange={updateFilter}>
        {
          choiceOptions.map((option, i) => <option value={i}>{option}</option>)
        }
      </select>
    </div>
  )
}

export default function providerFilter({serviceQuestion, answer, updateFilter}) {
  if (serviceQuestion.questionType === "YESORNO") {
    return (
      <BooleanFilter
        title={serviceQuestion.title}
        description={serviceQuestion.description}
        answer={answer}
        updateFilter={updateFilter} />
    )
  } else if (serviceQuestion.questionType === "MINMAX") {
    return (
      <MinMaxFilter
        title={serviceQuestion.title}
        description={serviceQuestion.description}
        answer={answer}
        updateFilter={updateFilter} />
    )
  } else {
    return (
      <MultipleChoiceFilter
        title={serviceQuestion.title}
        description={serviceQuestion.description}
        choiceOptions={serviceQuestion.choiceOptions}
        answer={answer}
        updateFilter={updateFilter} />
    )
  }
}
