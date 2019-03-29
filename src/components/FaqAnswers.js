import React from 'react'

const FAQAnswers = props =>
            <div>
                <h3>FAQ Answers</h3>
                <table className="table">
                    <thread>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Question</th>
                            <th scope="col">Answer</th>
                            <th>&nbsp;</th>
                        </tr>
                        <tr>
                            <th> <input type="text" onChange={props.handleUsernameChange} value={props.username} placeholder="username"/></th>
                            <th> <input type="text" onChange={props.handleQuestionChange} value={props.question} placeholder="question"/></th>
                            <th> <input type="text" onChange={props.handleAnswerChange} value={props.answer} placeholder="answer"/></th>
                            <th> <button type="button" onClick={props.updateFAQAns} class="btn btn-primary btn-block">Save</button> </th>
                            <th> <button type="button" onClick={props.createFAQAns} class="btn btn-primary btn-block">Create</button> </th>
                        </tr>
                    </thread>
                    <tbody>
                    {
                        props.faqAnswers
                            .map(faqAnswer =>
                                <tr key={faqAnswer.id}>
                                    <td>{faqAnswer.username}</td>
                                    <td align="center">{faqAnswer.question}</td>
                                    <td align="center">{faqAnswer.answer}</td>
                                    <th> <button type="button" onClick={(e) => props.editFAQAns(faqAnswer, e)} class="btn btn-primary btn-block">Edit</button> </th>
                                    <th> <button type="button" onClick={(e) => props.deleteFAQAns(faqAnswer, e)} class="btn btn-primary btn-block">Delete</button> </th>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>

export default FAQAnswers