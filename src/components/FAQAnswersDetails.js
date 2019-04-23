import React from 'react'

const FAQAnswers = props =>
    <div>
        <h3> FAQ Answer Details </h3>
        <select
            value={props.id}
            onChange={props.changeFaqAnswer}
            className="form-control">
            {
                props.faqAnswers.map(faqAnswer =>
                    <option
                        value={faqAnswer.id}
                        key={faqAnswer.id}>
                            {faqAnswer.id}
                    </option>)
            }
        </select>
        <label>User</label><br/>
        <input 
            onChange={() => {}}
            className="form-control"
            value={props.username}/>
        <label>Question</label><br/>
        <input
            onChange={() => {}}
            className="form-control"
            value={props.question}/>
        <label>Answer</label><br/>
        <input
            onChange={props.handleAnswerChange}
            className="form-control" 
            value={props.answer}/>
        <br/>
        <button type="button" class="btn btn-primary" onClick={props.update}>Update</button>
        <button type="button" class="btn btn-danger" onClick={props.delete}>Delete</button>
        <button type="button" class="btn btn-danger" onClick={props.cancel}>Cancel</button>
    </div>

export default FAQAnswers