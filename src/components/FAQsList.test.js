import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import FAQsList from './FAQsList'
import renderer from 'react-test-renderer'
import faqs from '../../data/frequentlyAskedQuestion.mock.json'
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
    ReactDOM.render(<Router>
      <FAQsList
        faqs={faqs}
        title=""
        question=""
        updateId=-1
        recordsNumber=10
        page=1
        filter={{}}

        editFAQ = {() => {}}
        deleteFAQ = {() => {}}
        createFAQ = {() => {}}
        updateFAQ = {() => {}}
        getPageNumbers = {() => {return [1]}}
        passesFilter = {() => {return true}}
        selectFAQ = {() => {}}
        handleTitleChange = {() => {}}
        handleQuestionChange = {() => {}}
        handlePageChange = {() => {}}
        handleRecordsNumberChange = {() => {}}
        handleFilterChange = {() => {}}
      />
    </Router>, container)
  });
  var rows = container.getElementsByClassName("faq-row");
  expect(rows.length).toBe(3);
})

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
      <FAQsList
        faqs={faqs}
        title=""
        question=""
        updateId=-1
        recordsNumber=10
        page=1
        filter={{}}

        editFAQ = {() => {}}
        deleteFAQ = {() => {}}
        createFAQ = {() => {}}
        updateFAQ = {() => {}}
        getPageNumbers = {() => {return [1]}}
        passesFilter = {() => {return true}}
        selectFAQ = {() => {}}
        handleTitleChange = {() => {}}
        handleQuestionChange = {() => {}}
        handlePageChange = {() => {}}
        handleRecordsNumberChange = {() => {}}
        handleFilterChange = {() => {}}
      />
      </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})