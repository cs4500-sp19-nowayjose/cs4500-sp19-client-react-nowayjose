import React from 'react'

function BooleanFilter({title, description, answer, setAnswer}) {
  return (
    <div className="provider-filter boolean-filter">
      <h4>{title}</h4>
      <div>{description}</div>
      <input type="checkbox" value={answer || 0}
        onChange={(e) => setAnswer(e.target.checked)} />
    </div>
  )
}

function MinMaxFilter({title, description, answer, setAnswer}) {
  let update = (key, value) => {
    let v = {}
    v[key] = answer
    setAnswer(Object.assign(answer || {min: 0, max: 0}, v))
  }
  return (
    <div className="provider-filter range-filter">
      <h4>{title}</h4>
      <div>{description}</div>
      <label>Min</label>
      <input type="number" value={answer}
        onChange={(e) => update("min", e.target.value)} />
      <label>Max</label>
      <input type="number" value={answer}
        onChange={(e) => update("max", e.target.value)} />
    </div>
  )
}

function MultipleChoiceFilter({title, description, choiceOptions, answer, setAnswer}) {
  return (
    <div className="provider-filter choice-filter">
      <h4>{title}</h4>
      <div>{description}</div>
      <select value={answer || 0} onChange={(e) => setAnswer(parseInt(e.target.value))}>
        {
          choiceOptions.map((option, i) => <option value={i}>{option}</option>)
        }
      </select>
    </div>
  )
}

export default function ServiceQuestion({question, answer, setAnswer}) {
  if (question.serviceQuestionType === "YESORNO") {
    return (
      <BooleanFilter
        title={question.title}
        description={question.description}
        answer={answer}
        setAnswer={setAnswer} />
    )
  } else if (question.serviceQuestionType === "MINMAX") {
    return (
      <MinMaxFilter
        title={question.title}
        description={question.description}
        answer={answer}
        setAnswer={setAnswer} />
    )
  } else if (question.serviceQuestionType === "MULTIPLECHOICES") {
    return (
      <MultipleChoiceFilter
        title={question.title}
        description={question.description}
        choiceOptions={question.choiceOptions}
        answer={answer}
        setAnswer={setAnswer} />
    )
  } else {
    return null;
  }
}
