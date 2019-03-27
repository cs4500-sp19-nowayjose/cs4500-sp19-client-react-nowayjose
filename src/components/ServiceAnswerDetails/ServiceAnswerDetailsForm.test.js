import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import ServiceAnswerDetailsForm from './ServiceAnswerDetailsForm'
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

it('shows answer details', () => {
  act(() => {
    ReactDOM.render(
      <Router>
        <ServiceAnswerDetailsForm
          serviceAnswers={serviceAnswers}
          serviceAnswer={serviceAnswers[0]}
          selectServiceAnswer={(id) => {}}
        />
      </Router>, container);
  });
  expect(container.querySelector('.answers-max-answer').value).toBe("" + serviceAnswers[0].maxRangeAnswer)
  act(() => {
    ReactDOM.render(
      <Router>
        <ServiceAnswerDetailsForm
          serviceAnswers={serviceAnswers}
          serviceAnswer={serviceAnswers[1]}
          selectServiceAnswer={(id) => {}}
        />
      </Router>, container);
  });
  expect(container.querySelector('.answers-choice-answer').value).toBe("" + serviceAnswers[1].choiceAnswer)
})

it('shows all answer ids', () => {
  act(() => {
    ReactDOM.render(
      <Router>
        <ServiceAnswerDetailsForm
          serviceAnswers={serviceAnswers}
          serviceAnswer={serviceAnswers[0]}
          selectServiceAnswer={(id) => {}}
        />
      </Router>, container);
  });
  let selectOptions = container.getElementsByClassName("select-other-answer");
  expect(selectOptions.length).toBe(serviceAnswers.length);
  for (let i = 0; i < selectOptions.length; i++) {
    expect(selectOptions[i].value).toBe("" + serviceAnswers[i].id)
  }
})

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
