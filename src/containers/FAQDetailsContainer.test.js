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

test('[FAQDetailsContainer renders correctly after selecting different faq]', () => {
    const testRenderer = TestRenderer.create(
        <FAQDetailsContainer/>)
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance   = testRenderer.root
    let   selectFaq    = testInstance.findByProps({className: 'selectedFaq'})

    selectFaq.props.onChange({target: {value: '4'}})
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
})