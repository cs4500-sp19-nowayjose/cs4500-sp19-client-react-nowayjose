import FAQService from './FAQService'
const faqService = FAQService.getInstance()

test('there should be 3 faqs', () => {
    return faqService.findAllFAQs()
        .then(faqs => {
            expect(faqs).toBeDefined();
            expect(faqs.length).toBe(3);
            expect(faqs[0].id).toBe(1);
            expect(faqs[2].title).toBe("charlie");
        })
});

test('find faq by id', () => {
    return faqService.findFAQById(3)
        .then(faq => {
            expect(faq).toBeDefined();
            expect(faq.id).toBe(3);
            expect(faq.title).toBe("charlie");
            expect(faq.question).toBe("c");
        })
});
