import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import ServiceCategorSectionList from './ServiceCategorSectionList'
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

it('loads all service category sections into the list', () => {
  act(() => {
    ReactDOM.render(
      <ServiceCategorySectionList serviceCategories={serviceCategories} />,
    container);
  });
  expect(container.querySelector('ul.list-group')).toBeDefined();
  expect(container.querySelector('.list-group .list-group-item').length).toBe(serviceCategories.legnth);
})