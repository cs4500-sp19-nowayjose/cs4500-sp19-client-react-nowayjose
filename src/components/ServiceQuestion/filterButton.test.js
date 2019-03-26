import React from 'react';
import renderer from 'react-test-renderer';

import FilterButton from './filterButton';

test('render filter button correctly', function() {
  const component = renderer.create(
    <FilterButton
      onClickFilterData={() => {}}
    />
  )
  const testInstance = component.root;
  expect(testInstance.findByProps({ className: "btn-lg btn"})).toBeDefined();
  expect(testInstance.findByProps({ className: "fas fa-search fa-2x" })).toBeDefined()
})