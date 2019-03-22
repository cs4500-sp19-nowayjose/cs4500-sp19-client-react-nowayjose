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
        </table>
    </div>

export default ServiceCategoriesList