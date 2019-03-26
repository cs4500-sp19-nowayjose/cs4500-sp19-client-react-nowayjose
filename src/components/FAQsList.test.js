import React from 'react';
import renderer from 'react-test-renderer';
import FAQsList from './FAQsList';

test('renders faq correctly', function() {
  const component = renderer.create(
    <FAQsList
      faqs={[{"answers": [],"id": 2,"question": "Favorite color?","title": "Second question"}]}
      title=""
      question=""
      updateId=-1
      recordsNumber=10
      page=1
      filter={{}}

      editFAQ = {() => {}}
      deleteFAQ = {() => {}}
      createFAQ = {() => {}}
      updateFAQ = {() => {}}
      getPageNumbers = {() => {return [1]}}
      passesFilter = {() => {return true}}
      selectFAQ = {() => {}}
      handleTitleChange = {() => {}}
      handleQuestionChange = {() => {}}
      handlePageChange = {() => {}}
      handleRecordsNumberChange = {() => {}}
      handleFilterChange = {() => {}}
    />
  )
  const testInstance = component.root;
  expect(testInstance.findByProps({ className: "faq-row"})).toBeDefined();
  expect(testInstance.findByProps({ className: "faq-row"})).lengthToBe(1);
}) 