import React from 'react';
import renderer from 'react-test-renderer';

import QuestionTable from './questionTable';

describe('service questions table rendering', function() {
  let component;
  beforeEach(function() {
    component = renderer.create(
      <QuestionTable
        filterState={{}}
        pageState={{}}
        handleFilterChange={() => {}}
        serviceQuestions={[ 
          { title: 'hey', description: 'test', serviceQuestionType: 'testType' } 
        ]}
        deleteQuestion={() => {}}
      />
    )
  })

  test('render pagination buttons correctly', function() {
    const testInstance = component.root;
  })

  test('pagination button prev button click', function() {
    const testInstance = component.root;
  })
})
