import React from 'react'
import AnswerTable from './answerTable'
import renderer from 'react-test-renderer'
import serviceAnswers from '../../data/serviceAnswers.mock.json'
import {BrowserRouter as Router} from 'react-router-dom'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
      <AnswerTable
        pageState={{ page: 0, resultsPerPage: serviceAnswers.length }}
        serviceAnswers={serviceAnswers}
        deleteAnswer={(id) => {}}
        />
      </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
