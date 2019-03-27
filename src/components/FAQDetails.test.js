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

  