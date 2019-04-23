import React from 'react';
import renderer from 'react-test-renderer';
import frequentlyAskedQuestionData from '../data/frequentlyAskedQuestion.mock.json'
import FAQDetails from './FAQDetails';

test('render faq details correctly', function() {
    const component = renderer.create(
      <FAQDetails
        selectFAQ={() => {}}
        faq={{  
            "answers": [],
            "id": 6,
            "question": "Did you pass a background check?",
            "title": "First question"
        }}
        faqs={frequentlyAskedQuestionData}

      />
    )
    const testInstance = component.root;
    expect(testInstance.findByProps({ className: "selectedFaq"})).toBeDefined();
    expect(testInstance.findByProps({ className: "title form-control" })).toBeDefined();
    expect(testInstance.findByProps({ className: "question form-control" })).toBeDefined()
  })

  test('render faq details correctly after changing question', function() {
    const component = renderer.create(
      <FAQDetails
        selectFAQ={() => {}}
        faq={{  
            "answers": [],
            "id": 6,
            "question": "Did you pass a background check?",
            "title": "First question"
        }}
        faqs={frequentlyAskedQuestionData}

      />
    )
    const testInstance = component.root;
    let   selectFaq    = testInstance.findByProps({className: 'selectedFaq'})
    selectFaq.props.onChange({target: {value: '4'}})
    expect(testInstance.findByProps({ className: "selectedFaq"})).toBeDefined();
    expect(testInstance.findByProps({ className: "title form-control" })).toBeDefined();
    expect(testInstance.findByProps({ className: "question form-control" })).toBeDefined()
  })

  test('render faq details correctly redirects to FAQs after creating question', function() {
    const component = renderer.create(
      <FAQDetails
        selectFAQ={() => {}}
        faq={{  
            "answers": [],
            "id": 6,
            "question": "Did you pass a background check?",
            "title": "First question"
        }}
        faqs={frequentlyAskedQuestionData}

      />
    )
    const testInstance = component.root;
    let   createFAQ    = testInstance.findByProps({className: 'create'})
    createFAQ.props.onChange()
    expect(testInstance.findByProps({ className: "faq-row"})).toBeDefined();
  })

  test('render faq details correctly redirects to FAQS after deleting question', function() {
    const component = renderer.create(
      <FAQDetails
        selectFAQ={() => {}}
        faq={{  
            "answers": [],
            "id": 6,
            "question": "Did you pass a background check?",
            "title": "First question"
        }}
        faqs={frequentlyAskedQuestionData}

      />
    )
    const testInstance = component.root;
    let   deleteFAQ    = testInstance.findByProps({className: 'delete'})
    deleteFAQ.props.onChange()
    expect(testInstance.findByProps({ className: "faq-row"})).toBeDefined();
  })

  test('render faq details correctly redirects to FAQS after updating question', function() {
    const component = renderer.create(
      <FAQDetails
        selectFAQ={() => {}}
        faq={{  
            "answers": [],
            "id": 6,
            "question": "Did you pass a background check?",
            "title": "First question"
        }}
        faqs={frequentlyAskedQuestionData}

      />
    )
    const testInstance = component.root;
    let   updateFAQ    = testInstance.findByProps({className: 'update'})
    updateFAQ.props.onChange()
    expect(testInstance.findByProps({ className: "selectedFaq"})).toBeDefined();
    expect(testInstance.findByProps({ className: "title form-control" })).toBeDefined();
    expect(testInstance.findByProps({ className: "question form-control" })).toBeDefined()
  })