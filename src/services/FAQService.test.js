import FAQService from './FAQService'
import setUp from './FAQService.mock.js'
const faqService = FAQService.getInstance()

beforeAll(function () {
    setUp()
})


test('there should be 3 faqs', () => {
    return faqService.findAllFAQs()
        .then(faqs => {
            expect(faqs).toBeDefined();
            expect(faqs.length).toBe(3);
            expect(faqs[0].id).toBe(1);
            expect(faqs[2].title).toBe("question");
        })
});

test('find faq by id', () => {
    return faqService.findFAQById(4)
        .then(faq => {
            expect(faq).toBeDefined();
            expect(faq.id).toBe(4);
            expect(faq.title).toBe("Fourth question");
            expect(faq.question).toBe("How many employees do you have?");
        })
});
