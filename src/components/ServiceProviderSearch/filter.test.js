import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import Filter from './filter'
import renderer from 'react-test-renderer'
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

it('Handles yes/no', () => {
  let question = {
    title: "Test question",
    description: "test",
    serviceQuestionType: "YESORNO"
  }
  act(() => {
    ReactDOM.render(
      <Filter
        question={question}
        answer={""}
        updateFilter={() => {}} />
    , container)
  });
  let filter = document.querySelector('.provider-filter');
  expect(filter.getAttribute('class')).toBe("provider-filter boolean-filter")
})

it('Handles min/max', () => {
  let question = {
    title: "Test question",
    description: "test",
    serviceQuestionType: "MINMAX"
  }
  act(() => {
    ReactDOM.render(
      <Filter
        question={question}
        answer={""}
        updateFilter={() => {}} />
    , container)
  });
  let filter = document.querySelector('.provider-filter');
  expect(filter.getAttribute('class')).toBe("provider-filter range-filter")
})

it('Handles multiplechoices', () => {
  let question = {
    title: "Test question",
    description: "test",
    serviceQuestionType: "MULTIPLECHOICES",
    choiceOptions: ["a", "b"]
  }
  act(() => {
    ReactDOM.render(
      <Filter
        question={question}
        answer={""}
        updateFilter={() => {}} />
    , container)
  });
  let filter = document.querySelector('.provider-filter');
  expect(filter.getAttribute('class')).toBe("provider-filter choice-filter")
})
