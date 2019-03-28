import React from 'react';
import FAQs from './FAQs';
import renderer from 'react-test-renderer';
test('Render all faqs', () => {
   const component = renderer.create(
     <h3>Frequently Asked Questions:</h3>
     );

   let tree = component.toJSON();
   expect(tree).toMatchSnapshot();});