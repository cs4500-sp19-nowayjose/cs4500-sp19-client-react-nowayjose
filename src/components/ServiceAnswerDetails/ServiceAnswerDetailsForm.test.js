import React from 'react'
import ServiceAnswerDetailsForm from './ServiceAnswerDetailsForm'
import renderer from 'react-test-renderer'
import serviceAnswers from '../../data/serviceAnswers.mock.json'
import {BrowserRouter as Router} from 'react-router-dom'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
      <ServiceAnswerDetailsForm
        serviceAnswers={serviceAnswers}
        serviceAnswer={serviceAnswers[0]}
        selectServiceAnswer={(id) => {}}
        />
      </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
