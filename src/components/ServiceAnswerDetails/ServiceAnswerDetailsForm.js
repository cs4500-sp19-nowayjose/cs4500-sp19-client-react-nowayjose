import React from 'react'

export default function ServiceAnswerDetailsForm({
  serviceAnswers,
  serviceAnswer,
  selectServiceAnswer
}) {
  return(
      <div>
          <h3>Service Answer Details</h3>
          <select
              value={serviceAnswer.id}
              onChange={(e) => selectServiceAnswer(e.target.value)}
              className="answer-details-select-id form-control">
              {
                  serviceAnswers
                      .map(serviceAnswer =>
                          <option
                              className="select-other-answer"
                              value={serviceAnswer.id}
                              key={serviceAnswer.id}>
                              {serviceAnswer.choiceAnswer}
                          </option>
                      )
              }
          </select>
          <label>Service Answer Answer</label><br/>
          <input
              className="form-control answers-choice-answer"
              onChange={() => {}}
              value={"" + serviceAnswer.choiceAnswer}/>
          <input
            className="form-control answers-max-answer"
            value={"" + serviceAnswer.maxRangeAnswer} />
          <input
            className="form-control answers-min-answer"
            value={"" + serviceAnswer.minRangeAnswer} />
      </div>
  )
}
