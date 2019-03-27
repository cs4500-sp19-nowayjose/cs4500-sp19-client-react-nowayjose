import React from 'react'
const FAQDetails = ({ faqs, faq, selectFAQ }) =>
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
        <input
            onChange={() => { }}
            className="title form-control"
            value={faq.title} />
        <br />
        <input
            onChange={() => { }}
            className="question form-control"
            value={faq.question} />
    </div>
export default FAQDetails