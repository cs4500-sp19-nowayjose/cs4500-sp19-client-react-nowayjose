import React from 'react'
import FAQService from '../services/FAQService'

const FAQsList = props => {
    return (
        <div>
            <h3>Frequently Asked Questions:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Question</th>
                        <th>&nbsp;</th>
                    </tr>
                    <tr>
                        <th> <input type="text" onChange={props.handleTitleChange} value={props.title} placeholder="Title" /> </th>
                        <th> <input type="text" onChange={props.handleQuestionChange} value={props.question} placeholder="Question" /> </th>
                        <th> <button type="button" onClick={props.updateFAQ} className="btn btn-primary btn-block">Save</button> </th>
                        <th> <button type="button" onClick={props.createFAQ} className="btn btn-primary btn-block">Create</button> </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.faqs
                            .slice((props.page-1)*props.recordsNumber,
                                    Math.min(props.page*props.recordsNumber,
                                            props.faqs.length))
                            .filter(props.passesFilter)
                            .map(faq =>
                                <tr onClick={() => props.selectFAQ(faq.id)}  key={faq.id}>
                                    <td>{faq.title}</td>
                                    <td align="center">{faq.question}</td>
                                    <th> <button type="button" onClick={(e) => props.editFAQ(faq, e)} className="btn btn-primary btn-block">Edit</button>  </th>
                                    <th> <button type="button" onClick={(e) => props.deleteFAQ(faq, e)} className="btn btn-primary btn-block">Delete</button>    </th>
                                </tr>
                            )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <select onChange={props.handleRecordsNumberChange} value={props.recordsNumber}>
                                <option>10</option>
                                <option>25</option>
                                <option>50</option>
                                <option>100</option>
                                <option>All</option>
                            </select>
                        </td>
                        <td>
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" onClick={props.handlePageChange} disabled={props.page == 1}>Previous</a></li>
                                    {
                                        props.getPageNumbers().map(num =>
                                            <li key={num} className="page-item"><a className="page-link" onClick={props.handlePageChange}>{num}</a></li>
                                        )
                                    }
                                <li className="page-item"><a className="page-link" onClick={props.handlePageChange} disabled={props.page == Math.round(props.faqs.length/props.recordsNumber)}>Next</a></li>
                            </ul>
                        </td>
                        <td>
                            <button className="btn btn-secondary btn-block" onClick={props.handleFilterChange}>
                                {    
                                    (props.filter.question == undefined && props.filter.title == undefined) ? 'Search' : 'Clear Search'
                                }
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default FAQsList