import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import FiltersList from './filtersList'
import renderer from 'react-test-renderer'
import serviceQuestions from '../../data/serviceQuestions.mock.json'
import {BrowserRouter as Router} from 'react-router-dom'

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})

afterEach(() => {
  document.body.removeChild(container);
  container = null;
})

it('renders correctly', () => {
  const tree = renderer
    .create(
      <FiltersList
        serviceQuestions={serviceQuestions}
        questionAnswers={{}}
        updateFilter={(v) => {}} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
})
