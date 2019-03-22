global.fetch = jest.fn()
    .mockImplementation(url => {
        if (url.includes("/faqs/3")) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function () {
                        return { "id": 3, "title": "charlie", "question": "c" }
                    }
                });
            });
        }
        else if (url.includes("/faqs")) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function () {
                        return [
                            { "id": 1, "title": "alice", "question": "a" },
                            { "id": 2, "title": "bob", "question": "b" },
                            { "id": 3, "title": "charlie", "question": "c" },]
                    }
                });
            });
        }

        return { "default": "default" }
    });