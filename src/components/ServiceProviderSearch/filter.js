import React from 'react'

function BooleanFilter({title, description, answer, updateFilter}) {
  return (
    <div>
      <h4>{title}</h4>
      <div>{description}</div>
      <input type="checkbox" value={answer}
        onChange={(e) => updateFilter(e.target.checked)} />
    </div>
  )
}

function MinMaxFilter({title, description, answer, updateFilter}) {
  return (
    <div>
      <h4>{title}</h4>
      <div>{description}</div>
      <input type="number" value={answer}
        onChange={(e) => updateFilter(e.target.value)} />
    </div>
  )
}

function MultipleChoiceFilter({title, description, choiceOptions, answer, updateFilter}) {
  return (
    <div>
      <h4>{title}</h4>
      <div>{description}</div>
      <select value={answer} onChange={(e) => updateFilter(parseInt(e.target.value))}>
        {
          choiceOptions.map((option, i) => <option value={i}>{option}</option>)
        }
      </select>
    </div>
  )
}

export default function providerFilter({question, answer, updateFilter}) {
  console.log(question)
  if (question.serviceQuestionType === "YESORNO") {
    return (
      <BooleanFilter
        title={question.title}
        description={question.description}
        answer={answer}
        updateFilter={updateFilter} />
    )
  } else if (question.serviceQuestionType === "MINMAX") {
    return (
      <MinMaxFilter
        title={question.title}
        description={question.description}
        answer={answer}
        updateFilter={updateFilter} />
    )
  } else if (question.serviceQuestionType === "MULTIPLECHOICES") {
    return (
      <MultipleChoiceFilter
        title={question.title}
        description={question.description}
        choiceOptions={question.choiceOptions}
        answer={answer}
        updateFilter={updateFilter} />
    )
  } else {
    return null;
  }
}
