import React from 'react'
const FAQDetails = ({ faqs, faq, selectFAQ, create, update, remove, handleTitleChange, handleQuestionChange, cancel }) =>
    <div>
        <div>
            <h3>FAQ Details</h3>
            <select
                value={faq.id}
                onChange={(e) => selectFAQ(e.target.value)}
                className="selectedFaq" >
                {
                    faqs
                        .map(faq =>
                            <option
                                value={faq.id}
                                key={faq.id}>
                                {faq.id}
                            </option>
                        )
                }
            </select>
            <br />
            <input type="text" className="form-control" onChange={handleTitleChange} value={faq.title} placeholder={faq.title} />
            <br />
            <input type="text" className="form-control" onChange={handleQuestionChange} value={faq.question} placeholder={faq.question} />
        </div>
        <br />
        <div>
            <button onClick={(e) => cancel()} class="btn btn-primary">
                Cancel
                </button>
            <button onClick={(e) => create()} class="btn btn-primary">
                Create
                </button>
            <button onClick={(e) => remove()} class="btn btn-primary">
                Delete
                </button>
            <button onClick={(e) => update()} class="btn btn-primary">
                Update
                </button>
        </div>
    </div>
export default FAQDetails