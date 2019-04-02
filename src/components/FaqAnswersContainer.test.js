import React from 'react'
import FAQAnswersContainer from './FaqAnswersContainer'
import TestRenderer from 'react-test-renderer'
import FaqAnswerService from '../services/FAQAnswerService'
const faqAnsService = FaqAnswerService.getInstance()
import setUp from  '../services/FAQAnswerService.mock'


beforeAll(function () {
    setUp()
})

test('FAQAnswersContainer renders correctly', () => {
    setUp()
    const testRenderer = TestRenderer.create(
        <FAQAnswersContainer/>
    )
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
})

test('FAQAnswersContainer renders correctly after deleting a faq answer', () => {
    setUp()
    const testRenderer = TestRenderer.create(
        <FAQAnswersContainer/>
    )
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root
    let deleteFaqAns = testInstance.findByProps({className: 'delete'})

    deleteFaqAns.props.onClick({})
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
})
