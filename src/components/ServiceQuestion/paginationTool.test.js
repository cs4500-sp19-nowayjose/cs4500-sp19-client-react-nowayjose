import React from 'react';
import renderer from 'react-test-renderer';

import PaginationTool from './paginationTool';

describe('pagination toolbar rendering', function() {
  let component;
  beforeEach(function() {
    component = renderer.create(
      <PaginationTool
        incrPage={() => {}}
        setResultsPerPage={() => {}}
        setPage={() => {}}
        paginationNumbers={[ 0, 1, 2, 3 ]}
      />
    )
  })

  test('render pagination buttons correctly', function() {
    const testInstance = component.root;
    expect(testInstance.findByProps({ testID: "prev-button"}).props).toBeDefined();
    expect(testInstance.findByProps({ testID: "next-button"}).props).toBeDefined();
    expect(testInstance.findByProps({ testID: "pagination-buttons"}).props).toBeDefined();
  })

  test('pagination button prev button click', function() {
    const testInstance = component.root;
    testInstance.findByProps({ testID: "prev-button" }).props.onClick()
    expect(testInstance.findByProps({ testID: "pagination-buttons"}).props).toBeDefined();
  })
})
