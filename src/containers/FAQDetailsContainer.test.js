import React from 'react'
import FAQDetailsContainer from './FAQDetailsContainer'
import TestRenderer from 'react-test-renderer';
import FaqsService from '../services/FAQService'
const faqsService = FaqsService.getInstance()
import '../services/FAQService.mock'

test('[FAQDetailsContainer renders correctly]', () => {
    const testRenderer = TestRenderer.create(
        <FAQDetailsContainer/>)
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
})

