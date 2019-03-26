
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import ServiceQuestion from './'
import setUpService from '../../services/ServiceQuestion.mock'
import serviceQuestionMockData from '../../data/serviceQuestions.mock.json'

describe('service question on admin panel rendering test', function() {
  let ServiceQuestionComponent
  beforeAll(function() {
    setUpService();
    ServiceQuestionComponent = renderer.create(
      <Router>
        <ServiceQuestion
          isTest
          testData={serviceQuestionMockData}
        />
      </Router>
    )
  })

  test('Render service questions table', function() {
    const component = ServiceQuestionComponent;
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Filtering title works', async function() {
    const component = ServiceQuestionComponent;
    const titleFieldFilter = component.root.findByProps({ testID: 'service-question-title-filter' })
    const filterButton = component.root.findByProps({ testID: "search-btn-filter-service-question" })
    await titleFieldFilter.props.onChange({ target: { value: 'houses' }})
    expect(titleFieldFilter.props.value).toBe("houses")
    await filterButton.props.onClick()
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
