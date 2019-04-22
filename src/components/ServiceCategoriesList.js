import React from 'react'

const ServiceCategoriesList = props =>
    <div>
        <h3>Service Categories</h3>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Name</th>
            </tr>
            <tr>
                <th> <input type="text" onChange={props.handleNameChange} value={props.name} placeholder="new category" /> </th>
                <th>
                    <button type="button" onClick={props.updateServiceCategory}
                            className="btn btn-primary btn-block">Save
                    </button>
                </th>
                <th>
                    <button type="button" onClick={props.createServiceCategory}
                            className="btn btn-primary btn-block">Create
                    </button>
                </th>
            </tr>
            </thead>
            <tbody>
            {
                props.serviceCategories
                    .map(serviceCategory =>
                        <tr key={serviceCategory.id}>
                            <td>{serviceCategory.serviceCategoryName}</td>
                            <th>
                                <button type="button" onClick={(e) => props.editServiceCategory(serviceCategory, e)}
                                        className="btn btn-primary btn-block">Edit
                                </button>
                            </th>
                            <th>
                                <button type="button" onClick={(e) => props.deleteServiceCategory(serviceCategory, e)}
                                        className="btn btn-primary btn-block">Delete
                                </button>
                            </th>
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
                        <li className="page-item"><a className="page-link" onClick={props.handlePageChange}
                                                     disabled={props.page === 1}>Previous</a></li>
                        {
                            props.getPageNumbers().map(num =>
                                <li key={num} className="page-item"><a className="page-link"
                                                                       onClick={props.handlePageChange}>{num}</a></li>
                            )
                        }
                        <li className="page-item"><a className="page-link" onClick={props.handlePageChange}
                                                     disabled={props.page === Math.round(props.users.length/props.recordsNumber)}>Next</a></li>
                    </ul>
                </td>
            </tr>
            </tfoot>
        </table>
    </div>

export default ServiceCategoriesList