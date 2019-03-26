global.fetch = jest.fn()
    .mockImplemetation(url => {
    return {"whatever":"I want"}
});

if(url.includes("/faqs/321")) {
    return new Promise((resolve, reject) => {
        resolve({json: function() {
            return {"id":321,
                   "title":"abc",
                   "question":"cba",
                   "answers":[],}
}});});}
else if(url.includes("/faqs")) {
    return new Promise((resolve, reject) => {
        resolve({json: function() {
            return [
                {"id":1, "title":"a", "question":"a"},
                {"id":2, "title":"b", "question":"c"},
                {"id":3, "title":"c", "question":"c"},]}});});}

test('find faq by id', () => {
    return faqService.findFAQById(321)
        .then(faq => {
            expect(faq).toBeDefined()
            expect(faq.id).toBe(321)
            expect(faq.title).toBe('abc')
            expect(faq.question).toBe('cba')
            expect(faq.answers).toHaveLength(0)
        })
});

test('find all faqs', () => {
    return faqService.findAllFAQs()
        .then(faqs => {
            expect(faqs).toBeDefined()
            expect(faqs).toHaveLength(3)
            expect(faqs[0].id).toBe(1)
        })
});

test('create faq', () => {
    faqService.createFAQ({"id":4, "title":"d", "question":"d"});
    return faqService.findFAQById(4)
        .then(faq => {
            expect(faq).toBeDefined()
            expect(faq.id).toBe(4)
            expect(faq.title).toBe("d")
        })
});

test('delete faq', () => {
    faqService.createFAQ({"id":4, "title":"d", "question":"d"});
    return faqService.findFAQById(4)
        .then(faq => {
            expect(faq).toBeDefined()
            expect(faq.id).toBe(4)
            expect(faq.title).toBe("d")
        })
});