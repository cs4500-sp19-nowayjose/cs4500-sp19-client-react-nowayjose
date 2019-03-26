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
              className="form-control">
              {
                  serviceAnswers
                      .map(serviceAnswer =>
                          <option
                              value={serviceAnswer.id}
                              key={serviceAnswer.id}>
                              {serviceAnswer.choiceAnswer}
                          </option>
                      )
              }
          </select>
          <label>Service Answer Answer</label><br/>
          <input
              onChange={() => {}}
              className="form-control"
              value={serviceAnswer.choiceAnswer}/>
      </div>
  )
}
