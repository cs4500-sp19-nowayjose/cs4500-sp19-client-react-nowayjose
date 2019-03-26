import React from 'react'
import { Link } from 'react-router-dom'

export default function answerTable ({
  pageState,
  serviceAnswers,
  deleteAnswer
}) {
  const { page, resultsPerPage } = pageState;
  return (
    <table className="table">
      <TitleHeader />
      <TableBody
        serviceAnswers={serviceAnswers}
        page={page}
        resultsPerPage={resultsPerPage}
        deleteAnswer={deleteAnswer}
      />
    </table>
  )
}

function TitleHeader() {
  return (
      <thead>
          <tr>
          <th>User ID</th>
          <th>Service Question ID</th>
          <th>Choice Answer</th>
          <th>T/F</th>
          <th>Min Range</th>
          <th>Max Range</th>
          <th>Delete</th>
          </tr>
      </thead>
  )
}

function TableBody({ serviceAnswers, page, resultsPerPage, deleteAnswer }) {
  return (
    <tbody>{
      serviceAnswers
        .slice(page * resultsPerPage, (page + 1) * resultsPerPage)
        .map(serviceAnswer => <TableRow serviceAnswer={serviceAnswer} deleteAnswer={deleteAnswer} />)
    }
    </tbody>
  )
}

function TableRow({ serviceAnswer, deleteAnswer }) {
  const {
      id,
      serviceQuestion,
      choiceAnswer,
      trueFalseAnswer,
      maxRangeAnswer,
      minRangeAnswer,
      user,
  } = serviceAnswer;
  return (
    <tr className="service-answer-row" key={id}>
      <td className="service-answer-user-id" align="center">{user ? user.id : ""}</td>
      <td className="service-answer-question-id" align="center">{serviceQuestion ? serviceQuestion.id : ""}</td>
      <td align="center">{choiceAnswer}</td>
      <td align="center">{trueFalseAnswer}</td>
      <td align="center">{maxRangeAnswer}</td>
      <td align="center">{minRangeAnswer}</td>
      <td><span onClick={() => this.deleteAnswer(id)}>X</span></td>
    </tr>
  )
}
