import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { act } from 'react-dom/test-utils'

import ServiceSelectSidebar from './serviceSelectSidebar';
import services from '../../data/services.mock.json'
import setUp from '../../services/ServiceService.mock.js'

beforeAll(function () {
    setUp();
})

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})

afterEach(() => {
  document.body.removeChild(container);
  container = null;
})

test('it selects a service', function () {
    var called = false;
    act(() => {
      ReactDOM.render(
        <ServiceSelectSidebar
          query="a"
          setQuery={() => {}}
          possibleServices={services}
          setPossibleServices={() => {}}
          activeServiceId={0}
          addService={() => {}}
          removeService={() => {}}
          selectService={() => {called = true;}}
          selectedServices={services}
          />
      , container)
    });
    document.body.querySelector(".select-service-button").dispatchEvent(new MouseEvent('click', {bubbles: true}));
    expect(called).toBe(true);
})

test('it renders properly', function() {
  const tree = renderer
    .create(
        <ServiceSelectSidebar
          query="a"
          setQuery={() => {}}
          possibleServices={services}
          setPossibleServices={() => {}}
          activeServiceId={0}
          addService={() => {}}
          removeService={() => {}}
          selectService={() => {called = true;}}
          selectedServices={services}
          />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
})
