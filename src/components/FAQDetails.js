import React from 'react'
const FAQDetails = ({ faqs, faq, selectFAQ, create, update, remove, handleTitleChange, handleQuestionChange}) =>
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
            <input type="text" onChange={handleTitleChange} value={faq.title} placeholder={faq.title}/>
            <br />
            <input type="text" onChange={handleQuestionChange} value={faq.question} placeholder={faq.question} />
        </div>

        <div>
            <button onClick={(e) => create()}>
                Create
                </button>
            <button onClick={(e) => remove()}>
                Delete
                </button>
            <button onClick={(e) => update()}>
                Update
                </button>
        </div>
    </div>
export default FAQDetails