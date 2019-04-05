import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import ServiceCategorSection from './ServiceCategorSection'
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

it('loads list of non-card links', () => {
  act(() => {
    ReactDOM.render(
      <ServiceCategorySection serviceCategory={serviceCategories[0]} />,
    container);
  });
  expect(container.querySelector('h2')).toBeDefined();
  expect(container.querySelector('h2').innerHTML).toBe(serviceCategories[0].serviceCategoryName);
  expect(container.querySelector('.row .list-group-item a').length).toBe(serviceCategories.length);
})