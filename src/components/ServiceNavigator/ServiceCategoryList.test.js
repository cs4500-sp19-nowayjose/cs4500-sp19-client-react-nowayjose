import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import ServiceCategoryList from './ServiceCategoryList'
import renderer from 'react-test-renderer'
import serviceCategories from '../../data/serviceCategories.mock.json'
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

it('loads all categories into list', () => {
  act(() => {
    ReactDOM.render(
      <ServiceCategoryList serviceCategories={serviceCategories} />,
    container);
  });
  expect(container.querySelector('.list-group')).toBeDefined();
  expect(container.querySelector('.list-group-item').length).toBe(serviceCategories.length);
})