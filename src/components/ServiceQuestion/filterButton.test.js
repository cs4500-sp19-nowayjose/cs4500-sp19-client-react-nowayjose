import React from 'react';
import FilterButton from './filterButton';
import renderer from 'react-test-renderer';

test('Render filter button', function() {
  const component = renderer.create(
    <FilterButton
      onClickFilterData={() => {}}
    />
  )
  let tree = component.toJSON()
  return expect(tree).toMatchSnapshot()
})