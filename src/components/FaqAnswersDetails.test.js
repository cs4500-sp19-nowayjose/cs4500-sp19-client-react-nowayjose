import React from 'react'
import FAQAnswersDetailsContainer from './FAQAnswersDetailsContainer'
import TestRenderer from 'react-test-renderer'
import FaqAnswerService from '../services/FAQAnswerService'
const faqaService = FaqAnswerService.getInstance()
import '../services/FAQAnswerService.mock'

test('[FAQAnswersDetailsContainer renders correctly', () => {
    const tr = TestRenderer.create(
        <FAQAnswersDetailsContainer/>
    )
    let  tree = tr.toJSON()
    expect(tree).toMatchSnapshot()

    tree = tr.toJSON()
    expect(tree).toMatchSnapshot()
})

test('[FAQAnswerDetailsContainer renders correctly after selecting different faq ans', () => {
    const tr = TestRenderer.create(
        <FAQAnswersDetailsContainer/>
    )
    let tree = tr.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = TestRenderer.root
    let selectFaq = testInstance.findByProps({className: 'selectedFaq'})

    selectFaq.props.onChange({target: {value: '9'}})
    tree = tr.toJSON()
    expect(tree).toMatchSnapshot()
})