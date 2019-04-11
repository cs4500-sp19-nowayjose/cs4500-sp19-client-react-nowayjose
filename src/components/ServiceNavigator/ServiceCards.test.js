import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import ServiceCards from './ServiceCards'
import renderer from 'react-test-renderer'
import serviceCategories from '../../data/service-categories.mock.json'
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

it('loads all cards w/ images', () => {
  act(() => {
    ReactDOM.render(
      <ServiceCards services={serviceCategories[0].services.slice(0, 4)} />,
    container);
  });
  expect(container.querySelector('.card').length).toBe(4);
  expect(container.querySelector('.card-img-top').length).toBe(4);
  act(() => {
    ReactDOM.render(
      <ServiceCards services={serviceCategories[0].services.slice(0, 3)} />,
    container);
  });
  expect(container.querySelector('.card').length).toBe(3);
  expect(container.querySelector('.card-img-top').length).toBe(3);
})