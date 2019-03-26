import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import AnswerTable from './answerTable'
import renderer from 'react-test-renderer'
import serviceAnswers from '../../data/serviceAnswers.mock.json'
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

it('has the correct number of results', () => {
  act(() => {
    ReactDOM.render(<Router><AnswerTable
      pageState={{ page: 0, resultsPerPage: 1 }}
      serviceAnswers={serviceAnswers}
      deleteAnswer={(id) => {}}
    /></Router>, container)
  });
  var rows = container.getElementsByClassName("service-answer-row");
  expect(rows.length).toBe(1);
  expect(container.querySelector('.service-answer-question-id').textContent).toBe("" + serviceAnswers[0].serviceQuestion.id)

  // Change the pagination
  act(() => {
    ReactDOM.render(<Router><AnswerTable
      pageState={{ page: 1, resultsPerPage: 1 }}
      serviceAnswers={serviceAnswers}
      deleteAnswer={(id) => {}}
    /></Router>, container)
  });
  rows = container.getElementsByClassName("service-answer-row");
  expect(rows.length).toBe(1);
  expect(container.querySelector('.service-answer-question-id').textContent).toBe("" + serviceAnswers[1].serviceQuestion.id)
})

it('has the right fields', () => {
  act(() => {
    ReactDOM.render(<AnswerTable
      pageState={{ page: 0, resultsPerPage: 1 }}
      serviceAnswers={serviceAnswers}
      deleteAnswer={(id) => {}}
    />, container);
  });
  const row = container.querySelector(".service-answer-row");
  expect(row.querySelector(".service-answer-user-id").textContent).toBe("" + serviceAnswers[0].user.id);
  expect(row.querySelector(".service-answer-question-id").textContent).toBe("" + serviceAnswers[0].serviceQuestion.id);
})

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

it('does pagination correctly', () => {
  const tree = renderer
    .create(
      <Router>
      <AnswerTable
        pageState={{ page: 0, resultsPerPage: 1 }}
        serviceAnswers={serviceAnswers}
        deleteAnswer={(id) => {}}
        />
      </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
