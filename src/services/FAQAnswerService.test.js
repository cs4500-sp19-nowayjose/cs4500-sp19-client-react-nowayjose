import FAQAnswerService from './FAQAnswerService'
import setUp from './FAQAnswerService.mock.js'
const faqAnsService = FAQAnswerService.getInstance()

beforeAll(function () {
    setUp()
})

test('there should be 3 faq answers', () => {
    return faqAnsService.findAllFAQAnswers()
        .then(faqAnswers => {
            expect(faqAnswers).toBeDefined();
            expect(faqAnswers.length).toBe(3);
            expect(faqAnswers[0].id).toBe(12);
            expect(faqAnswers[2].id).toBe(2);
        })
});

test('find faq answer by id', () => {
    return faqAnsService.findFAQAnswerById(2)
        .then(faq => {
            expect(faq).toBeDefined();
            expect(faq.id).toBe(2);
            expect(faq.answer).toBe("no");
            expect(faq.question).toBe("Have you passed a backgruond check?");
            expect(faq.username).toBe("bob");
        })
});